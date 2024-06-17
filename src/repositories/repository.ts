import { Table } from "./entity-config-management/table.type";
import { EntitySchemaFetcher } from "./entity-config-management/entity-schema-fetcher";
import { Knex } from "knex";
import { InvalidSchemaError } from "./errors/invalid-schema.error";
import { Column, ColumnType } from "./entity-config-management/column.type";

export abstract class Repository {
    private readonly entityName: string;
    private readonly knex: Knex;

    protected constructor(entityName: string, knex: Knex) {
        this.entityName = entityName;
        this.knex = knex;
    }

    public async applyTableSchema(): Promise<void> {
        const table = await this.getTable();
        if (table.name !== this.entityName)
            throw new InvalidSchemaError(
                `Имя сущности (${this.entityName}) не совпадает с именем таблицы (${table.name}).`,
                this.entityName
            );

        try {
            const hasTable = await this.knex.schema.hasTable(table.name);
            if (hasTable) return;

            await this.knex.schema.createTable(table.name, (t) => {
                for (const column of table.columns) {
                    this.applyColumnSchema(column, t);
                }
            });
        } catch (e) {
            throw new InvalidSchemaError(`Некорректная схема таблицы ${table.name}.`, this.entityName, e);
        }
    }

    private applyColumnSchema(column: Column, tableBuilder: Knex.TableBuilder): void {
        switch (column.type) {
            case ColumnType.Serial: {
                tableBuilder.bigIncrements(column.name);
                break;
            }
            case ColumnType.String: {
                tableBuilder.string(column.name, 100).defaultTo(column.default ?? null);
                break;
            }
            case ColumnType.Number: {
                tableBuilder.integer(column.name).defaultTo(column.default ?? null);
                break;
            }
            case ColumnType.Boolean: {
                tableBuilder.boolean(column.name).defaultTo(column.default ?? null);
            }
        }

        if (column.isUnique) tableBuilder.unique(column.name);

        if (column.isNullable) tableBuilder.setNullable(column.name);
    }

    private async getTable(): Promise<Table> {
        const fetcher = new EntitySchemaFetcher(`../${this.entityName}/schema.json`);
        return await fetcher.fetchConfig();
    }
}

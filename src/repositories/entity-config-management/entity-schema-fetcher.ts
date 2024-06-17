import { Table } from "./table.type";
import fs from "fs/promises";

export class EntitySchemaFetcher {
    private readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    public async fetchConfig(): Promise<Table> {
        const file = await fs.readFile(this.path, "utf-8");
        return JSON.parse(file);
    }
}

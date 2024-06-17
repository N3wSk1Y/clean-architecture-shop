export type Column = {
    name: string;
    type: ColumnType;
    isNullable: boolean | null;
    isUnique: boolean | null;
    default: any | null;
};

export enum ColumnType {
    Serial = "serial",
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Date = "date"
}

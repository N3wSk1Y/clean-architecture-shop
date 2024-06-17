import { Column } from "./column.type";

export type Table = {
    name: string;
    columns: Column[];
};

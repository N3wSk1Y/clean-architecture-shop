type Strict<T> = T & { [K in keyof T]: T[K] } & { [K in Exclude<string, keyof T>]?: never };

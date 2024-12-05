export interface Todo {
id: number;
description: string
done: boolean;
duedate ?: Date;
priority ? : "Low" | "Medium" | "High";
}

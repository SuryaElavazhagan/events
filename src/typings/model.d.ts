import { Event } from "../model/Event";

type Diff<T, U> = T extends U ? never : T;
type PrimitiveTypes = string | number | boolean | string[] | number[] | boolean[] | string[][] | undefined;
type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends PrimitiveTypes ? K : never }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;


interface EventJSON extends NonFunctionProperties<Event> {
  date: string;
}
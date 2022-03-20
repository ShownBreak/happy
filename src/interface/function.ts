export interface ICallbackFunction<T> {
  (newVal: T, oldVal: T): void;
}
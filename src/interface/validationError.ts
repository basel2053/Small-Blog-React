export interface IValidationError {
  value: string;
  msg: string;
  param?: string;
  location?: string;
}

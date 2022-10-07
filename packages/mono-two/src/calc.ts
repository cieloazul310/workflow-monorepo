export function add(...values: number[]) {
  if (!values.length) return 0;
  return values.reduce((accum, curr) => accum + curr, 0);
}

export function multiply(...values: number[]) {
  if (!values.length) return 1;
  return values.reduce((accum, curr) => accum * curr, 1);
}

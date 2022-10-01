
export function add(...values: number[]) {
  return values.reduce((accum, curr) => accum + curr, 0);
}

export function multiply(...values: number[]) {
  return values.reduce((accum, curr) => accum * curr, 1);
}

export function add(...values: number[]) {
  if (!values.length) return 0;
  return values.reduce((accum, curr) => accum + curr, 0);
}

export function multiply(...values: number[]) {
  if (!values.length) return 1;
  return values.reduce((accum, curr) => accum * curr, 1);
}

export function divide(...values: number[]) {
  if (!values.length) return 1;
  if (values.includes(0)) throw new Error('Error! Array contain zero value.');
  return values.reduce((accum, curr) => accum / curr, 1);
}

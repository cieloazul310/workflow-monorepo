import { add, multiply } from '@cieloazul310/mono-two';

export default function diff(...values: number[]) {
  const sum = add(...values);
  const product = multiply(...values);

  return product - sum;
}

import diff from '../src';

describe('diff', () => {
  it('0 value', () => {
    expect(diff()).toBe(1);
  });
  it('1 value', () => {
    expect(diff(1)).toBe(0);
  });
  it('2 values', () => {
    expect(diff(1, 2)).toBe(-1);
  });
  it('3 values', () => {
    expect(diff(1, 2, 3)).toBe(0);
  });
  it('4 values', () => {
    expect(diff(1, 2, 3, 4)).toBe(14);
  });
});

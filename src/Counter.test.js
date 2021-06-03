import Counter from './Counter';

let counter = null;

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforeEach');
  counter = new Counter();
});

afterAll(() => {
  console.log('afterAll');
});

describe('测试分组1', () => {
  test('测试 Counter 中的 addOne 方法', () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test('测试 Counter 中的 minusOne 方法', () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });
});

describe('测试分组2', () => {
  test('测试 Counter 中的 addOne 方法', () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });
});

/**
 * 普通匹配器
 * toBe
 * .not 用来测试相反的用例
 * .toEqual
 */
test('测试10与10相匹配', () => {
  // toBe 匹配器 matchers
  expect(10).toBe(10);
});

test('测试对象内容相等', () => {
  // toEqual
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});

/**
 * 布尔值匹配器
 */
test('测试 toBeNull 匹配器', () => {
  const a = null;
  expect(a).toBeNull();
});
test('测试 toBeUndefined 匹配器', () => {
  const a = undefined;
  expect(a).toBeUndefined();
});
test('测试 toBeDefined 匹配器', () => {
  const a = 1;
  expect(a).toBeDefined();
});
test('测试 toBeTruthy 匹配器', () => {
  const a = true;
  expect(a).toBeTruthy();
});
test('测试 toBeFalsy 匹配器', () => {
  const a = false;
  expect(a).toBeFalsy();
});
test('测试 not 匹配器', () => {
  const a = 1;
  expect(a).not.toBeFalsy(); // 等价于  expect(a).toBeTruthy();
});

/**
 * 数字匹配器
 */
test('toBeGreaterThan', () => {
  // 期待结果比 9 大
  const count = 10;
  expect(count).toBeGreaterThan(9);
});
test('toBeLessThan', () => {
  // 期待结果比 11 小
  const count = 10;
  expect(count).toBeLessThan(11);
});
test('toBeGreaterThanOrEqual', () => {
  // 期待结果 count 大于等于 10
  const count = 10;
  expect(count).toBeGreaterThanOrEqual(10);
});
test('toBeLessThanOrEqual', () => {
  // 期待结果 count 小于等于 10
  const count = 10;
  expect(count).toBeLessThanOrEqual(10);
});
test('toBeCloseTo', () => {
  // 浮点数比较 不能用Equal
  const firstNumber = 0.1;
  const secondNumber = 0.2;
  expect(firstNumber + secondNumber).toBeCloseTo(0.3);
});

/**
 * 字符串匹配器
 * toMatch - 正则表达式的字符
 * .toHaveLength(number) - 判断一个有长度的对象的长度
 */
test('toMatch', () => {
  const str = 'http://baidu.com';
  expect(str).toMatch(/baidu/);
});

/**
 * 数组匹配器
 * .toContain(item) - 判断数组是否包含特定子项
 * .toContainEqual(item) - 判断数组中是否包含一个特定对象
 */
test('toContain', () => {
  const arr = ['ios', 'android', 'other'];
  expect(arr).toContain('ios');
  const data = new Set(arr);
  expect(data).toContain('ios');
});

/**
 * 异常
 * toThrow - 要测试的特定函数会在调用时抛出一个错误
 */
const throwNewErrorFunc = () => {
  throw new Error('this is a new error');
};
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow('this is a new error');
});

/** .resolves 和 .rejects
 *  用来测试 promise
 */

// resolves
test('resolves to lemon', () => {
  // make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

// rejects
test('resolves to lemon', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

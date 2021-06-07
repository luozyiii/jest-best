jest.mock('./mock2');
// jest.unmock('./mock2'); // 取消对mock2 文件的模拟

import { fetchData } from './mock2';

const { getNumber } = jest.requireActual('./mock2');

test('test mock2 fetchData', () => {
  return fetchData().then((data) => {
    expect(eval(data)).toEqual('123');
  });
});

test('test mock2 getNumber', () => {
  expect(getNumber()).toEqual(123);
});

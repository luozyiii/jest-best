import axios from 'axios';
import { runCallback, createObject, getData } from './mock';

jest.mock('axios');

test('test runCallback', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用
  func.mockReturnValue('dell'); // 自由设置的返回结果
  runCallback(func);
  runCallback(func);
  runCallback(func);
  expect(func).toBeCalled(); // func 是否被执行
  expect(func.mock.calls.length).toBe(3); // 断言
  expect(func.mock.results[0].value).toBe('dell');
  // console.log(func.mock);
});

// 以及 this 和调用顺序
test('test createObject', () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
});

// 改变函数的内部实现
test.only('test getData', async () => {
  // axios.get.mockResolvedValue({ data: 'hello' });
  axios.get.mockResolvedValueOnce({ data: 'hello' });
  axios.get.mockResolvedValueOnce({ data: 'wrold' });
  await getData().then((data) => {
    expect(data).toBe('hello');
  });
  await getData().then((data) => {
    expect(data).toBe('wrold');
  });
});

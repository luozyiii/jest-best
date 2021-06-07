import timer from './timer';

jest.useFakeTimers();
test('timer test', () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers();
  jest.advanceTimersByTime(3000); // 快进3秒
  expect(fn).toHaveBeenCalledTimes(1);
});

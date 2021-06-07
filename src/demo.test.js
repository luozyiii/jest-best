jest.mock('./utils');
// jest.mock 发现utils 是一个类， 会自动把类的构造函数和方法变成 jest.fn()
import Utils from './utils';
import demoFunction from './demo';
import { expect } from '@jest/globals';

test('test demoFunction', () => {
  demoFunction();
  expect(Utils).toHaveBeenCalled();
  expect(Utils.mock.instances[0].a).toHaveBeenCalled();
  expect(Utils.mock.instances[0].b).toHaveBeenCalled();
});

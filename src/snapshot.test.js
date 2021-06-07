import { generateConfig, generateAnotherConfig } from './snapshot';

test('测试 generateConfig 函数', () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test('测试 generateAnotherConfig 函数', () => {
  expect(generateAnotherConfig()).toMatchSnapshot();
});

test('测试 generateAnotherConfig 函数2', () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `,
  );
});

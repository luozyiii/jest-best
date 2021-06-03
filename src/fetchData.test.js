import { fetchData, fetchData1 } from './fetchData';

test('fetchData 返回结果 为 {success: true} ', () => {
  return fetchData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

test('fetchData 返回结果 为 {success: true}', () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

// catch 语法坑 expect.assertions(1)  expect必须执行一次
test('fetchData1 返回结果 为 404', () => {
  expect.assertions(1);
  return fetchData1().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  });
});

test('fetchData1 返回结果 为 404', () => {
  return expect(fetchData1()).rejects.toThrow();
});

test('fetchData1 返回结果 为 404', async () => {
  await expect(fetchData1()).rejects.toThrow();
});

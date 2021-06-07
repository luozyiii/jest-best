import addDivToBody from './dom';
import $ from 'jquery';
/**
 * node 不具备dom
 * jest在 node 环境下模拟了一套dom
 */

test('test addDivToBody', () => {
  addDivToBody();
  expect($('body').find('div').length).toBe(1);
});

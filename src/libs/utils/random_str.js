"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandom;

// 生成随机字符串
function getRandom() {
  let len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const maxPos = $chars.length;
  let str = '';

  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return str;
}
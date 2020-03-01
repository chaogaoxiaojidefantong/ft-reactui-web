"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;


class CommonUtil {
  oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true;
      }
    }

    return false;
  }

  getQueryString(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
  }

}

const commonUtil = new CommonUtil();
var _default = commonUtil;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = csv;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.regexp.replace");

/*
  inspired by https://www.npmjs.com/package/react-csv-downloader
  now removed from Github
*/
const newLine = '\r\n';

const appendLine = (content, row, _ref) => {
  let {
    separator,
    quoted
  } = _ref;
  const line = row.map(data => {
    if (!quoted) return data; // quote data

    data = typeof data === 'string' ? data.replace(/"/g, '"') : data;
    return "\"".concat(data, "\"");
  });
  content.push(line.join(separator));
};

const defaults = {
  separator: ',',
  quoted: false
};

function csv(columns, datas, options) {
  let noHeader = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  options = Object.assign({}, defaults, options);
  let columnOrder;
  const content = [];
  const column = [];

  if (columns) {
    columnOrder = columns.map(v => {
      if (typeof v === 'string') return v;

      if (!noHeader) {
        column.push(typeof v.title !== 'undefined' ? v.title : v.key);
      }

      return v.key;
    });
    if (column.length > 0) appendLine(content, column, options);
  } else {
    columnOrder = [];
    datas.forEach(v => {
      if (!Array.isArray(v)) {
        columnOrder = columnOrder.concat(Object.keys(v));
      }
    });

    if (columnOrder.length > 0) {
      columnOrder = columnOrder.filter((value, index, self) => self.indexOf(value) === index);
      if (!noHeader) appendLine(content, columnOrder, options);
    }
  }

  if (Array.isArray(datas)) {
    datas.forEach(row => {
      if (!Array.isArray(row)) {
        row = columnOrder.map(k => typeof row[k] !== 'undefined' ? row[k] : '');
      }

      appendLine(content, row, options);
    });
  }

  return content.join(newLine);
}
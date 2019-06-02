'use strict';

function functify (obj) {
  return JSON.stringify(obj, (key, val) => {
    return (typeof val === 'function') ? '_function_' : val;
  });
}

module.exports = {
  functify: functify
}

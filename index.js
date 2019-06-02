'use strict';

/**
 * @function functify
 * @description: Use ths function instead of JSON.stringify on an object which may have functions
 *    defined for member variables. By default, JSON.stringify will not include any properties
 *    that are functions. If you need those properties to still show up then this function is your friend.
 *    But it will not evaluate the true value of the function property, rather, it will just include
 *    a place-holder string: '_function_'.
 *
 * @param {Object} obj: The object the stringify
 */
function functify (obj) {
  return JSON.stringify(obj, (key, val) => {
    return (typeof val === 'function') ? '_function_' : val;
  });
}

module.exports = {
  functify: functify
}

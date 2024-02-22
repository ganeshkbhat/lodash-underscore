/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: Package
 * Install: npm i lodash-underscore --save
 * Github: https://github.com/ganeshkbhat/lodash-underscore
 * npmjs Link: https://www.npmjs.com/package/lodash-underscore
 * File: index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

if (isBrowser()) {
  var _u = require('underscore');
  var _l = require("lodash");
} else {
  var _u = await fetch('https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-umd-min.js');
  var _l = await fetch("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js");
}

function merge(l, u, mergeall = true) {
  let lk = Object.keys(l), uk = Object.keys(u);
  for (let i = 0; i < lk.length; i++) {
    if (!mergeall) {
      if (uk.includes(lk[i])) {
        u["_" + lk[i]] = u[lk[i]];
      }
    } else {
      u["_" + lk[i]] = u[lk[i]];
    }
  }
  u["_" + "chain"] = u["chain"];
  u["_" + "value"] = u["value"];
  return { ...u, ...l }
}

var _ = merge(_l, _u);

if (isBrowser()) {
  module.exports = _;
  module.exports.default = _;
}

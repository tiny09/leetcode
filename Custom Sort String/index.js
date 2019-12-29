/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  return T.split('').sort(function (a, b) {
    return S.indexOf(a) - S.indexOf(b);
  }).join('');
};
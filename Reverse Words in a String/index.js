/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	if (s.trim().length === 0) {
		return '';
	}

	var arr = s.trim().split(' ');
	var result = '';

	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] !== '') {
			if (result.charAt(result.length - 1) === ' ' || i === arr.length - 1) {
				result += arr[i];
			} else {
				result = result + ' ' + arr[i];
			}
		} else {
			if (result.charAt(result.length - 1) !== ' ') {
				result += ' ';
			}
		}
	}

	return result;
};

/**
 * @deprecated not as fast as my own solution
 * @author reference: https://leetcode.com/problems/reverse-words-in-a-string/discuss/345850/Clean-and-simple-solution-using-Javascript
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str1 = s.split(" ");
  let str2 = [];
  for (var i = str1.length - 1; i >= 0; i--) {
    str2.push(str1[i]);
  }
  return str2.join(" ").replace(/\s+/g, " ").trim();
};
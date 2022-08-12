/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// beats 79.55 %,33.74 %
var romanToInt = function (s) {
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    let res = 0;
    let i = 0;
    for (i = 0; i < s.length - 1; i++) {
        if (map.get(s[i]) >= map.get(s[i + 1])) {
            res += map.get(s[i]);
        } else {
            res -= map.get(s[i]);
        }
    }
    res += map.get(s[i]);
    return res;
};
// @lc code=end

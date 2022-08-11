/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 解法一 思路：纵向对比 86.44 %,88.88 %
var longestCommonPrefix = function (strs) {
    let row = strs.length;
    let col = strs[0].length;
    if (row === 0 || col === 0) {
        return '';
    }
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (strs[j].length === i || strs[j][i] != strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};
// @lc code=end

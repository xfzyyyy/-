/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 思路：自己没想出来看了下题解的思路
// 利用遍历一次字符串，每个字符为中心向两边判断，先判断连续的字符，然后判断当前中心左右字母是否相同，
var longestPalindrome = function (s) {
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i - 1; //左指针
        let now = 1;
        // 找出连续的所有相同字符,向右移动
        while (s[i] === s[i + 1]) {
            // 如果当前字符后边的字符都一样, 当前长度 + 1,  s遍历指针向后推
            now++;
            i++;
        }
        let right = i + 1; //右指针
        // 从连续字符两端开始向两侧扩展,直到越界或者不一致,一致的累积到当前长度,修改左右指针
        while (s[left] && s[right] && s[left] === s[right]) {
            now += 2;
            right++;
            left--;
        }
        // 判断最大长度，更新索引
        if (now > max) {
            max = now;
            start = left + 1;
        }
    }
    // substring和slice的用法差不多，但当参数为负数时，他们的返回值却不一样，自行了解
    // 通过起始索引和最大长度来截取字符串
    return s.substring(start, start + max);
};
// @lc code=end

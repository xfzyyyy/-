/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//  api...98.51 % 34.57 %
// var reverseString = function (s) {
//   return s.reverse();
// };
/* 
双指针法40.4 %,38.59%
时间复杂度：O(N)O(N)，其中 NN 为字符数组的长度。一共执行了 N/2N/2 次的交换。
空间复杂度：O(1)O(1)。只使用了常数空间来存放若干变量。
*/
// var reverseString = function (s) {
//     let left = 0;
//     let right = s.length - 1;
//     while (right > left) {
//         let temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
//         left++;
//         right--;
//     }
//     return s;
// };
// 简洁写法40.4 %80.19 %
var reverseString = function (s) {
    for (let left = 0, right = s.length - 1; right > left; left++, right--) {
        [s[left], s[right]] = [s[right], s[left]];
    }
    return s;
};
// @lc code=end

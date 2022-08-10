/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 思路一数组api，空间占用大
// var isPalindrome = function(x) {
//   let str=x+'';
//   return str.split('').join('')==str.split('').reverse().join('')
// };
// 思路二 头尾指针法
// var isPalindrome = function (x) {
//     x = x.toString();
//     let head = 0; //头
//     let tail = x.length - 1;
//     while (head < tail) {
//         if (x[head] != x[tail]) {
//             return false;
//         }
//         head++;
//         tail--;
//     }
//     return true;
// };
// 思路三：反转数字，负数和结尾是0的直接fanhuifalse
// var isPalindrome = function (x) {
//     if (x < 0 || (!(x % 10) && x)) return false;
//     let x2 = x,
//         res = 0;
//     while (x2) {
//         res = res * 10 + (x2 % 10);
//         x2 = ~~(x2 / 10);
//     }
//     return res === x;
// };
// 思路四：反转一半数字，
var isPalindrome = function (x) {
    if (x < 0 || (!(x % 10) && x)) return false;
    let reverseNum = 0;
    while (x > reverseNum) {
        reverseNum = reverseNum * 10 + (x % 10);
        x = ~~(x / 10); //取整
    }
    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return reverseNum === x || x === ~~(reverseNum / 10);
};
// @lc code=end

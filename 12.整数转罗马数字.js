/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
//  96.31 %  94.44 %
// 一：两个数组模拟，也可以用一个二维数组，贪心
var intToRoman = function (num) {
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numStr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let str = '';
    // let str = []; //73.43 % ,79.33 %
    for (let i = 0; i < numArr.length; i++) {
        while (num >= numArr[i]) {
            str = str.concat(numStr[i]);
            // str.push(numStr[i]);
            num -= numArr[i];
        }
    }
    return str;
    // return str.join('');
};
// 二：硬编码20.8 % 66.31 %
// var intToRoman = function (num) {
//     const thousands = ['', 'M', 'MM', 'MMM'];
//     const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//     const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
//     const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
//     let res = [];
//     res.push(thousands[Math.floor(num / 1000)]);
//     res.push(hundreds[Math.floor((num % 1000) / 100)]);
//     res.push(tens[Math.floor((num % 100) / 10)]);
//     res.push(ones[Math.floor(num % 10)]);
//     return res.join('');
// };
// @lc code=end

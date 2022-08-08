/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// // 瞎解 runtime beats 75.51 %， memory usage beats 22.28 %
// var reverse = function (x) {
//     let arr = x.toString().split('');
//     let res = 0;
//     if (arr[0] === '-') {
//         arr.push(arr.shift());
//         res = arr.reverse().join('');
//     } else {
//         arr.reverse();
//         res = Number(arr.join(''));
//     }
//     if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
//         return 0;
//     }
//     return res;
// };
// 官方题解：反转的同时判断是否越界
// runtime beats 88.54 %  memory usage beats 81.57 %
var reverse = function (x) {
    let res = 0;
    while (x !== 0) {
        res = res * 10 + (x % 10);
        if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
            return 0;
        }
        x = ~~(x / 10); //~~表示32位内的取整（位取反两次），效率比Math快，具体掘金收藏去看
    }
    return res;
};
// @lc code=end

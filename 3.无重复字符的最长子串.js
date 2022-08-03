/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

/* 思路：借助数组遍历字符串，然后将不重复记录在新的数组中，
出现重复就从重复的字符开始截取掉其及其前面的，
然后每次都保存好最长的字串，
直到最后再判断一次后输出 */
// var lengthOfLongestSubstring = function (s) {
//     let arr = s.split('');
//     let childArr = [];
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (childArr.includes(arr[i])) {
//             if (max < childArr.length) {
//                 max = childArr.length;
//             }
//             // 从重复字母开始截取掉之前的以及重复那个字母，保留后面的
//             childArr = childArr.slice(childArr.indexOf(arr[i]) + 1);
//         }
//         // 此时还需要把当前值当作新的最长字串第一个值
//         childArr.push(arr[i]);
//     }
//     if (max < childArr.length) {
//         max = childArr.length;
//     }
//     return max;
// };
// 看过题解之后发现自己写的也差不多是利用了滑动窗口，
// 不过题解用的是两个指针以及set存储，我用了数组存储
// 题解这种[效率更高]
// 遍历字符串，每轮移动左指针，然后右指针一直移动到出现重复为止。
var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const set = new Set();
    const len = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let right = -1,
        max = 0;
    for (let i = 0; i < len; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            set.delete(s.charAt(i - 1));
        }
        while (right + 1 < len && !set.has(s.charAt(right + 1))) {
            // 不断地移动右指针
            set.add(s.charAt(right + 1));
            ++right;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        max = Math.max(max, right - i + 1);
    }
    return max;
};

// @lc code=end

/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// api
//  98.06 %, 69.11 %
// 时间复杂度：O(n)O(n)，其中 nn 为输入字符串的长度。
// 空间复杂度：O(n)O(n)，用来存储字符串分割之后的结果。
// var reverseWords = function (s) {
//     s = s.trim();
//     return s.split(/\s+/).reverse().join(' ');
// };
// 方法一：队列插入，O(n) O(n)
// 方法二：自写api，先清理多余空格，然后反转整个，然后反转单词 67.79 %O(n) 61.89 %O(1)
var reverseWords = function (s) {
    // js字符串不能修改长度
    s = s.split('');
    trimAll(s);
    reverseStr(0, s.length - 1, s);
    reverseWord(s);
    return s.join('');
    // 删除多余空格,参考27移除元素
    function trimAll(s) {
        let len = s.length;
        let right = 0; //右指针（快指针）
        let left = 0; //左指针（慢指针）
        // 快指针遍历整个字符串
        while (right < len) {
            // 如果为空且满足开头位置及重复位置，快指针加加
            if (s[right] === ' ' && (right === 0 || s[right - 1] === ' ')) {
                right++;
            } else {
                //否则就赋值到左边慢指针的位置
                s[left] = s[right];
                left++;
                right++;
            }
        }
        // 以上操作后最后一个位置可能为空也可能不为空，要特殊处理
        s.length = s[left - 1] === ' ' ? left - 1 : left;
    }

    function reverseStr(left, right, s) {
        while (right > left) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }

    function reverseWord(s) {
        let left = 0,
            right = 0;
        for (let i = 0; i <= s.length; i++) {
            if (s[i] == ' ' || i == s.length) {
                right = i - 1;
                reverseStr(left, right, s);
                left = i + 1;
            }
        }
    }
};
// @lc code=end

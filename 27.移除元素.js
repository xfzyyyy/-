/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  自己写的双指针，用了截取，其实不需要，交换就好了
// 71.88 %, 9.44 %
// var removeElement = function (nums, val) {
//     nums.sort((a, b) => a - b);
//     const len = nums.length;
//     let left = 0;
//     let right = len - 1;
//     let del = 0;
//     while (left < right && nums[left] != val) {
//         left++;
//     }
//     while (right > left && nums[right] != val) {
//         right--;
//     }
//     del = right - left + 1;
//     if (right == left && nums[left] != val) {
//         del = 0;
//     }
//     nums.splice(left, del);
//     return len - del;
// };
/*
双指针从头开始交换99.05 % 30.43 %
时间复杂度：O(n)，其中 nn 为序列的长度。我们只需要遍历该序列至多两次。
空间复杂度：O(1)我们只需要常数的空间保存若干变量。
*/
// var removeElement = function (nums, val) {
//     const n = nums.length;
//     let left = 0;
//     for (let right = 0; right < n; right++) {
//         if (nums[right] !== val) {
//             nums[left] = nums[right];
//             left++;
//         }
//     }
//     return left;
// };

/*双指针优化 把尾指针交换到头指针，避免left出现的val后一直往后交换 71.88 % 50.39  %
时间复杂度：O(n)，其中 nn 为序列的长度。我们只需要遍历该序列至多两次。
空间复杂度：O(1)我们只需要常数的空间保存若干变量。
*/
var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length; //-1不能放在这里，否则会产生问题
    while (left < right) {
        // 如果左指针等于要消除的值，就把他赋值为右指针，直到这个左指针不为val为止
        if (nums[left] == val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
// @lc code=end

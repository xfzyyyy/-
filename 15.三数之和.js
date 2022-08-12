/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 自己打算用两数之和类似的方式实现，发现很多地方不好解决
// 这里采用排序加双指针的方式实现
// 79.04 %  33.73 %
var threeSum = function (nums) {
    let len = nums.length;
    // 首先排序数组,由于sort排序的时候它总会使用第一个字符的ASCII值来进行比较排序
    nums.sort((a, b) => a - b);
    let res = [];
    // for循环找第一个数，left第二个，right第三个
    for (let i = 0; i < len; i++) {
        // 去重第一个数
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = len - 1;
        let sum;
        while (left < right) {
            sum = nums[left] + nums[right] + nums[i];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                res.push([nums[left], nums[right], nums[i]]);
                right--;
                left++;
                //去重第二第三个数
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }
    // console.log(res);
    return res;
};
// @lc code=end

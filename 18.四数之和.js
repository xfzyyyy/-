/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 思路：和三数之和一样，前两个循环，后面两个双指针，记得先排序90.17 % 56.35 %
var fourSum = function (nums, target) {
    const len = nums.length;
    const res = [];
    if (len < 4) {
        return res;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = len - 1;
            while (left < right) {
                if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < len && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (nums[right] == nums[right - 1]) {
                        right--;
                    }
                    // 不要忘记本身就要移动指针;
                    left++;
                    right--;
                } else if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return res;
};
// @lc code=end

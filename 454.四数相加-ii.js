/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// 暴力法四成循环直接超时，真刺激，
// 思路：分成两个二重循环，一个存到map中，另一个来对比
// 49.05 % , O(n^2) ; 85.56 % : O(n^2)
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let res = 0;
    let map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (map.has(nums1[i] + nums2[j])) {
                map.set(nums1[i] + nums2[j], map.get(nums1[i] + nums2[j]) + 1);
            } else {
                map.set(nums1[i] + nums2[j], 1);
            }
        }
    }

    for (let k = 0; k < nums3.length; k++) {
        for (let l = 0; l < nums4.length; l++) {
            if (map.has(-nums3[k] - nums4[l])) {
                res += map.get(-nums3[k] - nums4[l]);
            }
        }
    }
    return res;
};
// @lc code=end

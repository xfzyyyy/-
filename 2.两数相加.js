/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 思路：先将链表转换为数组，然后转换为数字相加，最后转换成数组再转成链表，
 * 提交后这种方法居然更快。。。占用更少。。。
 * 缺点：需要需要BigInt，
 */
// var addTwoNumbers = function (l1, l2) {
//     let arr1 = [l1.val];
//     let arr2 = [l2.val];
//     let sum = 0;
//     let next1 = l1.next;
//     let next2 = l2.next;
//     while (next1) {
//         arr1.unshift(next1.val);
//         next1 = next1.next;
//     }
//     while (next2) {
//         arr2.unshift(next2.val);
//         next2 = next2.next;
//     }
//     // 这里必须使用大整数，否则会科学计数法显示
//     let num1 = BigInt(arr1.join(''));
//     let num2 = BigInt(arr2.join(''));
//     sum = BigInt(num1 + num2);
//     // console.log(sum);
//     sum = sum.toString().split('');
//     // console.log(sum);
//     let l3 = new ListNode(sum.shift());
//     while (sum.length > 0) {
//         l3 = new ListNode(sum.shift(), l3);
//     }
//     // console.log(l3);
//     return l3;
// };

// 看过官方题解后的解法，比较优雅
var addTwoNumbers = function (l1, l2) {
    let head = null;
    let tail = null;
    let carry = 0;
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let sum = n1 + n2 + carry;
        if (head === null) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor((n1 + n2 + carry) / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    // 不要忘记判断最后一个进位，如果有，要多加一个节点
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};

// @lc code=end

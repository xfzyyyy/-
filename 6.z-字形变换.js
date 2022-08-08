/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/** 解法一
设len为字符串s的长度，r=numRows。对于 numRows=1（只有一行）或者numRows≥n（只有一列）的情况，答案与s相同，我们可以直接返回 s。
当我们在矩阵上填写字符时，会向下填写 numRows 个字符，然后向右上继续填写 numRows-2 个字符，最后回到第一行，因此 Z 字形变换的周期 t=numRows+numRows-2=2numRows-2，每个周期会占用矩阵上的 1+numRows-2=numRows-1 列。
 */
// var convert = function (s, numRows) {
//     let len = s.length;
//     if (numRows === 1 || numRows >= len) {
//         return s;
//     }
//     let nchar = numRows + numRows - 2; // 一个周期占用多少个字符
//     let nt = Math.ceil(len / nchar); //周期总数nT
//     let nc = 1 + numRows - 2; //一个周期占几列
//     let numCols = nt * nc; //总列数
//     var arr = new Array(numRows).fill(0).map(() => new Array(numCols).fill(0));
//     // 不能这样插入，等于把每一行插入了同一个对象，会报错，只能像上面那样通过map分别插入
//     // var arr = new Array(numRows).fill(new Array(numCols).fill(0));
//     for (let index = 0, i = 0, j = 0; index < len; index++) {
//         arr[i][j] = s.charAt(index);
//         if (index % nchar < numRows - 1) {
//             i++;
//         } else {
//             i--;
//             j++;
//         }
//     }
//     let res = [];
//     for (let row of arr) {
//         for (let col of row) {
//             if (col !== 0) {
//                 res.push(col);
//             }
//         }
//     }
//     console.log(arr);
//     console.log(res);
//     return res.join('');
// };

// 解法二：对于解法一压缩数组，将没有用到的数组位置不创建，直接将每一行push到行上
// var convert = function (s, numRows) {
//     let len = s.length;
//     if (numRows === 1 || numRows >= len) {
//         return s;
//     }
//     let arr = new Array(numRows).fill(0).map(() => []);
//     let t = numRows + numRows - 2;
//     for (let i = 0, x = 0; i < len; i++) {
//         arr[x].push(s[i]);
//         if (i % t < numRows - 1) {
//             x++;
//         } else {
//             x--;
//         }
//     }
//     let newArr = [];
//     for (let row of arr) {
//         newArr.push(row.join(''));
//     }
//     return newArr.join('');
// };
// 最优解：解法三：直接构造:对上面的解法优化，周期性插入，不用先构建二维数组
var convert = function (s, numRows) {
    let len = s.length;
    if (numRows === 1 || numRows >= len) {
        return s;
    }
    let t = numRows + numRows - 2; //一个周期的字符数量
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        //枚举行
        for (let j = 0; j < len; j += t) {
            //枚举每一个周期
            arr.push(s[j + i]); //插入每一行每个周期第一个字符
            if (i > 0 && i < numRows - 1 && j + t - i < len) {
                arr.push(s[j + t - i]); //插入每一行每个周期第二个字符
            }
        }
    }
    return arr.join('');
};
//@lc code=end

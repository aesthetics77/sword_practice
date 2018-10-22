/*
    一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
    思路：f(n)=f(n-1)+……+f(1);同时用空间换时间，不用递归
 */

function jumpFloorII(number)
{
    // write code here
    if (number <= 2) {
        return number;
    }
    let result = [1,2];
    for(let i = 2;i < number;i++) {
        let sum = 0;
        for (let j=0; j<result.length;j++) {
            sum += result[j];
        }
        result[i]=sum+1;
    }
    return result[number-1];
}
/*
    我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
    思路：当有n个砖块时，第一块横放，则有f(n-1)种方法，第一块竖放，则有f(n-2)种方法，两者之和即为f(n),所以依旧是一个斐波那切数列
 */

function rectCover(number)
{
    // write code here
    if(number <= 1){
        return number
    } else {
        let result = [1,1];
        for(let i = 2;i <= number;i++) {
            result[i] = result[i-1] + result[i - 2];
        }
        return result[number];
    }
}
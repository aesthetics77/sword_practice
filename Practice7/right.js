//普通递归写法会进行很多次重复计算导致超时，所以要对递归进行优化，这里是用空间换时间，直接不使用递归而采用循环的方式进行
function Fibonacci(n)
{
    // write code here
    if (n <= 1) {
        return n;
    } else if (n <= 39){
        let result = [0,1];
        for (let i = 2; i < n+1;i++){
            result[i] = result[i-1] + result[i-2];
        }
        return result[n];
    }
}
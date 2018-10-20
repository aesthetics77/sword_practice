/*
    一只青蛙一次可以跳上1级台阶，也可以跳上2级。
    求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
    思路：如果一开始跳一级台阶，那么剩余台阶有jumpFloor(n-1)种跳法
    如果一开始跳两级台阶，那么剩余台阶有jumpFloot(n-2)种跳法
    所以总共的跳法有jumpFloor(n-1)+jumpFloor(n-2)种
    也由此看出跳法数是个斐波那切数列，所以通过递归来实现
 */
function jumpFloor(number)
{
    // write code here
    if(number <= 2) {
        return number
    } else if (number > 2) {
        return jumpFloor(number-1) + jumpFloor(number-2);
    }
}
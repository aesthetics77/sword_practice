//用两个栈来实现一个队列
var stack1 = [];
var stack2 = [];
function push(node)
{
    stack1.push(node);
}
function pop()
{
    if (stack1.length === 0){
        return false
    }
    return stack1.shift();
}
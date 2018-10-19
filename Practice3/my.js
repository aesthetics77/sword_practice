//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    let result = [];
    while(head) {
        result.unshift(head.val);
        head = head.next;
    }
    return result;
}
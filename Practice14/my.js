/* 
    输入一个链表，输出该链表中倒数第k个结点。
*/
function FindKthToTail(head, k) {
    if (head == null) {
        return false;
    }
    var currNode = head;
    var arr = [];
    while (currNode != null) {
        arr.push(currNode);
        currNode = currNode.next;
    }
    return arr[arr.length - k];
}
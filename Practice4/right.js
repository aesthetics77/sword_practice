/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    let result = null;
    let root = pre[0];
    if (pre.length > 1) {//前序遍历只有一个时，说明此节点为叶子节点 
        let rootIndex = vin.indexOf(root);
        let leftVin = vin.slice(0,rootIndex);
        let rightVin = vin.slice(rootIndex+1,vin.length);
        pre.shift();//剔除前序遍历的首个元素，即root节点
        let leftPre = pre.slice(0, leftVin.length);
        let rightPre = pre.slice(leftVin.length, leftVin.length + rightVin.length);
        result = {
            val: root,
            left: reConstructBinaryTree(leftPre, leftVin),
            right: reConstructBinaryTree(rightPre, rightVin)
        }
    } else if (pre.length === 1) {
        result = {
            val: root,
            left: null,
            right: null
        }
    }
    return result;
}

/*
输入某二叉树的前序遍历和中序遍历的结果，
请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
*/

/*
    思路：首先知道两个事实：前序遍历可以获知root，中序遍历是左子树，root，右子树
    所以先通过前序遍历获知root,然后在中序遍历中找到root,root左边就是左子树的中序遍历，右边就是右子树的中序遍历
    然后分别遍历左子树和右子树的中序遍历，获取左子树和右子树的前序遍历
    由此获取root的左子节点和右子节点，接下来进行递归调用，直到左子树的中序遍历长度为0，则root的左子节点为null，并且不再递归，由子树同理
*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    let root = pre[0];
    let rootIndex = vin.indexOf(root);
    let leftVin = vin.slice(0,rootIndex);
    let rightVin = vin.slice(rootIndex+1,vin.length);
    let leftPre = [];
    let rightPre = [];
    for (let i = 0; i < rootIndex; i++) {
        if (leftVin.indexOf(pre[i]) !== -1) {
            leftPre.push(pre[i]);
        }
    }
    for (let i = rootIndex+1; i < pre.length; i++) {
        if (rightVin.indexOf(pre[i]) !== -1) {
            rightPre.push(pre[i]);
        }
     }
    root.left = leftVin.length === 0 ? null : leftPre[0];
    root.right = rightVin.length === 0 ? null : rightPre[0];
    reConstructBinaryTree(leftPre, leftVin);
    reConstructBinaryTree(rightPre, rightVin);
    
    return root;
}

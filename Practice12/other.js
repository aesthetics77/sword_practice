//对指数为0，正数，负数的情况做了分类处理
function Power(base, exponent)
{
    var result=1;
    if(exponent===0){
        return 1;
    }
    for(var i=0;i<Math.abs(exponent);i++){
        result*=base;
    }
    if(exponent<0){
        result=1/result;
    }
    return result;
}
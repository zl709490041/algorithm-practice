/* 给定一个double类型的浮点数base和int类型的
整数exponent。求base的exponent次方。 */
function Power(base,exponent){
    var result = 1, curr = base,n;
    if(exponent > 0){
        n = exponent;
    }else if(exponent < 0){
        n = -exponent;
        if(base == 0){
            throw new Error("分母不能为0");
        }
    }else{
        return 1;
    }
    while(n != 0){
        if(n & 1 === 1) result *= curr;
        curr *= curr;
        n >>= 1;
    }
    return exponent < 0 ? 1/result : result
}
console.log(Power(5,2));
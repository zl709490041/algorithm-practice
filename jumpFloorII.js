//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number)
{
    if(number == 0){
        return 0;
    }
    var arr = [];
    arr[0] = 1;
    arr[1] = 2;
    for(var i = 2;i < number;i++){
        arr[i] = 0 ;
        for(var j = 0;j < i;j++){
            arr[i] += arr[j];
        }
        arr[i] += 1;
    }
    return arr[number-1];
}
console.log(jumpFloorII(5));
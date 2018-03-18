// 一只青蛙一次可以跳上1级台阶，也可以跳上两级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloor(number)
{
    if(number == 0){
        return 0;
    }else{
        var arr = [];
        arr[0] = 1;
        arr[1] = 2;
        for(var i = 2;i < number;i++){
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr[number-1];
    }
}
console.log(jumpFloor(5));
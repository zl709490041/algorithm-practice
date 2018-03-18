//输入一个整数，输出斐波那契数列的第n项
function Fibonacci(n)
{
    var arr = [];
    arr[0] = 1;
    arr[1] = 1;
    for(var i = 2;i < n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    if(n == 0){
        return 0;
    }else{
        return arr[n-1];
    }
}
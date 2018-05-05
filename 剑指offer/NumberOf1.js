// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n)
{
    var count = 0;
    while(n != 0 ){
        n = n & (n-1);
        count++;
    }
    console.log(count);
}
NumberOf1(10);
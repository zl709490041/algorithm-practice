/* 任意非负整数区间中1出现的次数 */
function NumberOf1Between1AndN_Solution(n)
{
    let count = 0,num;
    if (n < 1){
        return 0;
    }
    for(let i = 1;i <= n;i++){
        num  = i;
        while (num > 0){
            if(num % 10 == 1){
                count++;
            }
            num = Math.floor(num/10);
        }
    }
    return count;
}
NumberOf1Between1AndN_Solution(10);
/* 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数
组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。 */
function MoreThanHalfNum_Solution(numbers)
{
    var obj = {};
    for(var i = 0;i < numbers.length;i++){
        obj[numbers[i]] = 0;
    }
    for(var i = 0,len = numbers.length;i < len;i++){
        obj[numbers[i]] ++;
        if(obj[numbers[i]] > len/2){
            return numbers[i];
        }
    }
    return 0;
}
var arr = [1,2,3,2,4,2,5,2,3];
console.log(MoreThanHalfNum_Solution(arr))
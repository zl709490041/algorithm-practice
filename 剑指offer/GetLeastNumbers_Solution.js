/* 输入n个整数，找出其中最小的K个数。例如输入
4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。 */
function GetLeastNumbers_Solution(input, k)
{
    var arr = input.sort();
    var result = [];
    if(k > input.length) return result;
    for(var i = 0;i < k;i++){
        result.push(arr[i]);
    }
    return result;
}
console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],4));
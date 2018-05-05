/* 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
并保证奇数和奇数，偶数和偶数之间的相对位置不变。 */
function reOrderArray(array)
{
    var odd = [];      //奇数数组
    var even = [];     //偶数数组
    array.forEach(item => {
        if(item%2 !=0 ){
            odd.push(item);
        }else{
            even.push(item);
        }
    });
    var result = odd.concat(even);
    return result;
}
var arr = [5,1,2,6,9,2,7];
console.log(reOrderArray(arr));
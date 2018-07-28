/**
 * 冒泡排序：按从小到大的顺序
 */
function BubbleSort(arr) {
    var len = arr.length;
    var flag = false;
    for (var i = 0;i  < len;i++) {
        for(var j = 0;j < len-i;j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var a = [12,1,4,5,9,3,9,2];
console.log(BubbleSort(a));

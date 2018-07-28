/**
 * 简单选择排序
 */
function SelectSort(arr) {
    var len = arr.length;
    for(var i = 0;i < len;i++) {
        var min = i; 
        for(var j = i+1;j < len;j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
var a = [12,1,4,5,9,3,9,2];
console.log(SelectSort(a));
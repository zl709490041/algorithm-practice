/**
 * 直接插入排序
 */
function  Insertsort(arr) {
    var len = arr.length;
    for(var i = 1;i < len;i++) {

        if (arr[i] < arr[i-1]) {
            var temp = arr[i];
            for(var j = i-1;arr[j] > temp;j--) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = temp;
        }
    }
    return arr;
}
var a = [12,1,4,5,9,3,9,2];
console.log(Insertsort(a));
/**
 * 希尔排序
 */
function ShellSort(arr) {
    var len = arr.length;
    // fraction表示增量
    for (var fraction = Math.floor(len/2);fraction > 0;fraction = Math.floor(fraction/2)) {
        for (var i = fraction;i < len;i++){
            for (var j = i-fraction;j >= 0 && arr[j] > arr[fraction+j];j = j-fraction) {
                var temp = arr[j];
                arr[j] = arr[fraction+j];
                arr[fraction+j] = temp;
            }
        } 
    }
    return arr;
}
var a = [12,1,4,5,9,3,9,2];
console.log(ShellSort(a));
/* 请编写一个函数，其功能是将输入的字符串反转过来。 */
var reverseString = function(s) {
    var str = s.split(''),temp,middle;
    var length = str.length,j = length-1;
    if(length % 2 === 0) {
        middle = length/2 - 1;
    } else {
        middle = Math.floor(length/2);
    }
    for(var i = 0;i <= middle;i++){
        t = str[i];
        str[i] = str[j];
        str[j--] = t;
    }
    return str.join('');
};
var s = 'ab';
console.log(reverseString(s));
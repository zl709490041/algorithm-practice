//实现一个函数，将一个字符串中的空格替换成"%20"
//We Are Happy ---> We%20Are%20Happy
function replaceSpace(str)
{
    var pattern = new RegExp(" ","g");
    var newstr = str.replace(pattern,'%20');
    return newstr;
}
replaceSpace('We Are Happy');
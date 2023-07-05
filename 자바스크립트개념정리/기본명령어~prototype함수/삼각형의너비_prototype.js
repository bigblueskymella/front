var info = {
    subject: 'css',
    credit:1,
    printOut:function(){
        return info.subject + ', ' + info.credit + '학점';
    }
};
console.log(info.subject); //css
console.log(info.credit); //1
console.log(info.printOut); // css, 1학점

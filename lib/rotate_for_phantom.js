// http://blog.csdn.net/dxx1988/article/details/8330527
// http://qings.blog.51cto.com/4857138/997998/
if (phantom.args.length === 0) {
    console.log('Usage: rotate.js <some URL>');
    phantom.exit();
}


var src =phantom.args[0];
var dest = './rotate.png';

if(phantom.args.length >1  && phantom.args[1] !== undefined)
{
	dest = phantom.args[1];
}

var result_html_dir =  phantom.args[3];


var verbose =  phantom.args[4];
function log(str){
	if(verbose == 1){
		console.log(str);
	}
}

console.log(phantom.args)


log('ph result_html_dir = ' + result_html_dir);

var page = require('webpage').create();
page.open(result_html_dir, function (status) {
  if (status != "success") 
	{
	   console.log('FAIL to load the address');
	}else{
		 console.log('SUCC to load the address');
	}


	var base64Data = page.evaluate(function () {
			var canvas = document.getElementById('pic_testImg');
	    var data = canvas.toDataURL();
	    //删除字符串前的提示信息 "data:image/png;base64,"
	    var base64Data = data.substring(22);
			
      return base64Data;
  });
	
	// console.log(base64Data)
	
	page.render(dest);

	page.close();
  phantom.exit();
			
});

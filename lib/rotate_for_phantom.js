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

var verbose =  false;
function log(str){
	if(verbose == 1){
		console.log(str);
	}
}

var page = require('webpage').create();
var result_html_dir ='/var/tmp/result.html';
page.open(result_html_dir, function (status) {
  if (status != "success") 
	{
	   console.log('FAIL to load the address');
	}else{
		 console.log('SUCC to load the address');
	}

	page.render(dest);
	page.close();
  phantom.exit();			
});

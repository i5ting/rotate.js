require('shelljs/global');
var path = require('path') 

var fs = require('fs');
var BufferHelper = require('bufferhelper');
var Handlebars = require('handlebars');

/**
 * 核心方法
 * 
 * @param {degree} 旋转角度，0代表正常，1代表旋转90度，2代表180度，3代表270度
 */ 
function rotate(src,dest,degree){
	var result_html_dir ='/var/tmp/result.html';
	
	// Run external tool synchronously
	if (exec('phantomjs '+ __dirname +'/rotate_for_phantom.js ' + src + ' '  + dest + ' '+ degree + ' ' + result_html_dir + ' ' ).code !== 0) {
	  echo('Error: rotate it failed');
	  exit(1);
	}
	
	echo('Success rotate it'); 
	rm('-rf', result_html_dir);
}


module.exports = {
 	rotate:rotate
}


require('shelljs/global');
var path = require('path') 

var fs = require('fs');
var BufferHelper = require('bufferhelper');
var Handlebars = require('handlebars');
var result_html_dir ='/var/tmp/result.html';

function log(str){
	console.log(str);
}


/**
 * 核心方法
 * 
 * @param {degree} 旋转角度，0代表正常，1代表旋转90度，2代表180度，3代表270度
 */ 

function rotate(src,dest,degree,succ_cb,fail_cb){

	if(src){
		src = path.normalize(src);
		src = path.resolve(process.cwd(),src)
	}

	//判断文件是否存在
  fs.exists(src,function(exists){
     if(!exists){
         console.log(src + ' 不存在。');
         return fail_cb(src,dest);
     }
     else{
        log(src + ' 存在。');
			 	var rs = fs.createReadStream(__dirname +'/tmpl.html', {encoding: 'utf-8', bufferSize: 11}); 
			 	var bufferHelper = new BufferHelper();

			 	rs.on("data", function (trunk){
			 			bufferHelper.concat(trunk);
			 	});

			 	rs.on("end", function () {
			 		var source = bufferHelper.toBuffer().toString();
			 		var template = Handlebars.compile(source);
	
			 		var data = {
			 			"src": src
			 		};

			 		var contents = new Buffer( template(data) );
	
	
			 	  fs.writeFile(result_html_dir ,contents ,function(err){
			       if(err) throw err;  
			 			log('template html has finished'); 
			 			_rotate(src,dest,degree,succ_cb,fail_cb);
			 	  });
	
			 	});
     }
   });
}


function _rotate(src,dest,degree,succ_cb,fail_cb){

	// Run external tool synchronously
	if (exec('phantomjs '+ __dirname +'/rotate_for_phantom.js ' + src + ' '  + dest + ' '+ degree + ' ' + result_html_dir + ' ' ).code !== 0) {
	  echo('Error: rotate it failed');
		
		if(fail_cb){
			return fail_cb(src,dest);
		}
		
	}else{
		echo('Success rotate it'); 
		rm('-rf', result_html_dir);
		
		if(succ_cb){
			return succ_cb(src,dest);
		}
	}
	
	
	
}

module.exports = {
 	rotate:rotate
}


var Rotate = require('./index');

var src    = 'test.png'
var dest   = 'example_out.png'
var degree = 1

Rotate.rotate(src,dest,degree,function(src,dest){
	//when succ
	console.log('ROTATE SUCCESS CALLBACK');	
},function(src,dest){
	//when fail
	console.log('ROTATE FAIL CALLBACK');	
});
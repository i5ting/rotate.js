# rotate.js

a npm for rotate image

目前提供2个版本
 
- rotate（此版本需要phantomjs作为依赖）
- rotate-lite(在分支里，在天朝安装phantomjs需要翻墙，所以lite版本需要自己先安装phantomjs)

## TODO

- [ ] export api
- [ ] support stream

## Install
	
	 npm install -g rotate.js
 

## Usage 

```
➜  rotate.js git:(master) ✗ node bin/rotate.js  -h                            

  Usage: rotate  -s 'input.png' -t 'out.png' -d 1

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -s, --src [value]     原图片名称
    -t, --dest [value]    生成后的图片名称
    -d, --degree [value]  旋转角度，0代表正常，1代表旋转90度(默认值)，2代表180度，3代表270度
    -v, --verbose         打印详细日志

```

精简用法

	rotate  -s 'input.png'

## History

- v0.0.2 doc
- v0.0.1 init

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 欢迎fork和反馈

在issue提问或邮件shiren1118@126.com

## License 

(The MIT License)

Copyright (c) 2014 i5ting &lt;i5ting@126.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
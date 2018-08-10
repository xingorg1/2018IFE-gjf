### 过程笔记

#### 1. 通过 jQuery 判断输入框是否有内容(思路)

* 输入框获取焦点，label的位置上移 - 添加类名

* 输入框失焦事件触发，判断内部value值得长度，如果<1就说明没内容，则label的位置要落下 - 删除类名

  **on-blur事件只有在光标离开input，input失焦时触发。里边输入文字不触发。**

#### 用css实现input聚焦label上移: 利用:focus伪类选择器和加号选择器
  ```css
    .form__input:focus + .form__label {
      bottom: 20px;
    }
  ```

#### jq获取input内部的value值：
```JS
$(this).val();
```
#### js获取input内部的value值
```JS
this.value
```
#### 利用dom操作查找当前聚焦的input紧邻的下一个兄弟元素，以获取对应label元素

* jq实现：
```JS
  jquery.next()方法
```
* js实现：
```JS
  dom.nextElementSibling
```
#### 蓝色线条没办法实现

  * 解决方法两个： 

  * 1 input获取焦点时添加底部border，但是没法实现border宽度向左减少的效果

  * 2 利用伪元素的宽度减少制作，但是伪元素只能加在闭合容器里边，比如input的父元素。而不能加在父元素上

    * 局限就是，没法找到获取焦点的input的当前父元素，并添加动画设置。

#### css父元素选择器?

  * css不支持父选择器。是因为浏览器解析机制就是从外往内，由前向后的。

  * 如何[在css中实现父选择器效果](https://www.zhangxinxu.com/wordpress/2016/08/css-parent-selector/)

  * 而正好大神的这个例子，就是子元素input:focus状态，父元素边框高亮！！[迅速围观大神例子](https://www.zhangxinxu.com/study/201608/input-focus-parent-highlight.html)

  * 但是这个例子在本实例中也想过，利用label，但是一开始label被我做成了向上偏移而不是label内部的span向上偏移。如果用这个方法实现的话我还得改之前的代码，所以我偷懒了。利用js吧！

#### jq的focus事件

  * 通过focus事件，js监听input被获取焦点，并在此时给父元素添加类名line，使其蓝色边出现，
  ```js
    $(box).on('focus',function(){
      $(this).parents('.form__wrapper').addClass('form__wrapper__line');
      $(this).parents('.form__wrapper').removeClass('form__wrapper__ani');
    })
  ```

  ```css
    /* 输入框线条 */
    .form__wrapper::after{
      content: "";
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 2px;
    }
    .form__wrapper__line::after{
      background: #0d8aee;
    }
  ```

  * 配合blur失焦事件，input失去焦点的时候给其父元素去掉line，转而添加动画类名，缩减父元素伪元素的宽度，形成动画。

  ```js
    input.on('blur',function(){
      $(this).parents('.form__wrapper').removeClass('form__wrapper__line');
      $(this).parents('.form__wrapper').addClass('form__wrapper__ani');
    });
  ```

  ```css
    .form__wrapper__ani::after{
      background: #0d8aee;
      width: 0;
      transition: width 1s;
    }
  ```

  * 再次获取焦点的时候，同时删除上次给父元素添加的ani类名，


### 关于animate.css库

  * 先感叹一句这个库很强大

  * 不过在平时开发的时候只用得到其中的一两个效果的话，没必要把这个css文件引入，我都习惯将要用的那一小段拷进来自己项目中。以减小文件体积。

### 文字减小

  * 仔细观察会发现，input获取焦点，label内部的文字还会变小

  * 其实就在之前一开始，input:focus状态下，设置bottom上移的同时再减小文字的字号即可；。

### 最后重点调整贝塞尔曲线

  * 根据课堂给出的[贝塞尔曲线](http://www.css3beziercurve.net/)调整地址，多观察，可视化的调整自己想要的曲线即可

  * 动画都是整体的，尤其一个页面中多个动画的时候。所以多个动画还是协调一点最好。相互呼应，整体看上去才舒服。
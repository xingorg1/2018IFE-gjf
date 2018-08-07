# 2018IFE-gjf 
2018年百度前端技术学院-设计师学院课程笔记+作业(20180730)

学习方法：

  1.会做的题目拿到后先做一遍，总结出不会或者迷惑的几个点记录下来

  2.观看题目中贴的知识点，把第一遍制作的点回答掉

  3.再做一遍巩固，不要看笔记不要找资料。如果找则继续记录下来，说明没学会。

  4.再次找资料完善第二遍记录的

  5....循环往复，直到对整个代码和效果没有任何疑问位置。

  end.举一反三想一个项目中可能会遇到的效果并制作出来。
  
## transition学习笔记
### 1. CSS transition 

**transition过渡** ：用于当元素 **从一种样式变换为另一种样式** 时为元素添加效果。

### 2. transition的各项子属性详细值

name | value | 是否必须 | 备注
---- | ----- | -------- | ----
transition-property |  需要应用过渡效果的CSS 属性的名字/all | 是 | 填写一个属性名则监听一个，填 __all__ 则监听该元素的所有样式变化，当指定的 CSS 属性改变时，过渡效果将开始执行。
transition-duration | 过渡时间 | 是 | 不填写默认为0，不会发生动画渐变效果
transition-timing-function | 过渡效果的时间曲线 | 否 | 贝塞尔曲线，默认ease
transition-delay | 是否延迟执行过渡 | 否 | 不填写时默认为0

**transition-property**需要交代给你的那些事

* 指定的这个属性值改变时，就会有动画效果，所以你想看谁 **（属性）** 的动画（不是笑话哦），这个值就填谁 **（属性名）** ，比如本案例，改变的时蓝色线条的长度（宽度）值，所以这个值设置为width属性名就行了。

* 可填的值：

可填的值 | 讲解 | 备注
------- | ---- | ----
none | none | 我不设置transition好不好？
all | 代表所有的属性都会有 | 有时候你要监听好几个属性值，又很懒不想一个一个写，那就写个all，监听所有。我不知道这个对性能有什么影响，不过估计浏览器没那么智能，不是谁变化监听谁，而是费劲巴拉的监听所有，没有变化的也被监听了，虽然我们肉眼上看不到，但其实他也消耗了。
property-name-list | 正常写，比如宽度就写width，高度写height，就把css属性名直接复制粘贴过来即可 | 注意这里加了一个list，是一个属性列表，可以写多个，多个之间用都好隔开就好

* js里的写法：
```js
obj.style.transitionProperty = 'width,height,transform';
```
*规律就是，把中间那个横线去掉，然后第二个及以后字母的首字符大写。*

**transition-duration**需要交代给你的那些事

* 整个动画持续的时间，即完成动画需要的时长

* 请始终设置 transition-duration 属性，否则时长为 0，就不会产生过渡效果。(手册一直强调这句话)

* 可能的值：

  + time，时间值，1s代表1秒。3500ms = 3.5秒；；；；

  + 具体就是数值加上单位即可，换算遵循1000ms=1s的格式。

  + 但通常来说，我比较喜欢用.35s。

  + 还是根据需要的动画效果视情况而定。但是一定一定要设置就是对了。

**前两个是必填的，否则不起作用**


* js里的写法：
```js
obj.style.transitionDuration = '3.5s';
```

**transition-timing-function**需要交代给你的那些事

* 规定过渡效果的速度曲线，是先快后慢？还是先慢再快最后慢？还是匀速从头开到尾呢？这就对应了他的属性值ease-out、ease-in-out、linear。

* 原理就是:过渡效果随着时间改变其速度。

* 当然你也可以自定义动画曲线：cubic-bezier(n,n,n,n)。就是大名鼎鼎的贝塞尔曲线啦。又好像animate的帧一样，时间开头怎么样动，时间结尾怎么样动，不过他还是时间大范围内的凭感觉控制，没有animation的帧动画强大，只要你愿意，可以把animation当作flash的工作台来用哦！

* 各属性值含义

值 | 效果描述 | 备注
-- | ------- | ----
linear | 匀速 | 一开始挂上档后可以睡觉了，直到终点不会变档
ease | 默认值 慢-快-慢 | 曲线图就像一座山丘
ease-in | 慢-end | 像一个自行车子启动的一瞬间，刚开始蹬不动都是慢慢走，后边匀速
ease-out | start-慢 | 像一个车子刹车的一瞬间
ease-in-out | 慢-o-慢 | 更自然的一个车子发动-走动-刹车停住的过程
cubic-bezier(n,n,n,n) | 自己调曲线决定动画的效果随时间变化是快还是慢 | 0-1的可调范围，别过了

cubic-bezier四个值设置成什么样刚好是其他五个值的效果呢？

值 | bezier配置
-- | ---------
linear | cubic-bezier(0,0,0.25,1)
ease | cubic-bezier(0.25,0.1,0.25,1)
ease-in | cubic-bezier(0.42,0,1,1)
ease-out | cubic-bezier(0,0,0.58,1)
ease-in-out | cubic-bezier(0.42,0,0.58,1)

* js写法：
```js
  object.style.transitionTimingFunction="linear"
```

**transition-delay**需要交代给你的那些事

* 延迟执行动画效果。

* 可以不填，我一般都不填，除非需要和另一个样式配合时，为了等待另一个样式完毕再执行这个，就需要用上delay了。

* js写法：
```js
object.style.transitionDelay="2s"
```

--------- **懒人写法** ----------

**单个属性** 简写写法：
```
  transition: propertyName duration+s timing-function dealy
```
过渡：属性名 动画时间 动画曲线 延迟时间；

**多个属性** 简写写法：
```
  transition: propertyName1  propertyName2 propertyName3 ...后边同上;
```
过渡： 属性名1 属性名2 属性名3 ...;

**js写法**：
```js
  object.style.transition="width 2s"
```
### 3. 浏览器兼容性
  
>  IE10+，Firefox、Chrome 以及 Opera 支持 transition 属性。

>  Safari、Chrome<25 需要前缀 -webkit-。

  兼容性写法：
  ```css
  transition: width 1s;
  -moz-transition: width 1s; /* 以前习惯第二个写-webkit-的，今天看官网还是自己写错了  */
  -webkit-transition: width 1s;
  -ms-transition: width 1s;
  -o-transition: width 1s;
  ```
  特殊情况遇到transform这一类也需要兼容性写法的属性时：
  ```css
  transition: transform 1s;
  -moz-transition: -moz-transform 1s;
  -webkit-transition: -webkit-transform 1s;
  -ms-transition: -ms-transform 1s;
  -o-transition: -o-transform 1s;
  ```
  **多个transition属性分开写时，添加兼容性前缀的方法同上，不再赘述。顺序是：正常；-moz-、-webkit-、-ms-、-0-！**

### 4. 贝塞尔曲线
**[cubic-bezier](https://baike.sogou.com/v403429.htm?fromTitle=%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF)(n,n,n,n)**

**[css3-beziercurve](http://www.css3beziercurve.net/)**

四个点（起始点、终止点以及两个相互分离的中间点）

## transform学习笔记
20180731
### transform理解

**transform转换**  属于2D/3D上的转换、变形效果。他不是一个动画，他就是变形。比如正方形变平行四边形，再变圆形。都是形状变成另一个形状。

但是如果配合上transition/animation，他就会从一个形状变成另一形状。只要有一段时间内的过渡效果，就形成了动画。

**主要功能有**：拉伸变形、倾斜、位移、缩放、旋转。

**原理是**：改变元素的尺寸、形状、角度、位置等

js写法：
```js
  object.style.transform="rotate(7deg)";
```
### transform-origin 设置元素的基点位置
该元素允许改变被转换元素的位置

默认不设置的情况下，x轴坐标是(border-width + padding + width) / 2 + 'px'，第二个坐标是(border-width + padding +height) / 2 + 'px';
### transform-style 被嵌套元素在3D空间如何显示

  * 规定被嵌套元素如何在3D空间中显示：

    * flat：表示子元素不保留3d位置、

    * preserve-3d表示 子元素保留3d位置

  * 属性值： flat、preserve-3d、unset、inherit、initial

  * 需要与transform一同使用。
  
### transform的各个方法属性

name | 含义 
---- | ---- 
none | 我不定义好不好
translate() | 位移
rotate() | 旋转
scale() | 缩放 
skew() | 拉伸变形
matrix() | 混合, 集百家之大乘。

### 方法可能的配置
**skew：翻转给定的角度，xdeg水平翻转度数，ydeg垂直翻转度数。能为负**

D | name | 含义 | 中心点 | 备注
--| ---- | ---- | ---- | -----
2 | skew(xdeg,ydeg) | 拉伸变形 | 默认中心点就是盒模型的中心点 | 
2 | skewX(xdeg) | 水平方向拉伸变形 | 同上 | 
2 | skewY(ydeg) | 垂直方向拉伸变形 | 同上 | 
2 | skew(n-deg) | 延伸，只写一个也起作用，不过是只默认作用于x轴水平拉伸。 | 同上 | 

*　可以为负值，负值时翻转拉伸的方向，比如之前是左上角－右下角拉伸，翻转后变成右上角－左下角的拉伸。

**scale：x对应宽度，y对应高度，缩放到原来宽高的倍数。**

D | name | 含义 | 中心点 | 备注
--| ---- | ---- | ---- | -----
2 | scale(x,y) | 缩放 | 默认中心点就是盒模型的中心点 | 
2 | scale(n-deg) | 缩放 | 默认中心点就是盒模型的中心点 | 和上边的区别就是默认只缩放水平方向，就像scaleX(x)
3D | scale3d(x,y,z) | 缩放 | 同上 | 我设置三个点和设置正常的两个点没什么区别
2 | scaleX(x) | 横向缩放 | 同上 | 正值时横向拉伸，同skew的区别是：水平拉伸不带斜线角度
2 | scaleY(y) | 纵向缩放 | 同上 | 正值时竖向拉伸，同skew的区别是：垂直拉伸不带斜线角度
3D | scaleZ(z) | 纵深方向缩放 | 同上 | 2d图形设置没有多大的区别，不过可以看到文字微妙的变化


首先，缩放的倍数就是数字的实际倍数，比如写2就是放大两倍。再者，当数值是大于0的值时，就是放大。当数值在0-1之间的时候，就是缩小。所以 **放大还是缩小看的是数值的关系，和正负没有关系。**

数值为0就是原来的宽高*0时就看不见了。

数值为1是放大，但是是宽高*1，和没乘一样。还和原来一边大。

另外，计算时不光是**乘宽高，内边距padding、边框宽度border-width、甚至外边距margin都跟着升天乘了相应倍数** 

**rotate：N°旋转，正值顺时针旋转，负值逆时针旋转。**

D | name | 含义 | 中心点 | 备注
--| ---- | ---- | ---- | -----
2 | rotate(angle) | 旋转 | 默认中心点就是盒模型的中心点 | angle值
3D | rotate3d(x,y,z,angle) | N°旋转 | 同上 | 
3D | rotateX(angle) | N°旋转 | 同上 | 围绕x轴做水平方向翻转
3D | rotateY(angle) | N°旋转 | 同上 | 围绕y轴做垂直方向翻转
3D | rotateZ(angle) | N°旋转 | 同上 | 

**translate(x,y)：相对于当前位置向水平(x)/垂直(y)方向移动，正值向右/下，负值向左/上**

D | name | 含义 | 中心点 | 备注
--- | ---- | ---- | ---- | ----
2 | translate(x,y) | 2d两点位移 | 默认中心点就是盒模型的中心点 |  
3D | translate3d(x,y,z) | 3d三点位移 | 同上 |  
2 | translateX(x) | 只是用 X 轴的值位移 | 同上 |  
2 | translateY(y) | 只是用 Y 轴的值位移 | 同上 |  
3D | translateZ(z) | 只是用 Z 轴的值位移 | 同上 | 

括号里边， **数值后边一定要有单位值** ，如果没有单位值不起作用

translate执行的位移，对于周围的元素不产生任何影响。就像relative的效果。

**matrix(n,n,n,n,n,n)**

D | name | 含义 | 中心点 | 备注
--| ---- | ---- | ---- | -----
2 | matrix(n,n,n,n,n,n) | 矩阵，模型 | 默认中心点就是盒模型的中心点 | 6个值的矩阵
3D | matrix(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) | 矩阵，模型 | 同上 | 16个值,4x4矩阵

### perspective 规定3D元素的透视效果
[张鑫旭讲解文章](https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/comment-page-7/#comment-385481)

**perspective(n) 为3D转换元素设置透视视图** 

  * 规定3D元素的透视效果

  * 目前浏览器都不支持，只有safari和chrome用替代元素-webkit-perspective

  * 只影响有3d转换属性的子元素，是加在父元素身上的。

  * 需要配合perspective-origin一同使用。

**perspective-origin 规定3D元素的底部位置** 

  * 规定3D元素的底部位置 ？？

  * 大致属性同perspective

  * perspective-origin : 50% 200px; 为什么第一个是百分比，第二个是像素值？可以有的值或格式：top,bottom,center,length,%。

  * x-axis 定义该视图在x轴上的位置、
  * y-axis 定义该视图在y轴上的位置

**perspective-visibility 定义元素在不面对屏幕时是否可见** 


### 混合写法
多个属性值之间用逗号隔开即可。
```css
transform: rotate(30deg) scale(.2) skew(20deg);

```

### 兼容性及写法
> IE10+以上不用想，其他现代浏览器

> chrome、safari要加前缀-webkit-

> ie9加前缀-ms-

**前缀**

```css
transform: ;
-moz-transform: ;
-webkit-transform: ;
-ms-transform: ;
-o-transform: ;
```

## animation学习笔记
2018-08-07

### @keyframes规则 - 创建动画

  from - to 等价于 0% - 100%
  但是优先使用0% - 100%，因为浏览器兼容性还好点

### animation 动画绑定

  * 将keyframes动画规则绑定到选择器。

  * 必须设定动画的名称和时长。

  * 所有动画属性

#### animation-name 
keyframes动画的名称

属性 | 含义 | 备注
--- | ----- | ----
动画名称 | 就是keyframes规定的动画名称 |　不设置动画不成功
none | 设置后无动画效果 | 如果真的没有动画就不需要设置，但是这个功能的特殊用途用于覆盖级联的动画。

#### animation-duration
规定动画完成一个周期所花费的秒(.2s)、毫秒(200ms)
#### animation-timing-function
速度曲线(三次贝塞尔曲线)

属性 | 含义 | 备注
--- | ---- | ----
linear | 匀速运动 | 
ease | 慢 - 快 - 慢 |
ease-in | 慢 - 快 |
ease-out | 快 - 慢 | 
ease-in-out | 慢 - ~ - 慢 |
cubic-bezier |  自定义 | 上边这几个属性，都会在关键帧之间插入补间动画。使得动画效果连贯。
**steps()函数** | 逐帧动画 | 适用于关键帧的跳跃

针对上边五个三次贝塞尔，其对比效果看下边w3c的效果一目了然
```html
<!DOCTYPE html>
<html>

<head>
  <style>
    div {
      width: 100px;
      height: 50px;
      background: red;
      color: white;
      font-weight: bold;
      position: relative;
      animation: mymove 5s infinite;
      -webkit-animation: mymove 5s infinite;
      /* Safari and Chrome */
    }

    #div1 {
      animation-timing-function: cubic-bezier(0, 0, 0.25, 1);
    }

    #div2 {
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    #div3 {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
    }

    #div4 {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }

    #div5 {
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }

    /* Safari and Chrome: */

    #div1 {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);
    }

    #div2 {
      -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    #div3 {
      -webkit-animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
    }

    #div4 {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }

    #div5 {
      -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }

    @keyframes mymove {
      from {
        left: 0px;
      }
      to {
        left: 300px;
      }
    }

    @-webkit-keyframes mymove
    /* Safari and Chrome */

      {
      from {
        left: 0px;
      }
      to {
        left: 300px;
      }
    }
  </style>
</head>

<body>

  <p>
    <strong>注释：</strong>Internet Explorer 9 以及更早的版本不支持 animation-timing-function 属性。</p>

  <div id="div1">linear</div>
  <div id="div2">ease</div>
  <div id="div3">ease-in</div>
  <div id="div4">ease-out</div>
  <div id="div5">ease-in-out</div>

</body>

</html>
```

特殊的 ```steps()函数```
参数 | 含义 | 备注
---- | ---- | ----
正整数 | 指定时间函数中的间隔数量 | 必须是正整数
start/end | 设置最后一步的状态 | start为结束时的状态（第一帧是第一步动画结束），end为开始时的状态(第一帧是第一步动画开始)

定义steps的keyframes规则中，所有关键帧必须写出来，
比如我下边这个demo中
```css
    @keyframes bgChange {
      0% {
        background-position-x: 0px;
      }
      20% {
        background-position-x: -90px;
      }
      40% {
        background-position-x: -181px;
      }
      60% {
        background-position-x: -271px;
      }
      80% {
        background-position-x: -359px;
      }
      100% {
        background-position-x: -449px;
      }
    }
```
如果只改成from{} to{}两帧，动画跑不起来。同样的0% - 100% 也不可以。

#### animation-delay 延迟动画
  动画延迟开始时间
#### animation-iteration-count: infinite；循环动画
  动画播放次数

* 常用 infinite

#### animation-direction 反向动画
  是否逆向播放
属性 | 含义 
---- | ----
normal | 正常播放
alternate | 反向

alter： vt. 改变，更改
#### animation-play-state 暂停动画
  是否运行or暂停动画

属性 | 含义
---- | ----
paused | 暂停
running | 跑起来

#### animation-fill-mode
  动画时间之外的状态

属性 | 含义　| 备注
---- | ---- | ----
none | 不改变默认行为 | 
forwards | 动画完成后，保持最后一个属性值（在最后一个关键帧中定义） | 感觉就像定格最后一针的效果不变
backwards | 延迟执行时间段内，动画开始前，应用开始属性值（在第一帧中定义） | 同上，只不过将变化的第一帧先定格展示出来
both |　向前和向后填充模式都被应用。　| 上边两个结合应用，开始前将第一帧先展示，结束后最后一帧定格不变。

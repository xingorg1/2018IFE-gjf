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

**css3过渡** ：用于当元素 **从一种样式变换为另一种样式** 时为元素添加效果。

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

四个点（起始点、终止点以及两个相互分离的中间点）

## transform学习笔记
20180731
### transform理解

**transform转换**  属于2D/3D上的转换、变形效果。他不是一个动画，他就是变形。比如正方形变平行四边形，再变圆形。都是形状变成另一个形状。

但是如果配合上transition/animation，他就会从一个形状变成另一形状。只要有一段时间内的过渡效果，就形成了动画。

**主要功能有**：拉伸变形、位移、缩放、旋转。

**原理是**：改变元素的尺寸、形状、角度、位置。

### transform-origin 设置元素的基点位置



### transform的各个属性值

name | 含义 
---- | ---- 
translate() | 位移
rotate() | 旋转
scale() | 缩放 
skew() | 翻转/拉伸变形
matrix() | 混合, 集百家之大乘。

### 属性值可能的配置
**translate：相对于当前位置向水平(x)/垂直(y)方向移动，正值向右/下，负值向左/上**

name | 含义 | 备注
---- | ---- | ----
translate(x,y) | 位移 | 
中心点 | 

**rotate：N°旋转，正值顺时针旋转，赋值逆时针旋转。**

name | 含义 | 备注
---- | ---- | ----
rotate(0deg) | 2D旋转 | 
rotateX/rotateY(0deg) | 3D旋转 | N°旋转，X围绕x轴做水平方向翻转，Y围绕y轴做垂直方向翻转
中心点 | 

**scale：x对应宽度，y对应高度，缩放到原来宽高的倍数。**

name | 含义 | 备注
---- | ---- | ----
scale(x,y) | 缩放 | 
中心点 | 
 
**skew：翻转给定的角度，xdeg水平翻转度数，ydeg垂直翻转度数。不能为负？**

name | 含义 | 备注
---- | ---- | ----
skew(xdeg,ydeg) | 翻转/拉伸变形 | 
中心点 | 
 
**matrix**

name | 含义 | 备注
---- | ---- | ----
translate(x,y) | 位移 | 相对于当前位置向水平(x)/垂直(y)方向移动，正值向右/下，负值向左/上
rotate(0deg) | 2D旋转 | N°旋转，正值顺时针旋转，赋值逆时针旋转。
rotateX/rotateY(0deg) | 3D旋转 | N°旋转，X围绕x轴做水平方向翻转，Y围绕y轴做垂直方向翻转
scale(x,y) | 缩放 | x对应宽度，y对应高度，缩放到原来宽高的倍数。
skew(xdeg,ydeg) | 翻转/拉伸变形 | 翻转给定的角度，xdeg水平翻转度数，ydeg垂直翻转度数。不能为负？
matrix | 混合 | 
中心点 | 
 
### 兼容性及写法
> IE10+以上不用想，其他现代浏览器
> chrome、safari要加前缀-webkit-
> ie9加前缀-ms-

**前缀**

```css

```

## animation学习笔记
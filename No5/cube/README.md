## 立方体骰子效果 - 笔记
[示例](https://codepen.io/jordizle/pen/haIdo)

这个立体正方形的实现效果运用了：
1. **perspective**

  * 规定3D元素的透视效果

  * 目前浏览器都不支持，只有safari和chrome用替代元素-webkit-perspective

  * 只影响有3d转换属性的子元素，是加在父元素身上的。

  * 需要配合perspective-origin一同使用。

2. **perspective-origin**

  * 规定3D元素的底部位置 ？？

  * 大致属性同perspective

  * perspective-origin : 50% 200px; 为什么第一个是百分比，第二个是像素值？可以有的值或格式：top,bottom,center,length,%。

  * x-axis 定义该视图在x轴上的位置、
  * y-axis 定义该视图在y轴上的位置

3. **-webkit-box-reflect(倒影)**

  [css3倒影](http://www.css88.com/book/css/properties/only-webkit/box-reflect.htm)

```css
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250,250,250,0.1)));
```
  * 方位direction： above、below、inherit、initial、left、right、unset、、、

  * 距离offset：元素和倒影之间的间隔，可以为负值，0的时候二者紧贴。单位：%、px

  * mask-box-image：图片倒影、文字倒影、渐变

    * 图片倒影/文字倒影：url制定遮罩图地址

    * 渐变-webkit-gradient：

      * 线性还是径向： linear、radial

      * 起点： left top（方位值）、10% 10%(百分比数值)

      * 终点： 同上

      * 开始颜色： from(颜色值)：颜色值 rgb、rgba、red、#f00

      * 结束颜色： to(颜色值)： 颜色值 同上

      * 颜色停止的位置： color-stop()


4. **transform-style: preserve-3d;**

    * 规定被嵌套元素如何在3D空间中显示：
    * flat：表示子元素不保留3d位置、
    * preserve-3d表示 子元素保留3d位置
  * 属性值： flat、preserve-3d、unset、inherit、initial

  * 需要与transform一同使用。

5. **transform** 、 **transition**

6. **outline**

7. **touch-callout**

  * 当你触摸并按住触摸目标时候，禁止或显示系统默认菜单

8. **user-select**

  * 设置用户是否能够选中文本。可用于除替换元素外的所有元素

  **替换元素**：img、input、textarea、select、object

  **非替换元素**：p等

9. **animate-timing-function: steps();**

  [steps **逐帧动画**](http://www.imooc.com/article/19845)

  [steps 博文介绍](http://www.cnblogs.com/mfmdaoyou/p/6877976.html)

10. **立方体效果**看不懂，就照着做一遍。。。

11. 之前的transition等涉及到填写时间的，都写.6s，其实可以写**600ms**；

12. 突发奇想，做点有趣的，不写6个数字，而是做成**骰子效果**

13. 骰子小圆点的**内凹效果用的box-shadow**，两个**属性连写**：

```css
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
```

14. 骰子布局使用**flex布局**

15. [最终效果展示](https://codepen.io/xingorg1/pen/BPPOQN)
### 笔记
[示例](https://codepen.io/jordizle/pen/haIdo)
这个立体正方形的实现效果运用了：
1. perspective

2. perspective-origin

  * perspective-origin : 50% 200px; 为什么第一个是百分比，第二个是像素值？

3. -webkit-box-reflect （倒影）

  * [css3倒影](http://www.css88.com/book/css/properties/only-webkit/box-reflect.htm)

  * 属性值： above、below、inherit、initial、left、right、unset

4. transform-style: preserve-3d;

  * 属性值： flat、preserve-3d、unset、inherit、initial

5. transform transition

6. outline

7. touch-callout

8. user-select

9. animate-timing-function: steps();

  [steps 逐帧动画](http://www.imooc.com/article/19845)

  [steps 博文介绍](http://www.cnblogs.com/mfmdaoyou/p/6877976.html)

10. 立方体效果看不懂，就照着做一遍。。。

11. 之前的transition等涉及到填写时间的，都写.6s，其实可以写600ms；

12. 突发奇想，做点有趣的，不写6个数字，而是做成骰子效果

13. 骰子小圆点的内凹效果用的box-shadow，两个属性连写：box-shadow: inset 0 3px #111, inset 0 -3px #555;

14. 骰子布局使用flex

15. [最终效果展示](https://codepen.io/xingorg1/pen/BPPOQN)
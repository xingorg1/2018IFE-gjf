### 过程笔记

1. 怎么实现翻转

    * 答： transform： rotateY(0deg) - rotateY(90deg) 就能实现翻转

2. 翻转后怎么近大远小

    * 答： rotate的翻转只是单纯的翻转，并不能实现近大远小的透视效果。

    *答：这就要用到透视效果：perspective: 201px;

3. 第一张翻转完毕怎么展示第二张图？

  * 答: 就像魔术一样的障眼法 - 翻转到90°时是一条线，然后第一张隐藏。第二张默认就是翻转到90°隐藏的，第一张隐藏的同时让其显示且角度变正常。鼠标移走第二张重复第一张的代码，第一张重复第二张的。

总结： 一开始完全处于没有思路的状态

4. hover事件不能加在img上，否则img翻转的时候，鼠标容易离开图片，然后事件中断，鼠标返回原状。

5. 通常是把动画放慢了观察他的表现，也就能理解他的用途。

6. 合理的调整贝塞尔曲线，真的可以达到事半功倍的效果，让动画更加流畅自然。

7. 这个动画效果，如果没有近大远小的渐变效果是很容易实现的，一个rotateY 0-90的变化就能搞定，但是加上透视才更合理。

8. 透视：perspective(n-px),n越小，透视越大。就是近处竖线和远处竖线的高度比例就越大。
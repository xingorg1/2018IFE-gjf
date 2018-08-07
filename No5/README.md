### hover旋转的正方形盒子

* 父元素设置 **透视的完美数值**：

```css
 perspective： 800px;

 perspective-origin: 50% 200px;(子元素是200px的宽高)
```

*  **投影的设置**
```css
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250,250,250,0.1)));
```

* **文字投影**功能
```css
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, .1)));
```

* **文字填充和美化**功能
[-webkit-text-fill-color](https://blog.csdn.net/qiphon3650/article/details/75072927)
```css
  background: #080808;
  -webkit-background-clip: text;
  /* 以上两个原理，利用文字当蒙板，反向透出背景色，然后背景色想怎么渐变怎么渐变，设置成图片都没问题 */
  -webkit-text-fill-color: transparent;
  /* 给文字做镂空效果 */
```

* 终极：**文字渐变 + 投影**
```css
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, .1)));
  background: -webkit-linear-gradient(top, #FFEB3B 37%,#009688 66%,#FFC107 65%,#FFEB3B 100%);
  /* 实际是背景色渐变，但是只展示文字区域的背景色。此时的文字不是文字，而是文字外形构成并透出的背景色 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

```

* **animation-play-state**
```
  paused 暂停

  running 运行
```

  这里巧妙的运用该属性，鼠标经过的时候设置为运行，鼠标离开即变回默认的暂停状态。

  从这个示例中也可以观察出来，中途暂停的时候，动画状态会暂停，不会恢复到初始状态。

  再次执行是不是接着执行？

* 玩玩 **animation-timing-function** 里的 **steps**

  demo1 拿剑奔跑的小人 √

  demo1-1 打架的小人

  demo2 打字效果

  demo3 h5封面制作

* 玩玩 **animation-fill-mode**填充动画
## 第一课过程笔记

### 准备工作
1. [markdown语法入门](http://blog.didispace.com/books/learning-markdown/article/about/readme.html)

  没有刻意去学一遍，因为这不是重点。只是大概过一下目录两分钟，知道需要的知识点在哪找即可，一会用到的过来翻看。

2. [github生成秘钥](https://blog.csdn.net/stven_king/article/details/44863001)
  
  因为用git Bash提交总会需要输入账号和密码很麻烦，可视化工具又反应很慢

3. [github制作在线简历,可生成pdf](https://blog.csdn.net/biyongyao/article/details/74536664)

  制作一个项目在github生成预览路径,准备提交作业用。

### 本课程目标
> 熟练掌握 CSS transition 、transform 、animation 的用法;

* 包括三个属性的各个属性值及作用

* 三个属性的合并写法

> js控制css动画样式的切换;

* 主要核心是通过 **js事件切换盒子类名** 来实现

### 效果思路
**问题：**
怎么让下划线在中间向两遍展开再从两遍收缩？

**实现：**
一个inline-block元素居中显示/一个定宽block元素margin:0 auto;然后增加宽度值，transition监听宽度值。

**结论：**
可以实现，不过这种方法只用到了transition。
# sort.js
JavaScript to achieve the ten common sorting algorithm library

> 这个小库是对常见的十大排序算法的一个基本汇总，建议读者直接**看源码|看源码|看源码**。别怕，我注释十分清晰，你要是还看不懂，给我说，我给你拆分成模块。看你能看懂不。

> 对于实在不能理解的同学，听我的吧！！！这是死东西，那你就--**背下来|背下来|背下来**。就说三遍，背完之后，还不能理解，那我也不能理解了。（牢记：千万别死背-边背边想边理解）。

### 简单的使用和测试
----
#### 在命名空间`PAS`下使用
```js
[
 'bubble',
 'insert',
 'quick',
 'selection',
 'merge',
 'shell',
 'heap',
 'radix',
 'bucket',
 'count'
].forEach(function(func) {
  var arr = [1,2,3,5,6,3,1,4];
  console.log(PAS[func](arr))
});

//上面输出的结果统一为：`[ 1, 1, 2, 3, 3, 4, 5, 6 ]`
```

#### 直接当做数组的方法调用
```js
[
 'bubble',
 'insert',
 'quick',
 'selection',
 'merge',
 'shell',
 'heap',
 'radix',
 'bucket',
 'count'
].forEach(function(func) {
	var arr = [1,2,3,5,6,3,1,4];
	console.log(arr[func]())
})

//上面输出的结果统一为：`[ 1, 1, 2, 3, 3, 4, 5, 6 ]`
```
----
>喜欢的，觉得对你有帮助的，给个`star`，交个朋友吧!!!

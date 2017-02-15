;
(function (global, factory) {
	// 兼容amd和cmd的写法
	// 基本的新式是 cmd ? cmd : amd ? amd : global || window
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.PAS = factory());
})(this, (function () {
	// 判断是否数组
	function isArray(arr) {
		return typeof Array.isArray === 'function' ?
			Array.isArray(arr) :
			Object.prototype.toString.call(arr) === '[object Array]';
	}

	// 交换两个元素
	function swap(v1, v2, context) {
		[context[v1], context[v2]] = [context[v2], context[v1]];
		return void 0;
	}

	// 冒泡排序
	function bubble(arr) {
		let len = arr.length;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					swap(j, j + 1, arr)
				}
			}
		}
		return arr;
	}

	// 插入排序
	function insert(arr) {
		let len = arr.length;
		let pIndex, current; // 前一个元素的索引，当前元素的值
		for (let i = 1; i < len; i++) {
			pIndex = i - 1;
			current = arr[i];

			// 依次把当前元素和前面的元素进行比较
			while (pIndex >= 0 && arr[pIndex] > current) {
				// 比当前的元素大，向后移一位
				arr[pIndex + 1] = arr[pIndex];
				pIndex--;
			}
			// 插入当前元素到合适的位置
			arr[pIndex + 1] = current;
		}
		return arr;
	}

	// 快速排序 -- 这个方法不改变原数组
	function quick(arr) {
		let len = arr.length;

		if (len < 2) {
			return arr;
		}

		let middleIndex = Math.floor(len / 2); // 中间元素的索引值
		let baseValue = arr.splice(middleIndex, 1); // 基准值

		let left = []; // 保存小于基准值元素
		let right = []; // 保存大于或等于基准值元素

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < baseValue) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return quick(left).concat(baseValue, quick(right));
	}

	// 选择排序
	function selection(arr) {
		let len = arr.length;
		let minIndex = 0; // 用于保存最小值的索引

		for (let i = 0; i < len - 1; i++) {
			minIndex = i;
			// 遍历后面的元素和当前认为的最小值进行比较
			for (let j = i + 1; j < len; j++) {
				if (arr[minIndex] > arr[j]) {
					// 比认为的最小值小 交换索引
					minIndex = j;
				}
			}
			// 找到最小值和当前值交换
			if (minIndex !== i) {
				swap(minIndex, i, arr);
			}
		}
		return arr;
	}

	// 归并排序
	function merge(arr) {
		let len = arr.length;
		if (len < 2) {
			return arr;
		}
		let middleIndex = Math.floor(len / 2); // 获取中间元素的索引
		let left = arr.slice(0, middleIndex); // 获取左半部分的元素
		let right = arr.slice(middleIndex); // 获取右半部分的元素

		let merges = function (left, right) {
			// 保存结果的数组
			let result = [];

			while (left.length && right.length) {
				if (left[0] < right[0]) {
					result.push(left.shift())
				} else {
					result.push(right.shift())
				}
			}

			// 如果左半边还有元素
			while (left.length) {
				result.push(left.shift());
			}

			// 如果右半边还有元素
			while (right.length) {
				result.push(right.shift());
			}

			return result;
		}

		return merges(merge(left), merge(right));
	}

	// 希尔排序
	function shell(arr) {
		let len = arr.length,
			temp,
			gap = 1;

		while (gap < len / 3) {
			gap = gap * 3 + 1;
		}

		for (gap; gap > 0; gap = Math.floor(gap / 3)) {
			for (let i = gap; i < len; i++) {
				temp = arr[i];
				for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
					arr[j + gap] = arr[j];
				}
				arr[j + gap] = temp;
			}
		}
		return arr;
	}

	// 堆排序
	function heap(arr) {
		let len = arr.length;

		let heapify = function (
			arr // 待排序的数组
			, x // 元素的下标
			, len // 数组的长度
		) {
			let l = 2 * x + 1;
			let r = 2 * x + 2;
			let largest = x;

			if (l < len && arr[l] > arr[largest]) {
				largest = l;
			}

			if (r < len && arr[r] > arr[largest]) {
				largest = r;
			}

			if (largest !== x) {
				swap(x, largest, arr);
				heapify(arr, largest, len);
			}
		}

		for (let i = Math.floor(len / 2); i >= 0; i--) {
			heapify(arr, i, len);
		}

		for (let i = len - 1; i >= 1; i--) {
			swap(0, i, arr);
			heapify(arr, 0, --len);
		}
		return arr;
	}

	// 基数排序
	function radix(arr) {
		const SIZE = 10;
		let len = arr.length;
		let buckets = [];
		let max = Math.max.apply(null, arr); // 数组中的最大值
		let maxLength = String(max).length; // 最大数字的长度

		// 进行循环将桶中的数组填充成数组
		for (let i = 0; i < SIZE; i++) {
			buckets[i] = [];
		}

		// 进行循环--对数据进行操作--放桶的行为
		for (let i = 0; i < maxLength; i++) {
			// 第二轮循环是将数据按照个位数进行分类
			for (let j = 0; j < len; j++) {
				let value = String(arr[j]);
				// 判断长度--进行分类
				if (value.length >= i + 1) {
					let num = Number(value[value.length - 1 - i]); // 依次的从右到左获取各个数字
					//放入对应的桶中
					buckets[num].push(arr[j]);
				} else {
					// 长度不满足的时候，就放在第一个桶中
					buckets[0].push(arr[i]);
				}
			}
			// 将原数组清空
			arr.length = 0;

			//这次循环是依次取出上面分类好的数组存放到原数组中
			for (let j = 0; j < SIZE; j++) {
				// 获取各个桶的长度
				let l = buckets[j].length;
				// 循环取出数据
				for (let k = 0; k < l; k++) {
					arr.push(buckets[j][k]);
				}
				// 将对应的桶清空，方便下次存放数据
				buckets[j] = [];
			}
		}
		return arr;
	}

	// 桶排序 -- 不改变原数组
	function bucket(arr, size = 5) {
		let len = arr.length;
		if (len < 2) {
			return arr;
		}

		// 获取最大值和最小值
		const max = Math.max.apply(null, arr);
		const min = Math.min.apply(null, arr);

		// 计算出桶的数量  size是截距
		const bucketCount = Math.floor((max - min) / size) + 1;
		// 根据桶的个数创建指定长度的数组
		const buckets = new Array(bucketCount);
		// 将每个桶塞到大桶里面去
		for (let i = 0; i < bucketCount; i++) {
			buckets[i] = [];
		}
		// 利用映射函数将数据分配到各个桶里面去
		for (let i = 0; i < arr.length; i++) {
			// 逢size进1
			let index = Math.floor((arr[i] - min) / size);
			buckets[index].push(arr[i]);
		}
		//对每个桶中的数据进行排序--借助于快速排序算法
		for (let i = 0; i < buckets.length; i++) {
			buckets[i] = quick(buckets[i]);
		}

		// flatten数组--有点不足就是会将原数组中的String改变为Number
		return buckets.join(',').split(',').filter(v => v !== '').map(Number);
	}

	// 计数排序
	function count(arr) {
		let index = 0;
		let len = arr.length;
		let min = Math.min.apply(null, arr); // 最小值
		let max = Math.max.apply(null, arr); // 最大值
		let result = []; // 结果数组

		// 向新数组中填充0
		for (let i = min; i <= max; i++) {
			result[i] = 0;
		}
		// 把各个数组中对应的元素计数加一
		for (let i = 0; i < len; i++) {
			result[arr[i]]++;
		}
		// 按照计数的元素进行排序
		for (let i = min; i <= max; i++) {
			while (result[i]-- > 0) {
				arr[index++] = i;
			}
		}
		return arr;
	}

	const PAS = {};

	[
		bubble,
		insert,
		quick,
		selection,
		merge,
		shell,
		heap,
		radix,
		bucket,
		count
	].forEach(function (func) {
		let name = func.name;
		//增加层外包装，判断参数是不是数组
		Object.defineProperty(PAS, name, {
			get: function () {
				return function (args) {
					if (!isArray(args)) {
						throw new Error('the arguments of PAS.' + name + ' must be Array');
					}
					return func.call(null, args);
				}
			},
			configurable: true
		})

		// 在数组的原型上添加方法
		Object.defineProperty(Array.prototype, name, {
			get: function () {
				var vm = this;
				return function () {
					return func.call(vm, vm);
				}
			},
			configurable: true
		})
	})

	return PAS;
}))
const PAS = require('./sort.js')

var a = [1,2,3,5,6,3,1,4];
// console.log(PAS.bubble([1,2,3,5,6,3,1,4]))
//console.log(PAS.insert([1,2,3,5,6,3,1,4]))
//console.log(PAS.quick([1,2,3,5,6,3,1,4]))
//console.log(PAS.selection([1,2,3,5,6,3,1,4]))
//console.log(PAS.merge([1,2,3,5,6,3,1,4]))
//console.log(PAS.shell([1,2,3,5,6,3,1,4]))
//console.log(PAS.heap([1,2,3,5,6,3,1,4]))
//console.log(PAS.radix([1,2,3,5,6,3,1,4]))
//console.log(PAS.bucket([1,2,3,5,6,3,1,4]))
//console.log(PAS.count([1,2,3,5,6,3,1,4]))

// console.log(a.insert())

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
		console.log(PAS[func](arr), func)
	});

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
		console.log(arr[func](), func)
	})
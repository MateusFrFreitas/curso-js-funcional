function ordenar(array) {
	return [...array].sort()
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6])

const numsOrdenados = ordenar(nums)

console.log(nums, numsOrdenados)

const parteNums = nums.slice(2)

console.log(parteNums, nums)
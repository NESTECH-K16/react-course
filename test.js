// impure and pure function
let addNew = 0
// internal state
// external state
function getTotal(num1, num2) {
	return num1 + num2 + addNew
}

const sum1 = getTotal(1, 2)
const sum2 = getTotal(1, 3)
const sum3 = getTotal(1, 4)
console.log(sum1, sum2, sum3)
console.log('******************')

addNew = 2

// external state

const sum4 = getTotal(1, 2)
const sum5 = getTotal(1, 3)
const sum6 = getTotal(1, 4)
console.log(sum4, sum5, sum6)
const oldResult = getTotal(1, 2)

addNew = 6
const sum7 = getTotal(1, 2)


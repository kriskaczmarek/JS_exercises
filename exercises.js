//isPalindorne-of course if we give an input
function isPalindrone(word) {
	if (word.length === 1 || word.length === 0) {
		return true
	}
	if (word[0] === word[word.length - 1]) {
		return isPalindrone(word.substring(1, word.length - 1))
	}
	return false
}
// console.log(isPalindrone("a")) //true
// console.log(isPalindrone("ab")) //false
// console.log(isPalindrone("racecar")) //true
//recursion-of course if we give a word or even letter
function reveRswoRd(word) {
	if (word.length === 1) {
		return word
	} else {
		return reveRswoRd(word.substring(1)) + word.charAt(0)
	}
}
// console.log(reveRswoRd("java script"))//tpircs avaj
// console.log(reveRswoRd("ab"));
// console.log(reveRswoRd("a"));

//recursion sum of natural numbers
function sumNaturalNumbers(number) {
	if (number <= 1) {
		return number
	}
	return number + sumNaturalNumbers(number - 1)
}
console.log(sumNaturalNumbers(10));
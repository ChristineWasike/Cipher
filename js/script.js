var sentence=prompt("What is your favourite sentence?");
var all = function() {
	var letter1 = sentence[0];
	var letter2 = sentence[sentence.length -1];
	var join = letter1 + letter2;
	var capital = join.toUpperCase();
	return capital
}

var rewind = function() {
	var letter1 = all()[0];
	var letter2 = all()[all().length -1];
	var combine = letter1 + letter2;
	return combine;
}

function reverseString(str){
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var reversedString = reverseArray.join("");
	return reversedString;
}

var answer = reverseString(rewind());
console.log(answer);

alert(rewind());
console.log(rewind())

var newSentence = function() {
	var code = sentence + rewind();
	return code;
}

alert(newSentence());

var integer = function() {
	var numChar = sentence.length-1 /2;
	var position = sentence.charAt(numChar);
	var ended = position + sentence;
	return ended;
}
var final = integer(sentence);
final
alert(final);
console.log(final)

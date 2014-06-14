var $gu = function () {
	this.charCodeStart = 2688; // 2688, start of Gujarati Unicode Code Block
	this.blockSize = 128; // 128, length of Gujarati Unicode Block
	this.scriptName = 'Gujarati'; // Human readable name of the Script
}

$gu.prototype.start = function () {
	return this.charCodeStart;
}

$gu.prototype.size = function () {
	return this.blockSize;
}

$gu.prototype.end = function () {
	return this.start() + this.size() - 1;
}

// map the code points to actual chars.
// e.g [2709,2710,2710] gives ['ક','ખ','ગ']
$gu.prototype.toChars = function ( charCodes ) {
	return charCodes.map( function (i) {
		return String.fromCharCode(i);
	});
}

// Entire Gujarati Unicode Range as codepoint values.
// Use ```toChars``` method to get the characters out of it.
$gu.prototype.listAllCodes = function () {
	var list = [];
	for ( var i = this.start() ; i <= this.end() ; i++ ) {
		list.push(i);
	}
	return list;
}

$gu.prototype.listAll = function () {
	return this.toChars( this.listAllCodes() );
}

$gu.prototype.isInRange = function ( char ) {
	char =  typeof char === 'string' ? char.charCodeAt(0) : char ;
	if ( typeof char === 'number' && this.start() <= char && char <= this.end() ) {
		return true;
	}
	return false;
}

module.exports = new $gu();
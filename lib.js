var $gu = function () {
	this.start = 2688; // 2688, start of Gujarati Unicode Code Block
	this.size = 128; // 128, length of Gujarati Unicode Block
	this.end = this.start + this.size - 1;
	this.scriptName = 'Gujarati'; // Human readable name of the script

	// Adding the 'complete' subset !
	this.addSubset( this.scriptName, this.charcodes( this.start, this.end ) );
}

$gu.prototype.charcodes = function ( start, end ) {
	var list = [];
	for ( var i = start ; i <= end ; i++ ) {
		list.push(i);
	}
	return list;
}

// map the code points to actual chars
// e.g [2709,2710,2710] gives ['ક','ખ','ગ']
$gu.prototype.toChars = function ( charCodes ) {
	return charCodes.map( function (i) {
		return String.fromCharCode(i);
	});
}

// Adds a named subset to ```$gu``` with common methods
// Provide subset name and members (as charcodes!) of the subset as an array
$gu.prototype.addSubset = function ( name, members ) {

	// if ```members``` is a function, get individual members as array
	members =  ( typeof members === 'function' ) ? members() : members;

	// if ```members``` is not resolved as an array, then quit
	if ( !Array.isArray(members) )
		return null;

	// Creating ```get<Subset>CodeList``` method
	// Will return all the members as charcodes
	this[ 'get' + name + 'CodeList' ] = function () {
		return members;
	}

	// Creating ```get<Subset>List``` method
	// Will return all the members as chars
	this[ 'get' + name + 'List' ] = function () {
		return this.toChars( members );
	}

	// One can pass charcode or the char itself
	// Uses indexOf to check is a charcode or char belongs to a subset of not
	this[ 'is' + name ] = function ( char ) {
		char = ( typeof char === 'string' ) ? char.charCodeAt(0) : char ;
		return members.indexOf(char);
	}

	// things went smoothly, all the helper methods should be available
	return true;
}

module.exports = new $gu();
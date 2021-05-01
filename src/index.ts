interface String {
	isEmail(): boolean;
	isEmpty(): boolean;
	isLower(): boolean;
	isUpper(): boolean;
	passwordForce(): string;
	hasSpecialCharacter(): boolean;
	includesLink(): boolean | undefined;
	toCapitalise(): string | undefined;
	camelCase(): string | undefined;
	snakeCase(): string | undefined;
	between(a: string, b: string): string | null | undefined;
	removeStr(str: string): string | undefined;
	startBy(str: string): boolean;
	endBy(str: string): boolean;
	reverse(): string | null;
}

String.prototype.isEmail = function () {
	const valide = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	const str: any = this
	return valide.test(str);
}

String.prototype.passwordForce = function () {
	let strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
	let mediumRegex = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/);
	let strength = "";
	const str: any = this
	if (strongRegex.test(str)) {
		strength = "strong"
	} else if (mediumRegex.test(str)) {
		strength = "medium"
	} else {
		strength = "weak"
	}
	return strength
}

String.prototype.hasSpecialCharacter = function () {
	const specialCharacterRegex = new RegExp(/[a-z0-9]/i);
	const strArray = this.split('');
	let specialCharacter = false;
	for (const str of strArray) {
		if (!specialCharacterRegex.test(str)) {
			specialCharacter = true;
			break;
		}
	}
	return specialCharacter;
}

String.prototype.includesLink = function () {
	const strArray = this.split(' ');
	const linkRegex = new RegExp(/^https?:\/\/(www.)?[a-zA-Z0-9@:%._\+~#=]{3,63}.[a-zA-Z]{2,3}((\/)?([a-zA-Z0-9#\?=&]){1,2000}){1,1000}$/)
	let includesLink = false;
	if (strArray && strArray.length) {
		for (const item of strArray) {
			const str: any = item;
			if (linkRegex.test(str)) {
				includesLink = true;
				break;
			}
		}
	} else return undefined;
	return includesLink;
}


String.prototype.toCapitalise = function () {
	if (!this || !this.length) return undefined;
	const strArray = this.split(/(\.|\?|\!|\;)/);
	let output = '';
	for (let i = 0; i < strArray.length;) {
		output += `${i !== 0 ? ' ' : ''}${strArray[i].trim().charAt(0).toUpperCase()}${strArray[i].trim().substring(1)}${strArray[i + 1] ? strArray[i + 1] : '.'}`
		i += 2
	}
	return output;
}

String.prototype.camelCase = function () {
	if (!this || !this.length) return undefined;
	const strArray = this.split(' ');
	let output: string = '';
	for (let i = 0; i < strArray.length; i++) {
		if (i !== 0) {
			output += `${strArray[i].charAt(0).toUpperCase()}${strArray[i].substring(1)}`
		} else output += strArray[i]
	}
	return output
}

String.prototype.snakeCase = function () {
	if (!this || !this.length) return undefined;
	const strArray = this.split(' ');
	return strArray.join('_')
}

String.prototype.between = function (a: string, b: string) {
	if (!this || !this.length) return undefined;
	if (!a || !a.length) throw SyntaxError('[MISSING_PARAMETER] first character must be provided.');
	if (!b || !b.length) throw SyntaxError('[MISSING_PARAMETER] last character must be provided.');
	a = a.trim();
	b = b.trim();
	const strArray = this.split(a)
	const result = strArray[1].split(b)[0].trim()
	if (!result || result === '') return null
	return result;
}

String.prototype.removeStr = function (str) {
	if (!this || !this.length) return undefined;
	if (!str || !str.length) throw SyntaxError('[MISSING_PARAMETER] a parameter must be provided.');
	const result = this.split(str).join('')
	return result
}

String.prototype.startBy = function (start: string) {
	if (!start || !start.length || !this || !this.length) throw SyntaxError('[MISSING_PARAMETER] Missing parameter or argument.');
	const firstChars = this.slice(0, (this.length - start.length))
	if (firstChars === start) return true
	return false
}

String.prototype.endBy = function (end: string) {
	if (!end || !end.length || !this || !this.length) throw SyntaxError('[MISSING_PARAMETER] Missing parameter or argument.');
	const last = this.substring(end.length)
	if (last === end) return true
	return false
}

String.prototype.isEmpty = function isEmpty() {
	if (!this || !this.length) return true;
	if (this === '') return true;
	else return false;
}

String.prototype.isLower = function () {
	if (!this || !this.length) return false;
	if (this.toLowerCase() === this) return true;
	return false;
}
String.prototype.isUpper = function () {
	if (!this || !this.length) return false;
	if (this.toUpperCase() === this) return true;
	return false;
}

String.prototype.reverse = function () {
	if (!this || !this.length) return null;
	const strArray = this.split('');
	strArray.reverse();
	return strArray.join('')
}
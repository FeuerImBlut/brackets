	module.exports = function check(str, bracketsConfig) {
		let bracketsMap = {};
		bracketsConfig.forEach(element => {
			bracketsMap[element[0]] = element[1];
		});
		let stack = [];
		for (i = 0; i < str.length; i++) {
			if (stack.length == 0) {
				stack.push(str[i]);
			}
			else if (bracketsMap[stack[stack.length - 1]] == str[i]) {
				stack.pop();
			}
			else {
				stack.push(str[i]);
			}
		}
		return !(stack.length) ? true : false;
	}	
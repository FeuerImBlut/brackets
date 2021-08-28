	module.exports = function check(str, bracketsConfig) {
		if (str.length %2 > 0) {
			return false;
		}
		
		for (let i = str.length - 1; i >= 0 ; i--)
		{
			for (let j = 0; j < bracketsConfig.length; j++)
			{
				if (str[i] === bracketsConfig[j][0]) {					
					str = str.replace(bracketsConfig[j].join(""), "")
				}
			}

		}
		if (str.length === 0) {
			return true;
		}
		else {
			return false;
			}
}

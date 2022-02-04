
		function standarColor() {
			var letters = '0123456789'.split('');
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.round(Math.random() * 10)];
			}
			return color;
		}
	function hashCode(str) { // java String#hashCode
		var hash = 0;
		for (var i = 0; i < str.length; i++) {
		   hash = str.charCodeAt(i) + ((hash << 6) - hash);
		}
		return hash;
	} 
	function intToRGB(i){
		var c = (i & 0x00FFFFFF)
			.toString(16)
			.toUpperCase();

		returned = "00000".substring(0, 6 - c.length) + c;
		return "#"+returned;
	}

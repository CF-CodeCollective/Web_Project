function Parse(input) {
	var obj = JSON.parse(input);
	console.log(obj.members[0].name);
}
let list = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
let out1 = document.querySelector(".list");
out1.innerHTML = '<ul>' + list.map(function (list) {
	return '<li>' + list + '</li>';
}).join('') + '</ul>';

let list1 = ['1', '2', '3', 'sea', 'user', 23];
let out2 = document.querySelector(".list1");
out2.innerHTML = '<ul>' + list1.map(function (list1) {
	return '<li>' + list1 + '</li>';
}).join('') + '</ul>';
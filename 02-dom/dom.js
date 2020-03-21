var ol = document.querySelector("ol");

const functions = {

 showList : () => {
	 let list = '';
	 for (let i =0; i < document.querySelector("ol").children.length; i++); {
		 list = document.querySelector('ol').children[i].textContent;
		 console.log(list);
	 }

 },

 createListElement: (input) => {
	 console.log(ol);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
},




};

showBtn.addEventListener('click', (() => {
	showList(list.children);
}));

addBtn.addEventListener('click', (() => {
	console.log(ol)
}));


export default functions;
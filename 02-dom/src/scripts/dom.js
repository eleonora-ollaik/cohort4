const functions = {

 showList : () => {
	 let list = '';
	 for (let i = 0; i < ol.children.length; i++); {
		 list += ol.children[i].textContent;
		 console.log(list);
	 }

 },

 createListElement: (input) => {
	let ol = document.getElementById('list');
	console.log(ol);
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
},

};



export default functions;
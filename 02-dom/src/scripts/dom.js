var ol = document.querySelector("ol");

const functions = {

 createListElement: (input) => {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
},




};

export default functions;
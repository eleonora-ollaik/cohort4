let ol = document.querySelector("ol");
let showBtn = document.getElementById('showBtn');
let addBtn = document.getElementById('addBtn');
let input = document.getElementById('itemInput');

showBtn.addEventListener('click', () => {
    let list = '';
    	 for (let i = 0; i < ol.children.length; i++); {
    		 list += ol.children[i].textContent;
    		 console.log(list);
}});

addBtn.addEventListener('click', (() => {
    let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
}));

const functions = {

	buildCard: (card) => {
		
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(card));

		div.classList.add("card");
		const br = document.createElement('br')
		div.appendChild(br)

		const addBeforeBtn = document.createElement('button');
		const addBeforeBtnText = document.createTextNode('Add Before');
		addBeforeBtn.appendChild(addBeforeBtnText);
		div.appendChild(addBeforeBtn);

		const addAfterBtn = document.createElement('button');
		const addAfterBtnText = document.createTextNode('Add After');
		addAfterBtn.appendChild(addAfterBtnText);
		div.appendChild(addAfterBtn);

		const removeBtn = document.createElement('button');
		const removeBtnText = document.createTextNode('Remove')
		removeBtn.appendChild(removeBtnText);
		div.appendChild(removeBtn);

		return div;

	},

	addBefore: (node, text) => {

		const div = functions.buildCard(text);
		node.parentElement.insertBefore(div, node);

	},

	addAfter: (node, text) => {

		const div = functions.buildCard(text);
		node.after(div, node.nextSibling);

	},

	removeFunction: (node) => {
		node.parentElement.removeChild(node);
	}

}



export default functions;
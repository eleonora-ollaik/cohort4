import React, { useState} from 'react';
import LlInput from './LL_Input';
import ll from './business_logic/LinkedList.js';
// import List from './LL_List';
import NavBar from './LL_NavBar';
import { ThemeContext } from '../settings/ThemeContext';
// import Card from './LL_NodeCard'

let linkedList = new ll.LinkedList();

export default function LlMain() {
  let [current, setCurrent] = useState('');
  let [total, setTotal] = useState('');
  let [todo, setTodo] = useState('');
  let [list, setList] = useState([]);

  const insertNew = (subject, amount) => {
    let node = linkedList.insertNode(subject, amount);
    setCurrent(node);
    setTotal(linkedList.total());

    list.push(node);
    console.log('this is list', list);
    console.log(linkedList);
    clearFields();
    return node;
  };

  function checkCurrent() {
    if (!linkedList.currentNode) {
      return 'No items in the list';
    }
    while (linkedList.currentNode) {
      return `${linkedList.currentNode.subject}: ${linkedList.currentNode.amount}`;
    }
  }

  const onDelete = () => {
    linkedList.removeNode();
    console.log(linkedList);
    setCurrent(linkedList.get());
    setTotal(linkedList.total());
    setList(list);
    console.log(list);
    console.log(current);
  };

  const onClear = () => {
    linkedList.clearList();
    setCurrent('No items');
    setTotal(linkedList.total());

    console.log(linkedList);
    checkCurrent();
  };
  const onClick = (e) => {
    let todo = e.target.getAttribute('todo');
    if (todo) {
      setTodo({ todo });
    }

    if (todo === 'head') {
      linkedList.first();
    } else if (todo === 'tail') {
      linkedList.last();
    } else if (todo === 'next') {
      linkedList.next();
    } else if (todo === 'prev') {
      let prev = linkedList.previous();
      setCurrent(linkedList.currentNode);
      return prev;
    }
  };

  const clearFields = () => {
    document.getElementById('idSubject').value = '';
    document.getElementById('idAmount').value = '';
  };

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div style={{ color: theme.syntax, background: theme.bg }}>
            <h1>Welcome to Linked List Page</h1>
            <LlInput
              insertN={insertNew}
              node={setCurrent}
              linkedList={linkedList}
            />

            <div className='navBar' onClick={onClick}>
              <NavBar
                // onNav={onClick}
                checkCurrent={checkCurrent}
                ll={linkedList}
                total={total}
                onDelete={onDelete}
                onClear={onClear}
              />
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

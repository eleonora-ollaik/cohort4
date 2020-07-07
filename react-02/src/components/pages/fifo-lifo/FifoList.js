import React from 'react';

export default function FifoList(props) {
  let fifoItem;
  if (props.fList) {
    fifoItem = props.fList.map((value, i) => {
      return <li key={i}> {value} </li>;
    });
  } else {
    return 'No items';
  }

  return (
    <div>
      <h2> Queue </h2>
      {fifoItem}
      <button todo='deleteQueue' onClick={props.onDelete}>
        Remove Item
      </button>
    </div>
  );
}

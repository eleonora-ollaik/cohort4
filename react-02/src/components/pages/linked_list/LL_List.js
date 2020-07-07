import React from 'react';
import Card from './LL_NodeCard';

export default function LL_List(props) {
  let listItem = props.list.map((node, i) => {
    return (
      <li key={i}>
        {node.subject}: {node.amount}{' '}
      </li>
    );
  });

  return (
    <div>
      <h1> Nodes List: {listItem} </h1>
    </div>
  );
}

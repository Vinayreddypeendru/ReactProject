import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [list, setList] = useState([]);

  const addTodo = (data) => {
    setList([...list, data]);
  };

  const handleDelete = (comingId) => {
    const updatedList = list.filter((eachItem) => eachItem.id !== comingId);
    setList(updatedList);
  };

  return (
    <React.Fragment>
      <h3>Hello</h3>
      <Child addtodo={addTodo} />
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <div key={id}>
              <li style={{ width: '50px', color: 'red' }}>{text}</li>
                <button onClick={() => handleDelete(id)}>Delete</button>
              
            </div>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

;

export default Parent;
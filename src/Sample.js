
import React from 'react';
import {useState} from 'react';

const Sample=props=>{
  const [text,updateText]=useState("");
  const arr=props.records;
  function change(e){
    e.preventDefault();
    const newObj={id:(arr.length+1),name:text};
    props.addStudent(newObj);
    updateText("");
  }
  return (<>
    <h3> ID NAME</h3>
    <ul>
      {arr.map(obj=>{
        return <li key={obj.id}>{obj.id} {obj.name}</li>
      })}
    </ul>
    <form onSubmit={change}>
      <input type="text" onChange={e=>{updateText(e.target.value)}} value={text} />
      <button type="submit">Add</button>
    </form>
  </>);
};
export default Sample;
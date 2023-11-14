import React from 'react';
import { useState } from 'react';
import ShoppingForm from './ShoppingForm'

const Listwrapper = () => {

  const [List, setList] = useState([]);
  // const addList = List = {
  //   setList([...List. {id:uuidv4(), task}])
  // }

  return (
    <ShoppingForm />
  )
}

export default Listwrapper
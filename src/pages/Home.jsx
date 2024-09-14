import React from 'react'
import { useState } from 'react'
import {useApp} from '../ThemeApp'
import {Box } from "@mui/material"
import Form from '../components/Form'
import Item from '../components/Item'

export default function Home  () {
  const {showForm,setGlobalMsg} =  useApp()
  const [data ,setData]= useState([{id : 1 , context : "Hello react", name : "Alice"},
  {id : 2, context : "React is Fun", name : "Bob"},{id : 3 , context : "React Developer", name : "Jhon"}])
 
  const remove = (id)=>{
    setData(data.filter(item => item.id != id))
    setGlobalMsg("An item is deleted")
  }
  
  const add = (name,context)=>{
    const id = data[data.length-1].id + 1;
    setData([...data,{id,name,context}])
    setGlobalMsg("An Item is Added")
  }

  return (
   <Box>
    
      {showForm && <Form add={add}/>}
      {data.map(item => <Item key={item.id} item={item} remove={remove}/>)}

   </Box>
  )
}


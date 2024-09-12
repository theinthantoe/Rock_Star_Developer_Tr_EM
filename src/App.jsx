import React from 'react'
import { useState } from 'react'
import Item from './Item'
import List from './List'
import Form from './Form'

const App = () => {
  const [showForm,setShowForm] = useState(false)
  const [data ,setData]= useState([{id : 1 , context : "Hello react", name : "Alice"},
  {id : 2, context : "React is Fun", name : "Bob"},{id : 3 , context : "React Developer", name : "Jhon"}])
 
  const remove = (id)=>{
    setData(data.filter(item => item.id != id))
  }
  
  const add = (name,context)=>{
    const id = data[data.length-1].id + 1;
    setData([...data,{id,name,context}])
  }

  return (
    <div style={{ maxWidth : 600, margin : "20px auto"}}>
      <h1 style={{display : "flex", flexDirection : "row", justifyContent : "space-between"}}>Yay Cha
       <button onClick={()=> setShowForm(!showForm)} style={{
        width : 32, height :32 ,border : "0 none",color : "white",borderRadius : 50 , background : showForm? "#dc3544" : "#0d64fd"
       }} >
        {showForm ? "x" : "+"}
       </button>
      </h1>
      {showForm && <Form add={add}/>}
      <List>
        {data.map(item => (<Item key={item.id} item={item} remove={remove}/>))}
      </List>

      
    </div>
  )
}

export default App

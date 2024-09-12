import { useRef } from "react"

export default function Form({add}) {
    const nameRef = useRef()
    const contextRef = useRef()
    return(
        <form style={{display : "flex",
        flexDirection : "column", gap : 3 ,padding : 10 ,marginBottom : 20 ,background : "#def",borderRadius : 8}
    } onSubmit={(e)=>{
        e.preventDefault()
        const name =nameRef.current.value;
        const context = contextRef.current.value;
        add(name,context)
        e.currentTarget.reset()
    }}>
            <input type="text" placeholder="Context" style={{padding :10}} ref={contextRef}/>
            <input type="text" placeholder="Name" style={{padding :10}} ref={nameRef}/>
            <button type="submit" style={{background : "#0d6efd" ,color : "white", border : "0 none",padding : 5}}>Post</button>
        </form>
    )
}
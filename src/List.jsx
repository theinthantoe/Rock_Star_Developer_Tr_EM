export default function List({children}) {
    return(
        <ul style={{
            padding : 0 ,margin : 0 ,listStyle : "none", border : "1px solid #ddd",
            borderRadius : 8, overflow : "hidden"
        }}>{children}</ul>
    )

}
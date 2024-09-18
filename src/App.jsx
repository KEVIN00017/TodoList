import { useState } from "react"


function App(){
  const[list,Setlist]=useState(["NewTodo"]);
  const[array,Setarray]=useState([""]);
  const[counter,Setcounter]=useState(1);
  const[uncounter,Setuncounter]=useState(1);
  const[checkboxvalue,Setcheckboxvalue]=useState({
    option01:false
  })

  const HandleClick =async()=>{
    Setlist([...list,array])
    Setcounter(counter+1)
    Setuncounter(uncounter+1)
    Setarray("")
   
  }

function excluir(index){
  const novalista=list.filter((_,i)=>i!==index)
  Setlist(novalista);
  Setcounter(counter-1)
  if(uncounter>0){
    Setuncounter(uncounter-1)
  }
  
}
function checar() {
  let checkBoxes = document.querySelectorAll(".checkbox");

  checkBoxes.forEach(function(el) {
    if (event.target.checked) {
      Setuncounter(uncounter - 1);
    } else {
      Setuncounter(uncounter + 1);
    }
  })
}
  return(
    <>
    <h1 className="center title">My TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: <span id="item-count">{counter}</span></span>
        <span>Unchecked count: <span id="unchecked-count">{uncounter}</span></span>
      </div>
      
      <input required type="text"  value={array} onChange={(e)=>{Setarray(e.target.value)}} />
      <button className="button center" onClick={HandleClick}>New TODO</button>
      <ul id="todo-list" className="todo-list">
  
        {list.map((element,index)=>{
          return(
            <li key={index} id="todo">{element}<input type="checkbox" className="checkbox" onChange={checar}  /> <button onClick={()=>excluir(index)}>DELETAR</button></li>
          )
        })}
      </ul>

    </>
  )
}

export default App

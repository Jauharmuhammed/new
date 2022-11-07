import './App.css';
import {useState} from 'react'

function App() {
  const [toDos, setToDos]= useState([])
  const [toDo, setToDo]= useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Make your plan for the Day 📝</h2>
      </div>
      <form action="" onSubmit={(e) =>{
        e.preventDefault();
        setToDo('')
        if (toDo !== ''){
          return (
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
        )
        }
      }}>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="Add New ToDo..." autoFocus />
          <button type='submit' ><i className="fas fa-plus"></i></button>
        </div>
      </form>
      {
        toDos.map((obj)=>{
          return (
            <div className="todos" key={obj.id}>
              <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.checked);
                    console.log(obj);
                    setToDos(toDos.filter(toDosObj => {
                      if (toDosObj.id===obj.id){
                        toDosObj.status = e.target.checked
                      }
                      return toDosObj
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p className='todo-list' >{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={(e)=>{
                    setToDos(toDos.filter((delToDo) => {
                      if (delToDo.id  !== obj.id) {
                        return delToDo
                      }
                    }))
                  }} className="fas fa-times"></i>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

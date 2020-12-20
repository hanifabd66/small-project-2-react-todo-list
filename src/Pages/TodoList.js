import React, {useRef} from "react";
import Todo from "../Components/Todo";

import TodoForm from "../Components/TodoForm";
import EditForm from "../Components/EditForm";
import useDoubleClick from "use-double-click"
// import {DragDropContext} from 'react-beautiful-dnd'


let obj
let data;

const List = ({onDouble, obj, deleteTodo}) =>{
  const buttonRef = useRef()

    useDoubleClick({
            onDoubleClick: (e) =>{
            onDouble(obj)
    }, ref: buttonRef
  })

  return <div className='flat'>
    <p ref={buttonRef} className='todo'>
      {obj.text}
    </p>
    <button onClick={deleteTodo} className="delete_btn"> X </button>
  </div>
}

class TodoListPage extends React.Component {
  state = {
    todos: [{ text: "Task 1"}, { text: "Task 2"}, { text: "Task 3"}],
    newValue: "",
    isEdit: false, 
    idEdit:{}, //nampung id index yg d klik
    editIndex:{} //nampung sementara
  };
  
  setTodos = (todos) => this.setState({ todos });
  
  addTodo = (text) => {
    const newTodos = this.state.todos.concat({ text });
    this.setTodos(newTodos);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.newValue) return;
    this.addTodo(this.state.newValue);
    this.setState({
      newValue: "",
    });
  };

  deleteTodo = (event) =>{
    // console.log(event);
    const confirm = window.confirm("Are u sure want to Delete Item?")
    
    if(confirm){
    const remove =this.state.todos.splice(event, 1)
    this.setState({remove})
      }}
  
   render() {
    return (
      <div className="todo_list">
        
        <h2><i>Todo List Page</i></h2>
        <p><b>Todo List</b></p>

        {this.state.todos.map((todo, index) => (
          <div className="todolist_form" key={index}>
            <div className='flat'> 
            <div className='check'> √ </div>
            
        <List onDouble={(data) => {
          console.log(data, "<--Data")
          console.log(index, "<--Index")
          this.setState({
          editIndex:data,
          isEdit: !this.state.isEdit,
          idEdit: index
          })
          }}
          obj={todo}
          deleteTodo={()=> this.deleteTodo(index)}
            />
            </div>
          </div>
            ))}
            
        {/*  */}
        {this.state.isEdit ? <EditForm 
          onSubmit={()=> {
          console.log(this.state.idEdit, 'ind')
          const newData = this.state.todos.map((val, index) =>{
          if (index === this.state.idEdit){
          return this.state.editIndex
          }
          return val
          })
          this.setState({
          todos:newData,
          newValue:'',
          isEdit:false,
          })
          }}

          value={this.state.editIndex.text}
          onValueChanged={(e)=>{
          this.setState({
          editIndex:{
          ...this.state.editIndex,
          text:e.target.value
          }
          })
          }}
        /> :

        <TodoForm
        onSubmit={this.handleSubmit}
        onValueChange={(value) =>
        this.setState({
        newValue: value,
        })
        }
          value={this.state.newValue}
        /> }
      </div>
    );
  }
}
export default TodoListPage;
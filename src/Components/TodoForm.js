

function TodoForm(props) {
  return (
    <form className ="todo_form" onSubmit={props.onSubmit}>
      <input type="text" 
              placeholder="Add a New Todo" 
              className="input" value={props.value} 
              onChange={(e) => props.onValueChange(e.target.value)} />
     <button className='button_submit' type='submit'> Add </button>
   </form>
  );
}

export default TodoForm;
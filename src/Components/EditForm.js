
function EditForm(props) {

    return (
      <form className='todo_form' onSubmit={props.onSubmit}>
        <input className='input' type="text" value={props.value} onChange={props.onValueChanged} />
        <button className='button_submit_edit' type='submit'> Edit </button>
      </form>
    );
  }
  
  export default EditForm;
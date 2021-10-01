import React from 'react';

const EditForm = (props) => {
  const { id, title, url } = props.currentBookmark;
  
  return (
    <form onSubmit={(evt) => props.handleUpdateButton(evt, id)}>
      <h5>App Form</h5>
      <input type="text" name="title" value={title} onChange={props.handleOnChange} />
      <input type="text" name="url" value={url} onChange={props.handleOnChange} />
      <input type="submit" value="Update" />
    </form>
  );
}

export default EditForm;

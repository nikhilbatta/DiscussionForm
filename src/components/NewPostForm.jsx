import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {

  let _content = null;
  let _likes = 0;
  let _dislikes = 0; 

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({content: _content.value, likes: _likes, dislikes: _dislikes, id: v4()});
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <textarea
          id='content'
          placeholder='Write your post here'
          ref={(textarea) => {_content = textarea;}}/>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default NewPostForm;
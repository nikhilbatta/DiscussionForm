import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import 'materialize-css/dist/css/materialize.min.css';

function NewPostForm(props) {

  let _content = null;
  let _likes = 0;
  let _dislikes = 0; 

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({content: _content.value, likes: _likes, dislikes: _dislikes, id: v4(), timePosted: new Moment()});
    _content.value = '';
  }

  var btnStyle = {
    backgroundColor: '#546d7a',
    color: 'white',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '10px'
  };

  return (
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <style jsx>{`
            .input-field textarea:focus {
              border-bottom: 1px solid #546d7a;
              box-shadow: 0 1px 0 0 #546d7a;
            }
        `}</style>
        <div className='input-field'>
          <textarea
            id='content'
            placeholder='Write your post here'
            className='materialize-textarea'
            ref={(textarea) => {_content = textarea;}}/>
        </div>  
        <button style={btnStyle} type='submit' className="btn-small waves-effect waves-light"><i className="material-icons left">send</i>Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default NewPostForm;
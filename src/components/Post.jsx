import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Post(props) {

  function handleLikeClick(){
    props.onNewLike(props.index);
  }
  function handleDislikeClick(){
    props.onNewDislike(props.index);
  }
  function handleDeletePost(){
    props.onDeletePost(props.index);
  }
  var btnStyle = {
    backgroundColor: 'white',
    color: 'black',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '10px',
    marginBottom: '10px'
  };
  var centerStyle = {
    textAlign: 'center'
  };
  var cardStyle = {
    width: '60%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  const postInformation = 
  <div style={cardStyle}>
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{props.content}</span>
      <p>Likes: {props.likes} </p>
      <p>Dislikes: {props.dislikes} </p>
      <p>Posted: {props.formattedWaitTime} ago</p>
      <div style={centerStyle}>
        <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={handleLikeClick}><i className="material-icons">thumb_up</i></button>
        <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={handleDislikeClick}><i className="material-icons">thumb_down</i></button>
      
      </div>
    </div>
  </div>
</div>;
if(props.currentRouterPath === '/admin'){
  return (
    <div>
    <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={handleDeletePost}><i className="material-icons">delete</i></button>
    {postInformation}
    </div>
  )
}
else{
  return (
    <div>
      {postInformation}
    </div>
    );
}
  
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  onNewLike: PropTypes.func,
  onNewDislike: PropTypes.func,
  index: PropTypes.number,
  formattedWaitTime: PropTypes.string.isRequired,
  onDeletePost: PropTypes.func,
  currentRouterPath: PropTypes.string
};

export default Post;
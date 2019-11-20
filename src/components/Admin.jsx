import React from 'react';
import PostList from './PostList'
import PropTypes from 'prop-types'; 
import PostDetail from './PostDetail';

function Admin(props){
    console.log(props.currentRouterPath)
  return (
    <div>
      <h2>Admin</h2>
      <PostDetail/>
        <PostList postList={props.postList} currentRouterPath={props.currentRouterPath} onDeletePost={props.onDelete}/>
    </div>
  );
}
Admin.propTypes = {
    postList: PropTypes.array,
    currentRouterPath: PropTypes.string,
    onDeletePost: PropTypes.func
}
export default Admin;
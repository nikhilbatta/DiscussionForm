import React from 'react';
import PostList from './PostList'
import PropTypes from 'prop-types'; 
function Admin(props){
    console.log(props.currentRouterPath)
  return (
    <div>
      <h2>Admin</h2>
        <PostList postList={props.postList} />
    </div>
  );
}
Admin.propTypes = {
    postList: PropTypes.array,
    currentRouterPath: PropTypes.string
}
export default Admin;
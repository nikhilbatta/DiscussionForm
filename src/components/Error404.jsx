import React from 'React'
import PropTypes from 'prop-types';

function Error404(props){
    return (
      <div>
        <h2>The page {props.location.pathname} does not exist!</h2>
        ...
      </div>
    );
  }
  export default Error404;
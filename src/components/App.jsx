import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import DiscussionBoard from './DiscussionBoard';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleAddingNewPost(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/discussion' render={()=><DiscussionBoard 
            onNewPostCreation={this.handleAddingNewPost} 
            postList={this.state.masterPostList}/>} />
        </Switch>
      </div>
    );
  }

}

export default App;
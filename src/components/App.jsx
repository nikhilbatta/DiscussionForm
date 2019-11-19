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
    this.handleLikes = this.handleLikes.bind(this);
    this.handleDislikes = this.handleDislikes.bind(this);
  }

  handleAddingNewPost(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  handleLikes(i){
    console.log(this.state.masterPostList)
   var copyMList = this.state.masterPostList
   copyMList[i].likes = copyMList[i].likes + 1 
   this.setState({masterPostList: copyMList})
  }
  handleDislikes(i){
    var copyMList = this.state.masterPostList

   copyMList[i].dislikes = copyMList[i].dislikes + 1 
   this.setState({masterPostList: copyMList})
  }


  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/discussion' render={()=><DiscussionBoard 
            onNewPostCreation={this.handleAddingNewPost} 
            postList={this.state.masterPostList}
            onNewLike={this.handleLikes}
            onNewDislike={this.handleDislikes}/>} />
        </Switch>
      </div>
    );
  }

}

export default App;
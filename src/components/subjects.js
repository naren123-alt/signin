import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class subjects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div><h1>Welcome to Java</h1></div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Welcome to React</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Welcome to Spring</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Welcome to Spring Boot</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Java</Tab>
          <Tab>React</Tab>
          <Tab>Spring</Tab>
          <Tab>Spring Boot</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default subjects;

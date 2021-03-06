import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img/>
             <div className="banner-text">
              <h1 className="center">Welcome to BlackBoard</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

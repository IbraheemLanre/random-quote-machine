import React, {Component} from 'react';
import {random} from 'lodash';
import App from './App';
import 'typeface-roboto';
import {Grid} from '@material-ui/core';


const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};


class QuoteMachine extends Component {
  constructor(props){
    super(props);

    this.state = {
      quotes:[],
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex));
  }

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /**
  * Returns as integer representing an index in state.quotes
  * If state.quotes is empty, returns undefined

  */

    generateNewQuoteIndex() {
      //install package loadash as (npm install loadash)
      if(!this.state.quotes.length){
        return;
      }
      return random(0, this.state.quotes.length-1 );
    }

    assignNewQuoteIndex() {
      this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
    }

  render() {

    return (
    <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
      <Grid item>
      <App selectedQuote = {this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
      </Grid>

    </Grid>
  );
  }
}

export default withStyles(styles)(QuoteMachine);

import React from 'react';
import Typography from '@material-ui/core/Typography';



const App = (props) =>  (
    <>
      <h1> Get Inspired with beautiful Quotes </h1>
      {
        props.selectedQuote ?
        (
          <Typography>
             {props.selectedQuote.quote} - {props.selectedQuote.author}
          </Typography>
        ): null
      }
      <button onClick={props.assignNewQuoteIndex}>Get Quote</button>
    </>
  );


export default App;

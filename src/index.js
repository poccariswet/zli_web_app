import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const App = () => (
  <MuiThemeProvider>
    <div>
    <h1>test</h1>
    <RaisedButton label="Default" />
    </div>
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('app'))
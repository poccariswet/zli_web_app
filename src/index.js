import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressCircle from './common/ProgressCircle';
import Header from './common/Header';
import ScheduleItem from './common/ScheduleItem';

const App = () => (
  <MuiThemeProvider>
    <div>
    <Header />
    <ScheduleItem />
    </div>
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('app'))

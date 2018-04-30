import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const ProgressCircle = () => (
  <div style={{
    height:'100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center', 
  }}>
    <CircularProgress />
  </div>
);

export default ProgressCircle;

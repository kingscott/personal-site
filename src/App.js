'use strict';

import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Gallery from './Gallery';
import awsApi from 'Utilities/aws';
require('../assets/styles/index.scss');

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Gallery} />
      <Route path="/:folderName" component={Gallery} />
    </Router>
  );
};

export default App;

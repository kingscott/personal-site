import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Gallery from './Gallery';
import '../assets/styles/index.scss';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Gallery} />
      <Route path="/:folderName" component={Gallery} />
    </HashRouter>
  );
};

export default App;

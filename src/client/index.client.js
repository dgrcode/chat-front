'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout';

window.onload = function () {
  ReactDom.render(
    <Layout/>,
    document.getElementById('root')
  );
};

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { observe } from "./components/InputBoxControl";

observe((sourceNo, targetNo) =>
  ReactDOM.render(
    <App sourceNo={sourceNo} targetNo={targetNo}/>,
    document.getElementById("root")
  )
);
registerServiceWorker();

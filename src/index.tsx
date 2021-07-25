import ReactDOM from 'react-dom';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import 'lib-flexible';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { routesConfig } from './config/RouteConfig';
import Routes from './components/Routes';
import './utils/rem';


ReactDOM.render(
  <Router>
    <Routes routes={routesConfig} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

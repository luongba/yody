import React from 'react'
import ReactDOM from 'react-dom'
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './redux/rootConfig';
import { Provider } from 'react-redux';
import Layout from './components/Layout'
AOS.init();
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)

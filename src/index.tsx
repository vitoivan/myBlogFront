import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { PostsProvider } from './providers/psots';
import './global/global.css'

ReactDOM.render(
  <React.StrictMode>
	  <BrowserRouter>
	  		<PostsProvider>
				<App />
			</PostsProvider>
	  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

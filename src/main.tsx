import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { BlogContextProvider } from './store/blog-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BlogContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</BlogContextProvider>
);

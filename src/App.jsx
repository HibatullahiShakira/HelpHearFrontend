import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ROUTES from './components/router/Router';
import store from './app/store';
import './output.css';

const router = createBrowserRouter([
  ...ROUTES,
]);

function App() {
  return (
    <div className="App"> <RouterProvider router={router} /> </div>
  );
}

export default App;

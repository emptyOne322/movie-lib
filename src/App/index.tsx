import React from 'react';
import '../App.css';
import { RouterProvider } from 'react-router-dom'
import router from '../router'
import { Layout } from './styles'

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;

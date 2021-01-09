import React from 'react'
import { Layout } from './components/Layout'
import { Main } from './components/Main';
import './App.css';

const App = () => {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  )
}

export default App;
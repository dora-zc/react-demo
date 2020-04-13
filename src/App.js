import React from 'react';
import './App.css';
import logo from './logo.svg'
import styles from './app.module.scss'
import ClassComp from './pages/ClassComp.js'
import FuncComp from './pages/FuncComp'

const greeting = <h3>hello, xbl</h3>

const user = { firstName: 'foo', lastName: 'bar' }

const greetingBox = <div>jsx: {greeting}</div>

function formatName(user): string {
  return user.firstName + ' ' + user.lastName
}

let showTitle = false
const title = showTitle ? <h3>xbl</h3> : ''

const arr = [1, 2, 3].map(e => <li key={e}>{e}</li>)

function App() {
  return (
    <div className="App">
      <div>{greeting}</div>
      <div>{formatName(user)}</div>
      <div>{greetingBox}</div>
      <div>{title}</div>
      <p>列表渲染↓</p>
      <ul>{arr}</ul>
      <p>图片引用↓</p>
      <img src={logo} style={{width: 100}} alt="" className={styles.logo}></img>
      <ClassComp></ClassComp>
      <FuncComp></FuncComp>
    </div>
  );
}

export default App;

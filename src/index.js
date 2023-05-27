import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const App = () => {
  let [blockClass, setClassBlock] = React.useState('block')
  let [blockText, setBlockText] = React.useState('modomi')
  let [ulClass, setClassUl] = React.useState('ul')
  let [headerClass, setClassHeader] = React.useState('header')
  let [headerHClass, setClassHeaderH] = React.useState('headerH')
  let [headerText, setHeaderText] = React.useState('Заголовок')

  const headerClick = () =>{
      setClassHeader('header-clicked')
      setClassHeaderH('headerH-clicked')
      setHeaderText('Не заголовок')
  }
  const blockClick = () =>{
      setClassBlock('block-clicked')
      setBlockText('modomiku')
  }
  const ulClick = () =>{
      setClassUl('ul-clicked')
  }
  return (
      <div className="app">
          <div className={headerClass} onClick={headerClick}><h1 className={headerHClass}>{headerText}</h1></div> 
          <div className='container2'>

              <ul className={ulClass} onClick={ulClick}>
                  <li>text1</li>
                  <li>text2</li>
                  <li>text3</li>
                  <li>text4</li>
              </ul>
              <div className={blockClass} onClick={blockClick}>{blockText}</div>
          </div>
      </div>
  )
}
const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
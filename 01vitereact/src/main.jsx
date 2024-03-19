import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {

  return(
    <div>
      <h1>My Custom App</h1> 
    </div>
  )
}



// const reactElement = {
//   type : 'a',
//   props: { 
//       href:'http://www.google.com', 
//       target : '_blank'
//   },
//   children : 'Go to Google!'

// }

const anotherUser = "chai aur react"

const anotherElement = (
  <a href="https://google.com" target='blank'>Go to Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'Go to Google!',
  anotherUser

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)

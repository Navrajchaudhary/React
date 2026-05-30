import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {

  const users = [
    {
      
      img:'https://images.unsplash.com/photo-1655062406430-f47dad378d0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, repudiandae?', 
      tag: 'Satisfied',
      color: "blue"
    },
    {
      
      img:'https://images.unsplash.com/photo-1640244673815-edad4262f4ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdvcmtpbmclMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia excepturi odit error obcaecati repellendus est, debitis ducimus eaque in.', 
      tag: 'UnderSearved',
      color: "lightseagreen"
    },
    {
      img:'https://images.unsplash.com/photo-1595644101020-4d83b3d355f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvcmtpbmclMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia excepturi odit error obcaecati repellendus est, debitis ducimus eaque in.',
      tag: 'UnderBanked',
      color: "black"
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia excepturi odit error obcaecati repellendus est, debitis ducimus eaque in.',
      tag: 'UnderBanked',
      color: "pink"
    },
    {
      img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia excepturi odit error obcaecati repellendus est, debitis ducimus eaque in.',
      tag: 'UnderBanked',
      color: "green"
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}
export default App

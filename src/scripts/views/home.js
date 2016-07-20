import React from 'react'

export default class Home extends React.Component {
  render(){
    return(
      <div id="home" className="home">
        <div className="text-vcenter">
          <h1>TITLE</h1>
          <h3>SUB TITLE</h3>
          <a href="#about" className="btn btn-default btn-lg">Continue</a>
        </div>
      </div>
    )
  }
}

export default Home
import React from 'react'

const Navigation = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Your Brand Name</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-main">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#information">Information</a></li>
              <li><a href="#google_map">Contact</a></li>
              <li><a href="https://www.script-tutorials.com/bootstrap-one-page-template-with-parallax-effect/">Back to tutorial</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

export default Navigation

import React from 'react';

class Footer extends React.Component {


  render(){
    let Boaz = "<BoazBlake/>"

    return(
      <footer>
        <hr />
        <div className="container">
        <p className="text-right" >Copyright &copy; <span><a href="https://boazblake.github.io/portfolio">{Boaz}</a></span> 2016</p>
        </div>
      </footer>
    )
  }
}


export default Footer
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="navbar-header">

                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#home">Link</a>
                        </li>
                        <li>
                            <a href="#home">Link</a>
                        </li>
                    </ul>
                </nav>
                <div className="col-md-12">
                    <h2>Hello to React App</h2>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

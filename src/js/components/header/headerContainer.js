import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPokemon } from '../../actions/searchActions';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(searchPokemon(this.state.text));    
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Pokedex</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
            <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="row">
                  <input type="text" className="form-control" onChange={this.handleChange} value={this.state.text} placeholder="Enter Pokemon Name" />
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </form>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Organize By Type <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    
                  </ul>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

export default connect(mapStateToProps)(Header);


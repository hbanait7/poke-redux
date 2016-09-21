import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchPokemon } from '../../actions/searchActions';
import { fetchType } from '../../actions/dropdownActions';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleType = this.handleType.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(searchPokemon(this.state.text));
    this.context.router.push('/');
    
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleType(e) {
    this.props.dispatch(fetchType(e.target.text));
    this.context.router.push('/');
  }

  render() {
    const types = ['Normal', 'Fire', 'Water', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon'];

    let list = types.map((type, index) => {
      return (
        <li key={index} onClick={this.handleType}>
          <a href="#">{type}</a>
        </li>
      )
    })    

    return (
      <nav className="navbar navbar-default">
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
            
            <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.text} placeholder="Enter Pokemon Name" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Organize By Type <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {list}
                </ul>
              </li>
            </ul>

            
          </div>
        </div>
        {this.props.children}
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


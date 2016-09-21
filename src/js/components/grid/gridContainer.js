import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchAllPokemon } from '../../actions/gridActions';
import { pokemon } from '../../api/pokeApi';


class Grid extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.dispatch(fetchAllPokemon(pokemon))
  }

  render() {

    const { pokemon } = this.props.grid;

    const imgStyle = {
      width: '150px',
      height: '120px',
      marginBottom: '10px'
    }

    const textStyle = {
      textAlign: 'center',
      fontSize: '20px'
    }

    const aTagStyle = {
      textDecoration: 'none'
    }

    const alertStyle = {
      marginTop: '50px',
      textAlign: 'center'
    }  

    const reloadStyle = {
      textDecoration: 'none'
    }  

    let display;

    if (pokemon !== "not found") {
      display = (
        pokemon.map((pokemon, index) => {
          const imgPath = require(`../../api/images/${pokemon.id}.png`);
          return (
            <div key={index} className="col-xs-6 col-md-2">
              <Link style={aTagStyle} to={`/show/${pokemon.id}`} className="thumbnail">
                <img src={imgPath} style={imgStyle} />
                <p style={textStyle}>{pokemon.name}</p>
              </Link>
            </div>
          );
        })
      );
    } else {
      display = (
        <div className="alert alert-danger center-block" role="alert" style={alertStyle} id="alert">
          <strong>Pokemon Not Found, Please Try Again! <a href="#" style={reloadStyle} onClick={this.handleClick}>Reload Pokedex</a></strong>
        </div>
      );      
    }

    return (
      <div id="grid">
        {display}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grid: state.grid
  };
}

export default connect(mapStateToProps)(Grid);
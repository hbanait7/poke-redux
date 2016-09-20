import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Grid extends Component {

  constructor(props) {
    super(props);
  }

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }  

  render() {

    const { pokemon } = this.props.grid;

    {console.log(this.props.search)}

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

    return (
      <div>
        {pokemon.map((pokemon, index) => {
          const imgPath = require(`../../api/images/${pokemon.id}.png`);
          return (
            <div key={index} className="col-xs-6 col-md-2">
              <Link style={aTagStyle} className="thumbnail">
                <img src={imgPath} style={imgStyle} />
                <p style={textStyle}>{pokemon.url}</p>
                <p style={textStyle}>{this.capitalize(pokemon.name)}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grid: state.grid,
    search: state.search
  };
}

export default connect(mapStateToProps)(Grid);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pokemonLink } from '../../actions/linkActions';
import Bar from './bar';

class Show extends Component {
  
  constructor(props) {
    super(props)

  };

  componentWillMount() {
    this.props.dispatch(pokemonLink(this.props.params.id))
  }

  render() {

    const imgStyle = {
      width: '200px',
      height: '200px',
      display: 'block',
      margin: '0px auto'
    } 

    const commonStyle = {
      textAlign: 'center',
      fontSize: '30px',
      marginBottom: '20px'
    }

    const btnStyle = {
      margin: '0px 5px'
    }

    const typeStyle = {
      margin: '0px auto'
    }

    const typeFont = {
      fontSize: '20px'
    }

    const typeMrgnBtn = {
      marginBottom: '20px'
    }

    let display;

    const { pokemon } = this.props.link;
    
    if (pokemon !== null) {

      let types;

      if (pokemon.type.length > 1) {
        types = (
          <div className="text-center" style={typeMrgnBtn}>
            <span style={typeFont}>Types:</span>
            <button type="button" className="btn btn-default disabled" style={btnStyle}>{pokemon.type[0]}</button>
            <button type="button" className="btn btn-default disabled">{pokemon.type[1]}</button>
          </div>
        ) 
      } else {
        types = (
          <div className="text-center" style={typeMrgnBtn}>
            <span style={typeFont}>Type:</span>
            <button type="button" className="btn btn-default disabled" style={btnStyle}>{pokemon.type[0]}</button>
          </div>
        )
      }
      
      const imgPath = require(`../../api/images/${pokemon.id}.png`);

      display = (
        <div>
          <div className="col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
            <div>
              <img src={imgPath} style={imgStyle}/>
            </div>
            <div style={commonStyle}>
              {pokemon.name}
            </div>
            <div style={commonStyle}>
              Pokemon #: {pokemon.id}
            </div>
            <div>
              {types}
            </div>
            <div style={commonStyle}>
              {pokemon.description}
            </div>
          </div>
          <div className="col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
            <Bar stats={pokemon.stats}  />
          </div>
        </div>
      );      
    }

    return (
      <div>
        {display}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    link: state.link
  }
}

export default connect(mapStateToProps)(Show);
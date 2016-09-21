import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pokemonLink } from '../../actions/linkActions';

class Show extends Component {
  
  constructor(props) {
    super(props)
  };

  componentWillMount() {
    this.props.dispatch(pokemonLink(this.props.params.id))
  }

  render() {

    const mediaBodyStyle = {
      marginTop: '100px',
      marginBottom: '30px'
    }

    const headerStyle = {
      textAlign: 'center',
      marginBottom: '30px'
    }

    const imgDiv = {
      textAlign: 'center'
    }

    const imgStyle = {
      width: '200px',
      height: '200px',
    }   

    let display;

    const { pokemon } = this.props.link;
    
    if (pokemon !== null) {
      const imgPath = require(`../../api/images/${pokemon.id}.png`);
      display = (
        <div className="container">
            <div className="col-sm-12">
              <div className="col-sm-3">
                <img src={imgPath} />
              </div>
              <div className="col-sm-7 well margin-well">
                <p>
                  hello
                </p>
              </div>
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
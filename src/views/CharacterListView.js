import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getChar} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
    
  }

  componentDidMount() {
    this.props.getChar()
  }

  render() {
    if (this.props.fetching) {
      return (
        <h1>Fetching Data</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
})

export default connect(
  mapStateToProps,
  {getChar})
  (CharacterListView);

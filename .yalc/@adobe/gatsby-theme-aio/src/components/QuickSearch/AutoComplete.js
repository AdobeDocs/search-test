/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';
import './AutoComplete.css';

class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired
  };

  state = {
    value: this.props.currentRefinement
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  handleSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.contentHeading;
  }

  renderSuggestion(hit) {
    return (
      <a className="result-links" href={'/'}>
        <Highlight attribute="contentHeading" hit={hit} tagName="mark" />
      </a>
    );
  }

  renderSectionTitle(section) {
    return section.index;
  }

  getSectionSuggestions(section) {
    return section.hits;
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Search for a product...',
      onChange: this.onChange,
      value
    };

    return (
      <AutoSuggest
        suggestions={hits}
        multiSection={true}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
      />
    );
  }
}

export default connectAutoComplete(AutoComplete);

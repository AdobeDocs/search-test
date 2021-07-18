/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { Configure, Index, InstantSearch } from 'react-instantsearch-dom';
import AutoComplete from './AutoComplete';

const searchClient = algoliasearch('E642SEDTHL', '36561fc0f6d8f1ecf996bc7bf41af00f');

const QuickSearch = () => (
  <InstantSearch indexName="uxp-photoshop" searchClient={searchClient}>
    <Configure hitsPerPage={6} />
    <AutoComplete
      onSuggestionSelected={(_event, { suggestion, suggestionValue }) => {
        console.log('Suggestion:', suggestion);
        console.log('Suggestion value:', suggestionValue);
      }}
    />

    <Index indexName="uxp-photoshop" />
    <Index indexName="devdocs" />
  </InstantSearch>
);

export default QuickSearch;

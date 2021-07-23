/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { useContext } from 'react';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch/lite';

import { Tabs, Item as TabsItem, Label as TabsItemLabel } from '../Tabs';
import Context from '../Context';
import SearchResult from './SearchResult';

import {
  InstantSearch,
  Index,
  Panel,
  Hits,
  Highlight,
  Snippet,
  RefinementList,
  HitsPerPage,
  Stats,
  Pagination,
  ClearRefinements,
  Configure
} from 'react-instantsearch-dom';

import { NoResults } from '../SearchWidgets';
import { css } from '@emotion/react';
import 'instantsearch.css/themes/satellite.css';
import './index.css';
import '@spectrum-css/textfield';
import '@spectrum-css/search';
import '@spectrum-css/button';
import { AutoComplete } from './AutoComplete';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';

const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: 'adobeio-developer-docs-search'
});

const APP_ID = process.env.ALGOLIA_APP_ID;
const SEARCH_KEY = process.env.ALGOLIA_SEARCH_API_KEY;
const searchClient = algoliasearch('E642SEDTHL', '36561fc0f6d8f1ecf996bc7bf41af00f');

const Hit = ({ hit }) => {
  return (
    <a className="aa-ItemLink" href={hit.url}>
      <div className="aa-ItemContent">
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <Highlight attribute="title" hit={hit} />
          </div>
          <div className="aa-ItemContentDescription">
            <Snippet hit={hit} attribute="content" />
          </div>
        </div>
      </div>
      <div className="aa-ItemActions">
        <button className="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly" type="button" title="Select">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z" />
          </svg>
        </button>
      </div>
    </a>
  );
};

export const SearchPage = (props) => {
  const { siteMetadata } = useContext(Context);

  return (
    <InstantSearch
      indexName="uxp-photoshop"
      searchClient={searchClient}
      searchState={props.searchState}
      createURL={props.createURL}
      onSearchStateChange={props.onSearchStateChange}>
      <Configure
        attributesToSnippet={['description:10']}
        snippetEllipsisText="…"
        removeWordsIfNoResults="allOptional"
      />
      <Index indexName="uxp-photoshop" />
      <SearchHeader />
      <div className="search-results-main">
        <SearchIndexes />
        <hr className="horizontal-line" />
        <SearchStats />
        <div className="search-results">
          <SearchResults />
          <hr className="vertical-line" />
          <SearchFilters />
        </div>
        <SearchFooter />
      </div>
    </InstantSearch>
  );
};

const SearchHeader = () => (
  <header className="search-header ">
    <div className="search-header-inner">
      <AutoComplete
        placeholder="Search..."
        plugins={[recentSearchesPlugin]}
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: 'photoshop',
            getItemUrl({ item }) {
              return item.url;
            },
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'photoshop',
                    query,
                    params: {
                      hitsPerPage: 5
                    }
                  }
                  // {
                  //   indexName: 'illustrator',
                  //   query,
                  //   params: {
                  //     hitsPerPage: 5
                  //   }
                  // },
                  // {
                  //   indexName: 'xd',
                  //   query,
                  //   params: {
                  //     hitsPerPage: 5
                  //   }
                  // }
                ]
              });
            },
            templates: {
              item({ item, components }) {
                return <SearchResult hit={item} components={components} />;
              }
            }
          }
        ]}
      />
      <HitsPerPage
        items={[
          {
            label: '20 hits per page',
            value: 20
          },
          {
            label: '32 hits per page',
            value: 40
          },
          {
            label: '64 hits per page',
            value: 60
          }
        ]}
        defaultRefinement={20}
      />
    </div>
  </header>
);

const SearchIndexes = () => (
  <section className="search-main-indexes">
    <Tabs
      css={css`
        padding-bottom: 0;
        margin-top: 0;
      `}>
      <TabsItem>
        <TabsItemLabel>
          <strong>Photoshop</strong>
        </TabsItemLabel>
      </TabsItem>
      <TabsItem>
        <TabsItemLabel>Area for index tabs</TabsItemLabel>
      </TabsItem>
    </Tabs>
  </section>
);

const SearchStats = () => (
  <section className="search-stats">
    <Stats />
  </section>
);

const SearchResults = () => (
  <section className="search-results">
    <Hits hitComponent={Hit} />
    <NoResults />
  </section>
);

const SearchFilters = () => (
  <aside className="search-filters">
    <Panel header="Filters">
      <ClearRefinements translations={{ reset: 'Clear all filters' }} />
      <RefinementList attribute="keywords" operator="and" />
    </Panel>
  </aside>
);

const SearchFooter = () => (
  <footer className="search-footer">
    <Pagination showLast={true} />
  </footer>
);

export default SearchPage;

import { AutoComplete } from '../AutoComplete';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import SearchResult from '../SearchResult';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import algoliasearch from 'algoliasearch/lite';
import { HitsPerPage } from 'react-instantsearch-dom';
import Context from '../../Context';
import { useContext } from 'react';

// TODO: Remove these stylesheets when styling everything with Spectrum
import 'instantsearch.css/themes/satellite.css';
import '../../SearchPage/index.css';

// TODO: Replace these with .env variables
const searchClient = algoliasearch('E642SEDTHL', '36561fc0f6d8f1ecf996bc7bf41af00f');

const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: 'adobeio-developer-docs-search'
});

const SearchHeader = () => {
  const { siteMetadata } = useContext(Context);

  return (
    <header className="search-header ">
      <div className="search-header-inner">
        <AutoComplete
          placeholder="Search..."
          plugins={[recentSearchesPlugin]}
          openOnFocus={true}
          getSources={({ query }) => [
            {
              sourceId: 'search-test',
              getItemUrl({ item }) {
                return item.url;
              },
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: siteMetadata.searchIndex,
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
};

export default SearchHeader;

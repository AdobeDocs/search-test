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

import React, { useRef, useEffect, useState, createRef } from 'react';
import { css } from '@emotion/react';
import { ADOBEIO_ALGOLGIA_INDEXES } from '../../../../conf/globals';
import { Tabs, Item as TabsItem, Label as TabsItemLabel, TabsIndicator, positionIndicator } from '../../Tabs';
import {
  Configure,
  Highlight,
  Hits,
  Index,
  Snippet,
  SearchStats,
  Stats,
  Panel,
  ClearRefinements,
  RefinementList,
  Pagination
} from 'react-instantsearch-dom';
import { withPrefix } from 'gatsby';

import 'instantsearch.css/themes/satellite.css';
import '../index.css';

const SearchIndexes = ({ indexName }) => {
  const [tabs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState({
    tab: 0
  });
  const selectedTabIndicator = useRef(null);

  const positionSelectedTabIndicator = (index = selectedIndex.tab) => {
    const selectedTab = tabs.filter((tab) => tab.current)[index];
    positionIndicator(selectedTabIndicator, selectedTab);
  };

  useEffect(() => {
    positionSelectedTabIndicator();
  }, [tabs]);

  const Hit = ({ hit }) => {
    return (
      <div>
        <a className="hit-title" href={hit.absoluteUrl}>
          <Highlight attribute="title" hit={hit} />
        </a>
        <p className="hit-full-path">{hit.url}</p>
        <p className="hit-description">
          <Highlight attribute="content" hit={hit} />
        </p>
      </div>
    );
  };

  const SearchStats = () => (
    <section className="search-stats">
      <Stats />
    </section>
  );

  const SearchResults = () => (
    <section className="search-results">
      <Hits hitComponent={Hit} />
    </section>
  );

  const SearchFilters = () => (
    <aside className="search-filters">
      <Panel header="Filters">
        <ClearRefinements translations={{ reset: 'Clear all filters' }} />
        <RefinementList attribute="keywords" />
      </Panel>
    </aside>
  );

  const SearchFooter = () => (
    <footer className="search-footer">
      <Pagination showLast={true} />
    </footer>
  );

  let docIndexes = [];
  // Add current site's index as first tab, followed by sibling index tabs
  ADOBEIO_ALGOLGIA_INDEXES.map((index, i) => {
    if (index === indexName) {
      docIndexes.unshift({ indexName });
    } else {
      docIndexes.push({ indexName: index });
    }
  });

  return (
    <div
      css={css`
        display: flex;
        margin: var(--spectrum-global-dimension-size-400) 0;
        border-top-left-radius: var(--spectrum-global-dimension-size-50);
        border-top-right-radius: var(--spectrum-global-dimension-size-50);
      `}>
      <div
        css={css`
          display: flex;
          height: 100%;
        `}>
        <Tabs
          css={css`
            padding-left: var(--spectrum-global-dimension-size-200);
            box-sizing: border-box;
          `}
          isVertical={true}
          onFontsReady={positionSelectedTabIndicator}>
          {docIndexes.map(({ indexName }, index) => {
            const ref = createRef();
            tabs.push(ref);

            const isSelected = selectedIndex.tab === index;

            return (
              <TabsItem
                key={index}
                ref={ref}
                selected={isSelected}
                tabIndex={0}
                onClick={() => {
                  const index = tabs.filter((tab) => tab.current).indexOf(ref);
                  setSelectedIndex({
                    tab: index
                  });
                  positionSelectedTabIndicator(index);
                }}>
                <TabsItemLabel>{indexName}</TabsItemLabel>
              </TabsItem>
            );
          })}
          <TabsIndicator ref={selectedTabIndicator} />
        </Tabs>
      </div>
      <div className="search-results-main">
        {docIndexes.map((docIndex, index) => (
          <div css={css``} hidden={!(selectedIndex.tab === index)}>
            <Index indexName={docIndex.indexName}>
              <SearchStats />
              <div className="search-results">
                <SearchResults />
                <hr className="vertical-line" />
                <SearchFilters />
              </div>
              <SearchFooter />
            </Index>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchIndexes;
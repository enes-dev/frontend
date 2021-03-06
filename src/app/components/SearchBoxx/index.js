import React from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import { SearchBox, InstantSearch } from 'react-instantsearch-dom'

const Search = styled.div`
  display: flex;
  width: 400px;
  height: 480px;
  border: 1px solid black;
  margin: 0 48px 0 0;
`

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_KEY_ONE,
  process.env.REACT_APP_ALGOLIA_KEY_TWO
)

const SearchBoxx = () => {
  return (
    <Search>
      <InstantSearch indexName="repository" searchClient={searchClient}>
        <SearchBox />
      </InstantSearch>
    </Search>
  )
}
export default SearchBoxx

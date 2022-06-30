import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import Filters from '../Filters';
import AppliedFilters from '../Filters/appliedFilters';
import SortColumn from '../Filters/SortColumns';

export default function Menu() {
  const { filters, setFilters } = useContext(PlanetsContext);

  return (
    <menu>
      <label htmlFor="input-search">
        Search
        <input
          type="text"
          id="input-search"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ ({ target }) => setFilters(
            { ...filters, filterByName: { name: target.value } },
          ) }
        />
      </label>
      <br />
      <Filters />
      <AppliedFilters />
      <SortColumn />
    </menu>
  );
}

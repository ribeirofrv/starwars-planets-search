import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function SortColumn() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [columnToSort, setColumnToSort] = useState('');
  const [sortingOption, setSortingOption] = useState('');
  console.log(sortingOption);

  const optionsToSort = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const sortColumn = () => {
    setFilters({
      ...filters,
      order: { column: columnToSort, sort: sortingOption },
    });
  };

  return (
    <section>
      <label htmlFor="column-sort">
        Order
        <select
          data-testid="column-sort"
          id="column-sort"
          onChange={ ({ target }) => setColumnToSort(target.value) }
        >
          {optionsToSort.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        <input
          type="radio"
          value="ASC"
          name="column-sort-input"
          id="column-sort-input-asc"
          data-testid="column-sort-input-asc"
          checked={ sortingOption === 'ASC' }
          onChange={ () => setSortingOption('ASC') }
        />
        Ascendent
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          type="radio"
          value="DESC"
          name="column-sort-input"
          id="column-sort-input-desc"
          data-testid="column-sort-input-desc"
          checked={ sortingOption === 'DESC' }
          onChange={ () => setSortingOption('DESC') }
        />
        Descendent
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => sortColumn() }
      >
        Sort
      </button>
    </section>
  );
}

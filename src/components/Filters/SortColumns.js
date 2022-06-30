import React, { useState } from 'react';
// import PlanetsContext from '../../context/PlanetsContext';

export default function SortColumn() {
  const [initialFilter, setinitialFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const { columnToSort, setColumnToSort } = useState('');
  console.log('Sort Column:', columnToSort);

  return (
    <section>
      <label htmlFor="column-sort">
        Order
        <select
          data-testid="column-sort"
          id="column-sort"
          onChange={ ({ target }) => setColumnToSort(target.value) }
        >
          {initialFilter.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="column-sort-input-asc">
          <input
            type="radio"
            value="ASC"
            id="column-sort-input-asc"
            data-testid="column-sort-input-asc"
          />
          Ascendent
        </label>
        <label htmlFor="column-sort-input-desc">
          <input
            type="radio"
            value="DESC"
            id="column-sort-input-desc"
            data-testid="column-sort-input-desc"
          />
          Descendent
        </label>
      </label>
    </section>
  );
}

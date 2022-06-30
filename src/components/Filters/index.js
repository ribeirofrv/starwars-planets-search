import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function Filters() {
  const {
    optionsToFilter,
    setOptionsToFilter,
    filters,
    setFilters,
  } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const [initialFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const applyFilters = async () => {
    /** Prevent duplicata from filters */
    const duplicate = initialFilter.findIndex(
      (filterName) => column === filterName,
    );
    initialFilter.splice(duplicate, 1);

    setOptionsToFilter([...optionsToFilter, { column, comparison, value }]);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value }],
    });
    setColumn(initialFilter[0]);
  };

  return (
    <section>
      <label htmlFor="column-filter">
        Column
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {initialFilter.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
          value={ value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => applyFilters() }
      >
        Apply Filter
      </button>
    </section>
  );
}

import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function Filters() {
  const {
    optionsToFilter,
    setOptionsToFilter } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const saveFilters = () => {
    setOptionsToFilter([...optionsToFilter, { column, comparison, value }]);
  };

  return (
    <>
      <label htmlFor="column-filter">
        Column
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
        type="submit"
        data-testid="button-filter"
        onClick={ () => saveFilters() }
      >
        Apply Filter
      </button>
    </>
  );
}

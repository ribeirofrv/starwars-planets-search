import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function MenuSearch() {
  const {
    data,
    nameToFilter,
    setNameToFilter,
    setPlanetsInfo } = useContext(PlanetsContext);

  const handleInputSearch = ({ value }) => {
    setNameToFilter(value);
    const filterByName = data.filter(
      ({ name }) => name.toUpperCase().includes(value.toUpperCase()),
    );
    setPlanetsInfo(filterByName);
  };

  return (
    <menu>
      <label htmlFor="input-search">
        Search
        <input
          type="text"
          id="input-search"
          data-testid="name-filter"
          value={ nameToFilter }
          onChange={ ({ target }) => handleInputSearch(target) }
        />
      </label>
      <br />
      <label htmlFor="input-filter-column">
        Column
        <select>
          <option value="population">Population</option>
        </select>
      </label>
    </menu>
  );
}

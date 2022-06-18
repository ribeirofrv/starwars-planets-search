import React from 'react';

export default function MenuSearch() {
  return (
    <menu>
      <label htmlFor="input-search">
        Search
        <input type="text" id="input-search" />
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

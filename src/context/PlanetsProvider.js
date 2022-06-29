import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import fetchResponse from '../testData';

const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets';

export default function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const [optionsToFilter, setOptionsToFilter] = useState([]);

  const [initialFilter, setinitialFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  useEffect(() => {
    const getPlanetsInfo = async () => {
      try {
        const response = await fetch(URL_API);
        const { results } = await response.json();

        setData(results);
        setPlanetsInfo(results);
      } catch (error) {
        console.log(error);
        global.alert('Ooops! Something went wrong :(');
      }
    };
    getPlanetsInfo();
  }, []);

  useEffect(() => {
    const filterByName = data.filter(({ name: planetName }) => planetName.toUpperCase()
      .includes(filters.filterByName.name.toUpperCase()));

    const filterByNumbers = optionsToFilter.reduce(
      (filter, currentFilter) => filter.filter((planet) => {
        switch (currentFilter.comparison) {
        case 'maior que':
          return planet[currentFilter.column] > +(currentFilter.value);

        case 'menor que':
          return planet[currentFilter.column] < +(currentFilter.value);

        case 'igual a':
          return +(planet[currentFilter.column]) === +(currentFilter.value);

        default:
          return filterByName; // prevenção?! ~~this is gambiarra...
        }
      }),
      filterByName,
    );

    setPlanetsInfo(filterByNumbers);
  }, [filters.filterByName.name, optionsToFilter]);

  const contextValue = {
    data,
    planetsInfo,
    setPlanetsInfo,
    filters,
    setFilters,
    optionsToFilter,
    setOptionsToFilter,
    initialFilter,
    setinitialFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

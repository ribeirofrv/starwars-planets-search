import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets';
const MINUS_ONE = -1;

export default function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'population',
      sort: 'ASC',
    },
  });

  const [optionsToFilter, setOptionsToFilter] = useState([]);

  useEffect(() => {
    const getPlanetsInfo = async () => {
      try {
        const response = await fetch(URL_API);
        const { results } = await response.json();

        setData(results);
      } catch (error) {
        console.log(error);
        global.alert('Ooops! Something went wrong :(');
      }
    };
    getPlanetsInfo();
  }, []);

  useEffect(() => {
    const sortedData = data.sort((first, second) => {
      const firstPlanet = first.name.toUpperCase();
      const secondPlanet = second.name.toUpperCase();

      if (firstPlanet < secondPlanet) return MINUS_ONE;
      if (firstPlanet > secondPlanet) return 1;

      return 0;
    });

    setPlanetsInfo(sortedData);
  }, [data]);

  useEffect(() => {
    const filterByName = data.filter(
      ({ name: planetName }) => planetName.toUpperCase()
        .includes(filters.filterByName.name.toUpperCase()),
    );

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
          return filterByName; // ~~this is gambiarra...
        }
      }),
      filterByName,
    );

    setPlanetsInfo(filterByNumbers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByName.name, optionsToFilter]);

  useEffect(() => {
    const sortTablePlanets = (column, order) => {
      const sorted = column
        .sort((first, second) => first[order.column] - second[order.column]);

      if (order.sort === 'ASC') return setPlanetsInfo(sorted);
      console.log(filters.order);
      // return setPlanetsInfo(sorted.reverse());
    };

    sortTablePlanets(planetsInfo, filters.order);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.order]);

  const contextValue = {
    data,
    planetsInfo,
    setPlanetsInfo,
    filters,
    setFilters,
    optionsToFilter,
    setOptionsToFilter,
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

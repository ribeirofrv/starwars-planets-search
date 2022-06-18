import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets';

export default function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanetsInfo = async () => {
      try {
        const response = await fetch(URL_API);
        const { results } = await response.json();

        setData(results);
      } catch (error) {
        console.log(error); // todo something
      }
    };
    getPlanetsInfo();
  }, []);

  const contextValue = { data };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

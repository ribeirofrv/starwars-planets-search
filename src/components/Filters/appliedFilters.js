import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function AppliedFilters() {
  const { filters } = useContext(PlanetsContext);
  console.log(filters.filterByNumericValues);

  return (
    <section>
      {filters.filterByNumericValues
        && filters.filterByNumericValues.map(
          (
            { column: chosenColumn,
              comparison: chosenComparison,
              value: chosenValue,
            },
            position,
          ) => (
            <span key={ `${chosenColumn}-${position}` }>
              {`${chosenColumn} ${chosenComparison} ${chosenValue}`}
              <button
                type="button"
                onClick={ () => deleteFilter() }
              >
                X
              </button>
            </span>
          ),
        )}
    </section>
  );
}

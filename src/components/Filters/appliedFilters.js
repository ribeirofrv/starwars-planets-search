import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function AppliedFilters() {
  const { filters, optionsToFilter, setOptionsToFilter } = useContext(PlanetsContext);

  const deleteFilter = (column) => {
    setOptionsToFilter(optionsToFilter
      .filter((filter) => !filter.includes(column)));
  };

  return (
    <section>
      {filters.filterByNumericValues
        && optionsToFilter.map(
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
                onClick={ () => deleteFilter(chosenColumn) }
              >
                X
              </button>
            </span>
          ),
        )}
    </section>
  );
}

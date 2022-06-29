import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function AppliedFilters() {
  const { optionsToFilter, setOptionsToFilter } = useContext(PlanetsContext);

  const deleteFilter = (column) => {
    setOptionsToFilter(optionsToFilter
      .filter((filter) => filter.column !== column));
  };

  return (
    <section>
      {optionsToFilter.map(
        (
          { column: chosenColumn,
            comparison: chosenComparison,
            value: chosenValue,
          },
          position,
        ) => (
          <span data-testid="filter" key={ `${chosenColumn}-${position}` }>
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
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setOptionsToFilter([]) }
      >
        Remove Filters
      </button>
    </section>
  );
}

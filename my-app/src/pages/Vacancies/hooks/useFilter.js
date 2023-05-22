import React, {useContext} from 'react';
import {FilterContext} from "@pages/Vacancies/index.js";

export const useFilter = () => {
  const {filter, setFilter} = useContext(FilterContext);

  const resetFilter = () => {
    const updatedFilter = {...filter}

    Object.keys(updatedFilter).forEach(key => updatedFilter[key] = "");

    setFilter(updatedFilter)
  }

  const updateFilter = (key, value) => {
    const updatedFilter = {...filter, [key]: value}

    setFilter(updatedFilter)
  }

  return {
    filter, updateFilter, resetFilter
  }
};

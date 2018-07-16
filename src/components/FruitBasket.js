import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback}) =>
  <div className="fruit-basket">
    <Filter handleChange={updateFilterCallback} />
    <FilteredFruitList filter={currentFilter} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

export default FruitBasket;

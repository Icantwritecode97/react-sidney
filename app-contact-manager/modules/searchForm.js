import { findContact } from './query.js';

const searchForm = document.querySelector('.search-form');
//  search-form input[name="q"]

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget este elementul pe care am rulat
  // addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;

  findContact(queryInput.value);

  queryInput.value = '';
});

export default searchForm;

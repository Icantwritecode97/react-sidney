import { addMessage } from './notificationBar.js';
import { findContact } from './query.js';
// ommit {} for default exports
import render from './message.js';
import { pluralize } from './utils.js';

const searchForm = document.querySelector('.search-form');
//  search-form input[name="q"]

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget este elementul pe care am rulat
  // addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;

  const contacts = findContact(queryInput.value.toLowerCase());
  const contactsCount = contacts.length;

  if (contactsCount <= 0) {
    addMessage(render('No contacts found.', 'warning'));
  } else {
    addMessage(
      render(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })}.`,
        'success',
      ),
    );
  }

  queryInput.value = '';
});

export default searchForm;

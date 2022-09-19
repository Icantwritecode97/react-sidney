const stage = document.querySelector('.stage');

// delete contact
stage.addEventListener('click', (event) => {
  // target, elementul de pecare a plecat evenimentul
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('delete-friend')
  ) {
    return;
  }

  alert('delete friend');
});

export default stage;

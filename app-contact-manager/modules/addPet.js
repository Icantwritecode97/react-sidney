export const render = () => {
  const container = document.createElement('form');
  container.classList.add('add-pet');

  container.innerHTML = `
    <h4>Add a new pet for whom???</h4>

    <label class="form-label mt-2">Name</label>
    <input type="text" name="name" class="form-control form-control-sm">

    <label class="form-label mt-2">Species</label>
    <input type="text" name="species" class="form-control form-control-sm">

    <label class="form-label mt-2">Age</label>
    <input type="text" name="age" class="form-control form-control-sm">

    <button type="submit" class="btn btn-secondary me-1" title="Save">Save</button>
    <button type="button" class="cancel-button btn btn-secondary" title="Cancel">Cancel</button>
  `;

  return container;
};

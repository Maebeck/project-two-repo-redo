const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#jets-name').value.trim();
    const description = document.querySelector('#jets-description').value.trim();
    if (name && description) {
      const response = await fetch(`/api/jets`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create jets');
      }
    }
  };
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/jets/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete jets');
      }
    }
  };
  document
    .querySelector('.new-jet-form')
    .addEventListener('submit', newFormHandler);
  document
    .querySelector('.jet-list')
    .addEventListener('click', delButtonHandler);
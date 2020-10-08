const locations = document.querySelector('.location')

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render location data
const renderLocation = (data, id) => {

   const html = `
    <div class="card-panel recipe white row" data-id="${id}">
      <img src="/img/147171.png" alt="recipe thumb">
      <div class="full_location">
        <div class="location-title">${data.location}</div>
        <div class="location-ingredients">${data.description}</div>
      </div>
      <div class="location-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
   `;

  locations.innerHTML += html;

};
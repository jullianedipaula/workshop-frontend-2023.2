
const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', () => {
  const personagem = Math.floor(Math.random() * 83) + 1;
  
  const siteApi = `https://swapi.dev/api/people/${personagem}/`;

  fetch(siteApi)
    .then(res => res.json())
    .then(data => {
      document.getElementById('name').innerHTML = data.name;
      document.getElementById('mass').innerHTML = data.mass;
      document.getElementById('hair_color').innerHTML = data.hair_color;
      document.getElementById('skin_color').innerHTML = data.skin_color;
      document.getElementById('eye_color').innerHTML = data.eye_color;
      document.getElementById('birth_year').innerHTML = data.birth_year;
      document.getElementById('gender').innerHTML = data.gender;
    })
    .catch(error => {
      console.error('ERROR', error);
    });
});

  
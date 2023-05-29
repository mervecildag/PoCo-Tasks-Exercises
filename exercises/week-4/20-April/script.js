// Profile data
const profiles = [
    {
      name: 'John Doe',
      age: 25,
      eyeColor: 'blue',
      hobby: 'playing guitar',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Jane Smith',
      age: 30,
      eyeColor: 'brown',
      hobby: 'reading',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Mike Johnson',
      age: 22,
      eyeColor: 'green',
      hobby: 'painting',
      image: 'https://via.placeholder.com/100'
    }
  ];
  
  // Create profile cards dynamically
  const profilesContainer = document.getElementById('profiles-container');
  profiles.forEach(profile => {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    profileCard.innerHTML = `
      <img src="${profile.image}" alt="${profile.name}">
      <h2>${profile.name}</h2>
      <p>Age: ${profile.age}</p>
      <p>Eye Color: ${profile.eyeColor}</p>
      <p>Hobby: ${profile.hobby}</p>
      <p class="info">More info about ${profile.name}</p>
    `;
    profilesContainer.appendChild(profileCard);
  
    // Add interactions to profile cards
    profileCard.addEventListener('mouseover', () => {
      profileCard.style.backgroundColor = 'lightgray';
      profileCard.style.cursor = 'pointer';
    });
  
    profileCard.addEventListener('mouseout', () => {
      profileCard.style.backgroundColor = '';
      profileCard.style.cursor = '';
    });
  
    profileCard.addEventListener('click', () => {
      const info = profileCard.querySelector('.info');
      info.style.display = info.style.display === 'none' ? 'block' : 'none';
    });
  });
  
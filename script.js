document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const form = document.getElementById('styleForm');
    const vibeSelect = document.getElementById('vibe');
    const genderSelect = document.getElementById('gender');
    const driverSelect = document.getElementById('driver');
    const teamColorInput = document.getElementById('teamColor');
    const colorSwatch = document.getElementById('colorSwatch');
    const shirtPreview = document.getElementById('shirtPreview');
    const resultDiv = document.getElementById('result');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.getElementById('modalClose');
    const raceInfoBtn = document.getElementById('raceInfoBtn');
    const shareBtn = document.getElementById('shareBtn');
    const saveOutfitBtn = document.getElementById('saveOutfitBtn');
    const viewWardrobeBtn = document.getElementById('viewWardrobeBtn');
    const recentOutfitsBtn = document.getElementById('recentOutfitsBtn');
    const randomBtn = document.getElementById('randomBtn');
    const loadingSpinner = document.getElementById('loading');

    // Validate DOM elements
    if (!form || !vibeSelect || !genderSelect || !driverSelect || !teamColorInput || !colorSwatch || !shirtPreview || !resultDiv || !modal || !modalTitle || !modalDescription || !modalClose || !raceInfoBtn || !shareBtn || !saveOutfitBtn || !viewWardrobeBtn || !recentOutfitsBtn || !randomBtn || !loadingSpinner) {
      console.error('One or more DOM elements are missing. Check index.html.');
      return;
    }

    // Load saved preferences
    vibeSelect.value = localStorage.getItem('vibe') || 'monaco';
    genderSelect.value = localStorage.getItem('gender') || 'male';
    driverSelect.value = localStorage.getItem('driver') || 'none';
    teamColorInput.value = localStorage.getItem('teamColor') || '#ff0000';
    colorSwatch.style.backgroundColor = teamColorInput.value;
    shirtPreview.style.backgroundColor = teamColorInput.value;

    // Update color swatch and shirt preview
    teamColorInput.addEventListener('input', function() {
      colorSwatch.style.backgroundColor = teamColorInput.value;
      shirtPreview.style.backgroundColor = teamColorInput.value;
    });

    // Fisher-Yates shuffle algorithm
    function shuffle(array) {
      const newArray = [...array]; // Create a copy to avoid modifying the original
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
      return newArray;
    }

    // Initialize color shuffling
    let colors = Object.keys(teamColors);
    let shuffledColors = shuffle(colors);
    let colorIndex = 0;

    // Random outfit generator with shuffled colors
    randomBtn.addEventListener('click', function() {
      const vibes = Object.keys(outfits);
      const genders = ['male', 'female', 'other'];
      const drivers = Object.keys(driverStyles).concat('none');

      // Shuffle vibes, genders, and drivers
      const shuffledVibes = shuffle(vibes);
      const shuffledGenders = shuffle(genders);
      const shuffledDrivers = shuffle(drivers);

      // Select the next vibe, gender, and driver
      vibeSelect.value = shuffledVibes[0];
      genderSelect.value = shuffledGenders[0];
      driverSelect.value = shuffledDrivers[0];

      // Select the next color from the shuffled list
      if (colorIndex >= shuffledColors.length) {
        // Reshuffle when all colors have been used
        shuffledColors = shuffle(colors);
        colorIndex = 0;
      }
      const newColor = shuffledColors[colorIndex];
      colorIndex++;

      teamColorInput.value = newColor;
      teamColorInput.dispatchEvent(new Event('input')); // Trigger input event
      // Fallback for browser quirks
      colorSwatch.style.backgroundColor = newColor;
      shirtPreview.style.backgroundColor = newColor;
      form.dispatchEvent(new Event('submit'));
    });

    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      loadingSpinner.style.display = 'block';
      resultDiv.innerHTML = '';
      resultDiv.classList.remove('zoom-in'); // Reset animation
      void resultDiv.offsetWidth; // Trigger reflow for animation restart

      // Clear previous errors
      const vibeError = document.getElementById('vibeError') || document.createElement('span');
      vibeError.id = 'vibeError';
      vibeError.className = 'error';
      vibeSelect.parentNode.appendChild(vibeError);
      const genderError = document.getElementById('genderError') || document.createElement('span');
      genderError.id = 'genderError';
      genderError.className = 'error';
      genderSelect.parentNode.appendChild(genderError);
      vibeError.textContent = '';
      genderError.textContent = '';

      setTimeout(() => {
        const vibe = vibeSelect.value;
        const gender = genderSelect.value;
        const driver = driverSelect.value;
        const teamColor = teamColorInput.value;
        const colorName = teamColors[teamColor] || 'Custom Color';
        const randomAccessory = accessories[Math.floor(Math.random() * accessories.length)];
        const weather = weatherData[vibe] || 'Unknown weather';
        let driverNote = '';
        const teamNote = teamStyles[teamColor] ? ` ${teamStyles[teamColor]}` : '';

        // Driver-inspired note
        if (driver !== 'none') {
          driverNote = `Inspired by ${driverStyles[driver]}, `;
        }

        // Weather-based outfit adjustment
        const weatherNote = weather.includes('Rainy') ? ' Add a waterproof layer.' : weather.includes('Hot') ? ' Keep it light and breathable.' : weather.includes('Cool') ? ' Add a light jacket.' : '';

        // Validate inputs
        if (!vibe) {
          vibeError.textContent = 'Please select a race.';
          loadingSpinner.style.display = 'none';
          return;
        }
        if (!gender) {
          genderError.textContent = 'Please select a gender.';
          loadingSpinner.style.display = 'none';
          return;
        }
        if (!outfits[vibe] || !outfits[vibe][gender]) {
          resultDiv.innerHTML = '<strong>Error:</strong> Outfit not available for this race or gender. Try another combination.';
          loadingSpinner.style.display = 'none';
          return;
        }

        // Select random outfit
        const outfitOptions = outfits[vibe][gender];
        let outfit = outfitOptions[Math.floor(Math.random() * outfitOptions.length)];
        outfit = outfit.replace('%color%', colorName).replace('%accessory%', randomAccessory).replace('%weather%', weatherNote);
        outfit = driverNote + outfit + teamNote;

        // Display outfit
        resultDiv.innerHTML = `<strong>Your Paddock Look:</strong> ${outfit}`;
        resultDiv.classList.add('zoom-in'); // Apply animation
        localStorage.setItem('lastOutfit', outfit);

        // Save to recent outfits
        let recentOutfits = JSON.parse(localStorage.getItem('recentOutfits')) || [];
        recentOutfits.unshift(outfit);
        if (recentOutfits.length > 5) recentOutfits.pop();
        localStorage.setItem('recentOutfits', JSON.stringify(recentOutfits));

        // Save preferences
        localStorage.setItem('vibe', vibe);
        localStorage.setItem('gender', gender);
        localStorage.setItem('driver', driver);
        localStorage.setItem('teamColor', teamColor);

        // Track analytics
        window.plausible && window.plausible('GenerateOutfit', { props: { vibe, gender, driver, teamColor } });

        loadingSpinner.style.display = 'none';
      }, 500);
    });

    // Save outfit to wardrobe
    saveOutfitBtn.addEventListener('click', function() {
      const outfit = localStorage.getItem('lastOutfit');
      if (!outfit) {
        alert('Generate an outfit first!');
        return;
      }
      let wardrobe = [];
      try {
        wardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
      } catch (e) {
        console.warn('Invalid wardrobe data, resetting:', e);
      }
      if (wardrobe.length >= 5) {
        alert('Wardrobe full! Remove an outfit to add a new one.');
        return;
      }
      wardrobe.push(outfit);
      localStorage.setItem('wardrobe', JSON.stringify(wardrobe));
      window.plausible && window.plausible('SaveOutfit', { props: { outfit } });
      alert('Outfit saved to wardrobe!');
    });

    // Wardrobe deletion and favoriting handler
    modalDescription.addEventListener('click', function(e) {
      let wardrobe = [];
      try {
        wardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
      } catch (e) {
        console.warn('Invalid wardrobe data, resetting:', e);
      }
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (e.target.classList.contains('delete-btn')) {
        const index = parseInt(e.target.dataset.index);
        if (index >= 0 && index < wardrobe.length) {
          wardrobe.splice(index, 1);
          favorites = favorites.filter(i => i !== index).map(i => i > index ? i - 1 : i);
          localStorage.setItem('wardrobe', JSON.stringify(wardrobe));
          localStorage.setItem('favorites', JSON.stringify(favorites));
          modalDescription.innerHTML = wardrobe.length === 0
            ? 'No outfits saved yet. Generate and save some outfits!<br><input type="file" id="importWardrobe" accept=".json">'
            : wardrobe.map((outfit, idx) => `
                <p>${idx + 1}. ${outfit}
                  <button class="favorite-btn" data-index="${idx}" aria-label="${favorites.includes(idx) ? 'Unfavorite' : 'Favorite'} outfit ${idx + 1}">${favorites.includes(idx) ? '★' : '☆'}</button>
                  <button class="delete-btn" data-index="${idx}" aria-label="Delete outfit ${idx + 1}">Delete</button>
                </p>
              `).join('') + '<br><button id="exportWardrobe">Export Wardrobe</button><input type="file" id="importWardrobe" accept=".json">';
          if (wardrobe.length === 0) modal.style.display = 'none';
          // Reattach export/import listeners
          attachWardrobeListeners();
        }
      } else if (e.target.classList.contains('favorite-btn')) {
        const index = parseInt(e.target.dataset.index);
        if (favorites.includes(index)) {
          favorites = favorites.filter(i => i !== index);
        } else {
          favorites.push(index);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        modalDescription.innerHTML = wardrobe.map((outfit, idx) => `
          <p>${idx + 1}. ${outfit}
            <button class="favorite-btn" data-index="${idx}" aria-label="${favorites.includes(idx) ? 'Unfavorite' : 'Favorite'} outfit ${idx + 1}">${favorites.includes(idx) ? '★' : '☆'}</button>
            <button class="delete-btn" data-index="${idx}" aria-label="Delete outfit ${idx + 1}">Delete</button>
          </p>
        `).join('') + '<br><button id="exportWardrobe">Export Wardrobe</button><input type="file" id="importWardrobe" accept=".json">';
        attachWardrobeListeners();
      }
    });

    // View wardrobe
    viewWardrobeBtn.addEventListener('click', function() {
      let wardrobe = [];
      try {
        wardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
      } catch (e) {
        console.warn('Invalid wardrobe data, resetting:', e);
      }
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      modalTitle.textContent = 'Your Wardrobe';
      modalDescription.innerHTML = wardrobe.length === 0
        ? 'No outfits saved yet. Generate and save some outfits!<br><input type="file" id="importWardrobe" accept=".json">'
        : wardrobe.map((outfit, index) => `
            <p>${index + 1}. ${outfit}
              <button class="favorite-btn" data-index="${index}" aria-label="${favorites.includes(index) ? 'Unfavorite' : 'Favorite'} outfit ${index + 1}">${favorites.includes(index) ? '★' : '☆'}</button>
              <button class="delete-btn" data-index="${index}" aria-label="Delete outfit ${index + 1}">Delete</button>
            </p>
          `).join('') + '<br><button id="exportWardrobe">Export Wardrobe</button><input type="file" id="importWardrobe" accept=".json">';
      modal.style.display = 'block';
      attachWardrobeListeners();
    });

    // Attach wardrobe export/import listeners
    function attachWardrobeListeners() {
      const exportBtn = document.getElementById('exportWardrobe');
      const importInput = document.getElementById('importWardrobe');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          let wardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
          const blob = new Blob([JSON.stringify(wardrobe)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'wardrobe.json';
          a.click();
          URL.revokeObjectURL(url);
        });
      }
      if (importInput) {
        importInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              try {
                const imported = JSON.parse(event.target.result);
                if (Array.isArray(imported) && imported.every(item => typeof item === 'string') && imported.length <= 5) {
                  localStorage.setItem('wardrobe', JSON.stringify(imported));
                  localStorage.setItem('favorites', JSON.stringify([])); // Reset favorites
                  alert('Wardrobe imported successfully!');
                  viewWardrobeBtn.click(); // Refresh wardrobe view
                } else {
                  alert('Invalid wardrobe file. Must be a JSON array of up to 5 strings.');
                }
              } catch (err) {
                alert('Error reading wardrobe file.');
              }
            };
            reader.readAsText(file);
          }
        });
      }
    }

    // Recent outfits
    recentOutfitsBtn.addEventListener('click', function() {
      const recentOutfits = JSON.parse(localStorage.getItem('recentOutfits')) || [];
      modalTitle.textContent = 'Recent Outfits';
      modalDescription.innerHTML = recentOutfits.length === 0
        ? 'No recent outfits yet. Generate some outfits!'
        : recentOutfits.map((outfit, index) => `<p>${index + 1}. ${outfit}</p>`).join('');
      modal.style.display = 'block';
    });

    // Race info modal
    raceInfoBtn.addEventListener('click', function() {
      const vibe = vibeSelect.value;
      if (raceInfo[vibe]) {
        modalTitle.textContent = raceInfo[vibe].title;
        modalDescription.textContent = raceInfo[vibe].desc;
        modal.style.display = 'block';
      } else {
        console.error(`No race info for vibe: ${vibe}`);
        modalTitle.textContent = 'Error';
        modalDescription.textContent = 'Race information not available. Please select a valid race.';
        modal.style.display = 'block';
      }
    });

    // Modal close
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Share to X
    shareBtn.addEventListener('click', function() {
      const fullOutfit = localStorage.getItem('lastOutfit') || 'Check out my F1-inspired outfit!';
      const vibe = vibeSelect.value;
      const driver = driverSelect.value;
      const raceName = raceInfo[vibe]?.title || vibe;
      const shortOutfit = fullOutfit.length > 100 ? fullOutfit.substring(0, 97) + '...' : fullOutfit;
      const raceTag = vibe.charAt(0).toUpperCase() + vibe.slice(1);
      const driverTag = driver !== 'none' ? driver.charAt(0).toUpperCase() + driver.slice(1) : '';
      const shareCard = `🏎️ ${raceName}\n👕 ${shortOutfit}\n#F1Style #AIStylist #${raceTag}${driverTag ? ` #${driverTag}` : ''}`;
      const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareCard)}`;
      window.open(shareUrl, '_blank');
      window.plausible && window.plausible('ShareOutfit', { props: { vibe, driver } });
    });
  });
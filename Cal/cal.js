// Get DOM elements
const distanceSlider = document.getElementById('distance');
const distanceValue = document.getElementById('distanceValue');
const petrolCostDisplay = document.getElementById('petrolCost');
const evCostDisplay = document.getElementById('evCost');
const savingsDisplay = document.getElementById('savings');

// Constants
const PETROL_COST_PER_30KM = 110; // ₹110 for 30km
const EV_COST_PER_30KM = 5; // ₹5 for 30km
const DAYS_PER_YEAR = 365;

// Update calculations when slider changes
distanceSlider.addEventListener('input', () => {
  const dailyDistance = parseInt(distanceSlider.value);
  distanceValue.textContent = `${dailyDistance} km`;

  // Calculate annual costs
  const petrolCost = (dailyDistance / 30) * PETROL_COST_PER_30KM * DAYS_PER_YEAR+6000;
  const evCost = (dailyDistance / 30) * EV_COST_PER_30KM * DAYS_PER_YEAR;
  const savings = petrolCost - evCost;

  // Display results
  petrolCostDisplay.textContent = `₹${petrolCost.toLocaleString()}`;
  evCostDisplay.textContent = `₹${evCost.toLocaleString()}`;
  savingsDisplay.textContent = `₹${savings.toLocaleString()}`;
});

// Initial calculation on page load
distanceSlider.dispatchEvent(new Event('input'));


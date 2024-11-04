// Sample food data for demo purposes
const foodData = [
    { name: 'Grilled Chicken Salad', type: 'both', location: 'Orchard Road', mealType: 'lunch', budget: '10-20' },
    { name: 'Quinoa Salad', type: 'low-gi', location: 'Marina Bay', mealType: 'dinner', budget: '20+' },
    { name: 'Smoothie Bowl', type: 'low-sugar', location: 'Raffles Place', mealType: 'breakfast', budget: 'under-10' },
    { name: 'Vegetable Stir-Fry', type: 'both', location: 'Bugis', mealType: 'dinner', budget: '10-20' },
    { name: 'Tofu Wrap', type: 'low-sugar', location: 'Orchard Road', mealType: 'lunch', budget: 'under-10' },
    { name: 'Avocado Toast', type: 'low-gi', location: 'Sentosa', mealType: 'breakfast', budget: 'under-10' }
  ];
  
  function searchFoods() {
    // Get user-selected filters
    const type = document.getElementById('type').value;
    const location = document.getElementById('location').value.toLowerCase();
    const mealType = document.getElementById('meal-type').value;
    const budget = document.getElementById('budget').value;
  
    // Filter the food data
    const results = foodData.filter(food => {
      return (
        (type === 'both' || food.type === type) &&
        (location === '' || food.location.toLowerCase().includes(location)) &&
        food.mealType === mealType &&
        food.budget === budget
      );
    });
  
    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (results.length > 0) {
      results.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-item';
        foodDiv.innerHTML = `<strong>${food.name}</strong><br>
                             Location: ${food.location}<br>
                             Meal Type: ${food.mealType}<br>
                             Budget: ${food.budget}`;
        resultsDiv.appendChild(foodDiv);
      });
    } else {
      resultsDiv.innerHTML = '<p>No matching results found.</p>';
    }
  }
  
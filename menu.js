function generateCard(imageURL, foodName) {
    return `
        <div class="col">
            <div class="card">
                <img src="${imageURL}" class="card-img-top" alt="${foodName}">
                <div class="card-body">
                    <h5 class="card-title">${foodName}</h5>
                </div>
            </div>
        </div>`
}

async function getMeals() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
         
        if (!response.ok) {
            console.log(response.error)
            throw new Error('Meals not found');
        }
        const meals = (await response.json()).meals;
        console.log(meals);
        meals.forEach(meal => {
            document.getElementById("foodContainer").innerHTML += generateCard(meal.strMealThumb, meal.strMeal);
        });
    } catch (error) {
        console.error('Error fetching meal list:', error)
        alert('An error occured fetching the meals. Maybe try again?')
    }
}

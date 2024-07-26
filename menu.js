async function getMeals() {
    try {
        const listMeals = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
        if (!Response.ok) {
            throw new Error('Meals not found');
        }
        const meals = await Response.json();
    } catch (error) {
        console.error('Error fetching meal list:', error)
        alert('An error occured fetching the meals. Maybe try again?')
    }
}

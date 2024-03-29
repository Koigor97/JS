// creating the CaloriesTracker class
class CalorieTracker {
  #claroieLimit = Storage.getCalorieLimit();
  #totalCalories = Storage.getTotalCalories(0);
  #meals = Storage.getMeals();
  #workouts = Storage.getWorkouts();

  constructor() {
    this.#displayCaloriesLimit();
    this.#displayCaloriesTotal();
    this.#displayCaloriesConsumed();
    this.#displayCaloriesBurned();
    this.#displayCaloriesRemaining();
    this.#displayCaloriesProgress();
    // set the limit in the modal
    document.getElementById("limit").value = this.#claroieLimit;
  }

  //   Public API
  addMeal(meal) {
    this.#meals.push(meal);
    this.#totalCalories += meal.calories;
    Storage.setTotalCalories(this.#totalCalories);
    Storage.setMeals(meal);
    this.#displayNewMeal(meal);
    this.#render();
  }

  addWorkout(workout) {
    this.#workouts.push(workout);
    this.#totalCalories -= workout.calories;
    Storage.setTotalCalories(this.#totalCalories);
    Storage.setWorkouts(workout);
    this.#displayNewWorkout(workout);
    this.#render();
  }

  removeMeal(id) {
    const mealIndex = this.#meals.findIndex((meal) => meal.id === id);
    if (mealIndex !== -1) {
      const meal = this.#meals[mealIndex];
      this.#totalCalories -= meal.calories;
      Storage.setTotalCalories(this.#totalCalories);
      this.#meals.splice(mealIndex, 1);
      Storage.deleteMeal(id);
      this.#render();
    }
  }

  removeWorkout(id) {
    const workoutIndex = this.#workouts.findIndex(
      (workout) => workout.id === id
    );
    if (workoutIndex !== -1) {
      const workout = this.#workouts[workoutIndex];
      this.#totalCalories += workout.calories;
      Storage.setTotalCalories(this.#totalCalories);
      this.#workouts.splice(workoutIndex, 1);
      Storage.deleteWorkout(id);
      this.#render();
    }
  }

  reset() {
    this.#totalCalories = 0;
    this.#meals = [];
    this.#workouts = [];
    Storage.clearAll();
    this.#render();
  }

  setLimit(limit) {
    this.#claroieLimit = limit;
    Storage.setCalorieLimit(limit);
    this.#displayCaloriesLimit();
    this.#render();
  }

  loadItems() {
    this.#meals.forEach((meal) => this.#displayNewMeal(meal));
    this.#workouts.forEach((workout) => this.#displayNewWorkout(workout));
  }

  get displayTracker() {
    return {
      claroieLimit: this.#claroieLimit,
      totalCalories: this.#totalCalories,
      meals: this.#meals,
      workouts: this.#workouts,
    };
  }

  //   Private API

  #displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById("calories-total");
    totalCaloriesEl.innerHTML = this.#totalCalories;
  }

  #displayCaloriesLimit() {
    const caloriesLimitEl = document.getElementById("calories-limit");
    caloriesLimitEl.innerHTML = this.#claroieLimit;
  }

  #displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById("calories-consumed");
    // calcutate the total calories consumed
    const consumed = this.#meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );
    // insert the consumed calories into the DOM
    caloriesConsumedEl.innerHTML = consumed;
  }

  #displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById("calories-burned");
    // calcutate the total calories burned
    const burned = this.#workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );
    // insert the burned calories into the DOM
    caloriesBurnedEl.innerHTML = burned;
  }

  #displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById("calories-remaining");
    const progressBarEl = document.getElementById("calorie-progress");
    // calcutate the total calories remaining
    const remaining = this.#claroieLimit - this.#totalCalories;
    // insert the remaining calories into the DOM
    caloriesRemainingEl.innerHTML = remaining;

    // update the remaining calories color
    if (remaining < 0) {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        "bg-light"
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add(
        "bg-danger"
      );

      // change progress bar color
      progressBarEl.classList.remove("bg-success");
      progressBarEl.classList.add("bg-danger");
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        "bg-danger"
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add("bg-light");

      // change progress bar color
      progressBarEl.classList.remove("bg-danger");
      progressBarEl.classList.add("bg-success");
    }
  }

  // displaying calory progress using the UI progress bar
  #displayCaloriesProgress() {
    const progressBarEl = document.getElementById("calorie-progress");
    const percentage = (this.#totalCalories / this.#claroieLimit) * 100;
    const progress = Math.min(percentage, 100);

    // update the progress bar
    progressBarEl.style.width = `${progress}%`;
  }

  //   display new meal in the UI
  #displayNewMeal(meal) {
    const mealsEl = document.getElementById("meal-items");
    const mealEl = document.createElement("div");
    mealEl.classList.add("card", "my-2");
    mealEl.setAttribute("data-id", meal.id);

    // meal html markup
    mealEl.innerHTML = ` 
   
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="mx-1">${meal.name}</h4>
                  <div
                    class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
                  >
                    ${meal.calories}
                  </div>
                  <button class="delete btn btn-danger btn-sm mx-2">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
      
    `;

    // append the meal to the meals list
    mealsEl.appendChild(mealEl);
  }

  //   display new workout in the UI
  #displayNewWorkout(workout) {
    const workoutsEl = document.getElementById("workout-items");
    const workoutEl = document.createElement("div");
    workoutEl.classList.add("card", "my-2");
    workoutEl.setAttribute("data-id", workout.id);

    // workout html markup
    workoutEl.innerHTML = ` 
     
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <h4 class="mx-1">${workout.name}</h4>
                    <div
                      class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5"
                    >
                      ${workout.calories}
                    </div>
                    <button class="delete btn btn-danger btn-sm mx-2">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
        
      `;

    // append the workout to the workouts list
    workoutsEl.appendChild(workoutEl);
  }

  #render() {
    this.#displayCaloriesTotal();
    this.#displayCaloriesConsumed();
    this.#displayCaloriesBurned();
    this.#displayCaloriesRemaining();
    this.#displayCaloriesProgress();
  }
}

// creating the Meal class

class Meal {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
    this.id = Math.random().toString(16).slice(2);
  }
}

class Workout {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
    this.id = Math.random().toString(16).slice(2);
  }
}

// creating a Storage class
class Storage {
  // getting and saving the calorie limit
  static getCalorieLimit(defaultLimit = 2000) {
    let calorieLimit;
    if (localStorage.getItem("calorieLimit") === null) {
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = +localStorage.getItem("calorieLimit");
    }

    return calorieLimit;
  }

  static setCalorieLimit(limit) {
    localStorage.setItem("calorieLimit", limit);
  }

  // getting and setting total calories
  static getTotalCalories(defaultCalories = 0) {
    let totalCalories;
    if (localStorage.getItem("totalCalories") === null) {
      totalCalories = defaultCalories;
    } else {
      totalCalories = +localStorage.getItem("totalCalories");
    }

    return totalCalories;
  }

  static setTotalCalories(calories) {
    localStorage.setItem("totalCalories", calories);
  }

  // getting and saving the meals
  static getMeals() {
    let meals;
    if (localStorage.getItem("meals") === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem("meals"));
    }

    return meals;
  }

  static setMeals(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem("meals", JSON.stringify(meals));
  }

  // getting and saving the workouts
  static getWorkouts() {
    let workouts;
    if (localStorage.getItem("workouts") === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem("workouts"));
    }

    return workouts;
  }

  static setWorkouts(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }

  // deleting a meal from local storage
  static deleteMeal(id) {
    const meals = Storage.getMeals();
    const mealIndex = meals.findIndex((meal) => meal.id === id);
    if (mealIndex !== -1) {
      meals.splice(mealIndex, 1);
      localStorage.setItem("meals", JSON.stringify(meals));
    }
  }

  // deleting a workout from local storage
  static deleteWorkout(id) {
    const workouts = Storage.getWorkouts();
    const workoutIndex = workouts.findIndex((workout) => workout.id === id);
    if (workoutIndex !== -1) {
      workouts.splice(workoutIndex, 1);
      localStorage.setItem("workouts", JSON.stringify(workouts));
    }
  }

  // clear all items from local storage
  static clearAll() {
    localStorage.removeItem("totalCalories");
    localStorage.removeItem("meals");
    localStorage.removeItem("workouts");
  }
}

// creating the App class
class App {
  constructor() {
    this._tracker = new CalorieTracker();
    this._LoadEventListeners();
    // load items from local storage
    this._tracker.loadItems();
  }

  _LoadEventListeners() {
    // add event listener to the meal form
    document
      .getElementById("meal-form")
      .addEventListener("submit", this._newItem.bind(this, "meal"));

    // add event listener to the workout form
    document
      .getElementById("workout-form")
      .addEventListener("submit", this._newItem.bind(this, "workout"));

    // deleting a meal or workout item
    document
      .getElementById("meal-items")
      .addEventListener("click", this._deleteItem.bind(this, "meal"));

    document
      .getElementById("workout-items")
      .addEventListener("click", this._deleteItem.bind(this, "workout"));

    // filter meals and workouts
    document
      .getElementById("filter-meals")
      .addEventListener("keyup", this._filterItems.bind(this, "meal"));

    document
      .getElementById("filter-workouts")
      .addEventListener("keyup", this._filterItems.bind(this, "workout"));

    // reset the tracker
    document
      .getElementById("reset")
      .addEventListener("click", this._reset.bind(this));

    // set Daily Limit
    document
      .getElementById("limit-form")
      .addEventListener("submit", this._setLimit.bind(this));
  }

  _newItem(type, e) {
    e.preventDefault();

    //get the meal or workout name and calories
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    // // setting a guard clause
    if (name.value === "" || calories.value === "") {
      alert("Please fill in all the fields");
      return;
    }

    // create a new meal or workout
    if (type === "meal") {
      const meal = new Meal(name.value, +calories.value);
      // // add the meal to the tracker
      this._tracker.addMeal(meal);
    } else {
      const workout = new Workout(name.value, +calories.value);
      // // add the workout to the tracker
      this._tracker.addWorkout(workout);
    }

    // reset the form
    name.value = "";
    calories.value = "";

    // collaspe item form
    const collaspeItemForm = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collaspeItemForm, {
      toggle: true,
    });
  }

  _deleteItem(type, e) {
    if (
      e.target.classList.contains("delete") ||
      e.target.classList.contains("fa-xmark")
    ) {
      if (confirm("Are you sure you want to delete this item?")) {
        const id = e.target.closest(".card").dataset.id;
        console.log(id);
        type === "meal"
          ? this._tracker.removeMeal(id)
          : this._tracker.removeWorkout(id);

        e.target.closest(".card").remove();
      }
    }
  }

  _filterItems(type, e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(`#${type}-items .card`).forEach((item) => {
      const itemName = item.firstElementChild.firstElementChild.textContent;
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  _reset() {
    if (confirm("Are you sure you want to reset the tracker?")) {
      this._tracker.reset();

      // reset the UI
      document.getElementById("meal-items").innerHTML = "";
      document.getElementById("workout-items").innerHTML = "";

      // reset filter
      document.getElementById("filter-meals").value = "";
      document.getElementById("filter-workouts").value = "";
    }
  }

  _setLimit(e) {
    e.preventDefault();
    const limit = document.getElementById("limit");

    if (limit.value === "") {
      alert("Please enter a limit value");
      return;
    }

    this._tracker.setLimit(+limit.value);
    limit.value = "";

    // close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("limit-modal")
    );
    modal.hide();
  }
}

// creating an instance of the App class
const app = new App();

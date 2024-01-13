// creating the CaloriesTracker class
class CalorieTracker {
  #claroieLimit = 2000;
  #totalCalories = 0;
  #meals = [];
  #workouts = [];

  constructor() {
    this.#displayCaloriesLimit();
    this.#displayCaloriesTotal();
    this.#displayCaloriesConsumed();
    this.#displayCaloriesBurned();
    this.#displayCaloriesRemaining();
    this.#displayCaloriesProgress();
  }

  //   Public API
  addMeal(meal) {
    this.#meals.push(meal);
    this.#totalCalories += meal.calories;
    this.#displayNewMeal(meal);
    this.#render();
  }

  addWorkout(workout) {
    this.#workouts.push(workout);
    this.#totalCalories -= workout.calories;
    this.#displayNewWorkout(workout);
    this.#render();
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
    if (remaining <= 0) {
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

// creating the App class
class App {
  constructor() {
    this._tracker = new CalorieTracker();

    // add event listener to the meal form
    document
      .getElementById("meal-form")
      .addEventListener("submit", this._newItem.bind(this, "meal"));

    // add event listener to the workout form
    document
      .getElementById("workout-form")
      .addEventListener("submit", this._newItem.bind(this, "workout"));
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
}

const app = new App();

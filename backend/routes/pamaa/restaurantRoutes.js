const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/pamaa/restaurantController");

// Create a new restaurant
router.post("/create-restaurant", restaurantController.addRestaurant);

// Get all restaurants
router.get("/get-all-restaurants", restaurantController.getAllRestaurants);

// Get all restaurants by ID
router.get("/get-all-restaurants-id", restaurantController.getAllRestaurantsById);

// Get a single restaurant by ID
router.get("/get-restaurant/:id", restaurantController.getRestaurantById);

// Update a restaurant by ID
router.put("/update-restaurant/:id", restaurantController.updateRestaurant);

// Delete a restaurant by ID
router.delete("/delete-restaurant/:id", restaurantController.deleteRestaurant);

router.patch('/toggle-status/:id', restaurantController.toggleRestaurantStatus);


module.exports = router;
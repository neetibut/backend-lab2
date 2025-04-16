// Import Express and create a router instance
// ⬇️ Code here
const express = require();
// ⬇️ Code here
const router = "?";

// This array acts as our temporary, in-memory 'database' to store items
// ⬇️ Code here
let items = "?";

// 🟢 Create a new item (POST)
// Example: POST /api/v1/items with JSON body { "id": 1, "name": "Laptop" }
router.post("/items", (req, res) => {
  // ⬇️ Code here
});

// 🔵 Get all items (GET)
// Example: GET /api/v1/items
router.get("/items", (req, res) => {
  // ⬇️ Code here
});

/*
// ⚠️ WARNING: The route below duplicates the one above and will never be reached
// Query parameter example (e.g., GET /items?category=electronics)
// It is kept here to show how query parameters work, but it needs to be separated or merged correctly.
router.get("/items", (req, res) => {
  const category = req.query.category;
  res.send(`Category: ${category}`);
});
*/

// 🔵 Get a single item by ID (GET)
// Example: GET /api/v1/items/1
router.get("/items/:id", (req, res) => {
  // ⬇️ Code here
});

// 🟡 Update an item by ID (PUT)
// Example: PUT /api/v1/items/1 with updated JSON body
router.put("/items/:id", (req, res) => {
  // ⬇️ Code here
});

// 🔴 Delete an item by ID (DELETE)
// Example: DELETE /api/v1/items/1
router.delete("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index !== -1) {
    // ⬇️ Code here
  } else {
    // ⬇️ Code here
  }
});

// Export the router so it can be used in index.js
module.exports = "?";

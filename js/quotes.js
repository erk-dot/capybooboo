// capybooboo.com — quote pool
//
// Silly / funny "inspirational" quotes. Each is tagged with which photo
// scene(s) it's allowed to pair with, so the weekly quote never contradicts
// what's actually in the photo (see the "scene" tag in photos.js).
//
// scenes: ["any"]   — fits every photo, land or water
// scenes: ["water"] — only pairs with photos where water is visible
// scenes: ["land"]  — only pairs with dry-land photos
//
// TO ADD MORE: append a new { text, scenes } object below.
// Use scenes: ["any"] unless the quote specifically references water or land.

const QUOTES = [
  { text: "Be like a capybara: unbothered, at peace, still somehow the main character.", scenes: ["any"] },
  { text: "You miss 100% of the naps you don't take.", scenes: ["any"] },
  { text: "Float on. Everything else is somebody else's problem.", scenes: ["water"] },
  { text: "The capybara does not rush. The capybara arrives exactly when the capybara arrives.", scenes: ["any"] },
  { text: "Some days you're the crocodile. Most days you're just vibing with the crocodile, like a capybara.", scenes: ["any"] },
  { text: "Success is just sitting in warm water and refusing to panic.", scenes: ["water"] },
  { text: "Nobody has ever seen a stressed capybara. Coincidence? I think not.", scenes: ["any"] },
  { text: "Do less. Chew more. Trust the process.", scenes: ["land"] },
  { text: "You are 100% capable of doing absolutely nothing today, and that's beautiful.", scenes: ["any"] },
  { text: "A capybara has never once had a bad day. Be the capybara.", scenes: ["any"] },
  { text: "Whatever it is, it can probably wait until after this nap.", scenes: ["any"] },
  { text: "Peace is not the absence of chaos. Peace is a capybara sitting in the middle of it.", scenes: ["any"] }
];

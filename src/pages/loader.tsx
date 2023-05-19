import * as React from "react";
// var LOADER_CONTAINER = $("#loader");
// var LOADER_INTERVAL = 1600;
var LOADERS = [
  ["🌶", "Dicing peppers"],
  ["🔪", "Sharpening knives"],
  ["👩🏽‍🍳", "Starching aprons"],
  ["🥒", "Sautéing veggies"],
  ["🍳", "Frying eggs"],
  ["🧀", "Cutting cheese"],
  ["🥓", "Crisping bacon"],
  ["🌽", "Shucking corn"],
  ["🍚", "Steaming rice"],
  ["🍞", "Baking bread"],
  ["🍷", "Uncorking wine"],
  ["🍽", "Plating dishes"],
  ["🍤", "Frying shrimp"],
  ["🥐", "Toasting croissants"],
  ["🍋", "Deseeding lemons"],
  ["🥕", "Peeling carrots"],
  ["🍲", "Stirring soups"],
  ["🐸🍵", "Spilling tea"],
  ["🍕", "Firing pizzas"],
  ["🔥", "Lighting burners"],
  ["🥔", "Roasting potatoes"],
  ["🤔", "Testing tastes"],
  ["🍊", "Squeezing oranges"],
  ["💧", "Pouring water"],
  ["🍦", "Freezing ice cream"],
  ["🍨", "Scooping desserts"],
  ["🥗", "Mixing salads"],
  ["🥚", "Cracking eggs"],
  ["🥞", "Stacking pancakes"],
  ["🍒", "Putting a cherry on top"],
  ["🍗", "Seasoning wings"],
  ["🍅", "Crushing tomatoes"],
  ["🍍", "Chunking pineapples"],
  ["💖", "Adding a pinch of something perfect"],
  ["📝", "Writing recipes"],
  ["🗓", "Planning menus"],
  ["🌰", "Cracking nuts"],
  ["🍿", "Popping popcorn"],
  ["🍾", "Popping champers"],
  ["🍆", "Planting eggs"],
  ["🥑", "Mashing avocados"],
  ["🍌", "Peeling bananas"],
  ["🍔", "Flipping burgers"],
  ["🍻", "Clinking glasses"],
  ["🍴", "Polishing silverware"],
  ["🍪", "Baking cookies"],
  ["🍣", "Rolling sushi"],
  ["🍶", "Warming sake"],
  ["🍱", "Boxing bento"],
  ["🌯", "Wrapping burritos"],
  ["☕️", "Brewing coffee"],
  ["🍏", "Coring apples"],
  ["🌿", "Growing herbs"],
  ["🍰", "Slicing cakes"],
  ["🍟", "Frying fries"],
  ["🍑", "Peeling peaches"],
  ["🍛", "Spicing curry"],
  ["🌮", "Assembling tacos"],
  ["📸", "Photographing plates"],
  ["🛎", "Dinging bells"],
  ["🍫", "Melting chocolate"],
  ["🍜", "Cooking ramen"],
  ["🥖", "Baking baguettes"],
  ["❄️", "Shaving ice"],
  ["🥛", "Blending milkshakes"],
  ["🍄", "Chopping mushrooms"],
  ["🐟", "Searing fish"],
  ["😋", "Licking lips"],
  ["🤞🏾", "Crossing fingers"],
  ["👊🏿", "Bumping fists"],
  ["☝🏽", "Throwing in one last thing"],
  ["😙👌", "Doing that Italian chef thing"],
  ["👃🏻", "Smellin’ smells"],
  ["🍹", "Mixing drinks"],
  ["✨", "Making magic"],
  ["🌱", "Planting seeds"],
  ["⚗️", "Testing something new"],
];

export default function Loader() {
  const load1 = () => new Promise((resolve) => setTimeout(resolve, 1300)); // 2 seconds
  const load2 = () => new Promise((resolve) => setTimeout(resolve, 2600)); // 2 seconds
  const load3 = () => new Promise((resolve) => setTimeout(resolve, 3900)); // 2 seconds

  const [showNext, setShowNext] = React.useState<boolean>(false);
  const [showLast, setShowLast] = React.useState<boolean>(false);
  const [showNone, setShowNone] = React.useState<boolean>(false);
  React.useEffect(() => {
    load1().then(() => {
      setShowNext(true);
      console.log(showNext);
    });
  }, []);
  React.useEffect(() => {
    load2().then(() => {
      // setShowNext(false);
      setShowLast(true);
    });
  }, []);
  React.useEffect(() => {
    load3().then(() => {
      // setShowNext(false);
      setShowNone(true);
    });
  }, []);
  return (
    <div className="loader">
      <div
        className={`emoji  ${
          showNext || showLast ? "animateOut hidden delay-300" : "block"
        }`}
      >
        🍹
      </div>
      <div
        className={`text  ${
          showNext || showLast ? "animateOut hidden delay-300" : "block"
        }`}
      >
        Mixing drink
      </div>
      <div
        className={`emoji ${
          showNext ? "visible delay-300" : "hidden delay-0"
        } ${showLast ? "animateOut hidden delay-300" : ""}`}
      >
        🍱
      </div>
      <div
        className={`text ${showNext ? "visible delay-300" : "hidden delay-0"} ${
          showLast ? "animateOut hidden delay-300" : ""
        }`}
      >
        Boxing bento
      </div>
      <div
        className={`emoji ${
          showLast ? "visible delay-300" : "hidden delay-0"
        } ${showNone ? "animateOut hidden delay-300" : ""}`}
      >
        ✨
      </div>
      <div
        className={`text ${showLast ? "visible delay-300" : "hidden delay-0"} ${
          showNone ? "animateOut hidden delay-300" : ""
        }`}
      >
        Making magic
      </div>
    </div>
  );
}

// $(document).ready(function () {
//   var cycleLoader = function () {
//     var index = Math.floor(Math.random() * LOADERS.length);
//     var selected = LOADERS[index];
//     var selectedEmoji = selected[0];
//     var selectedText = selected[1];

//     // First transition out the old loader
//     setTimeout(function () {
//       LOADER_CONTAINER.children().addClass("animateOut hidden delay-300");
//     }, LOADER_INTERVAL - 300); // This negative value should be the same as $animation-duration in the CSS

//     // Then remove the animated out divs
//     LOADER_CONTAINER.children(".emoji").last().remove();
//     LOADER_CONTAINER.children(".text").last().remove();

//     // Then animate in the new one
//     LOADER_CONTAINER.append('<div class="emoji">' + selectedEmoji + "</div>");
//     LOADER_CONTAINER.append('<div class="text">' + selectedText + "</div>");
//   };

//   setInterval(cycleLoader, LOADER_INTERVAL);
//   cycleLoader(); // Run first time without delay
// });

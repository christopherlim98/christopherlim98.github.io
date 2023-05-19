import * as React from "react";
const LOADERS: Array<Array<string>> = [
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
  ["👃🏻", "Smellin’ smells"],
  ["🍹", "Mixing drinks"],
  ["✨", "Making magic"],
  ["🌱", "Planting seeds"],
  ["⚗️", "Testing something new"],
];

export default function Loader() {
  const load1 = () => new Promise((resolve) => setTimeout(resolve, 800)); // 2 seconds
  const load2 = () => new Promise((resolve) => setTimeout(resolve, 1000)); // 2 seconds
  const load3 = () => new Promise((resolve) => setTimeout(resolve, 1800)); // 2 seconds
  const load4 = () => new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  const load5 = () => new Promise((resolve) => setTimeout(resolve, 2800)); // 2 seconds
  const [init, setInit] = React.useState<boolean>(false);
  const [hideFirst, setHideFirst] = React.useState<boolean>(false);
  const [hideNext, setHideNext] = React.useState<boolean>(false);
  const [showNext, setShowNext] = React.useState<boolean>(false);
  const [showLast, setShowLast] = React.useState<boolean>(false);
  const [showNone, setShowNone] = React.useState<boolean>(false);

  const [emoji1, setEmoji1] = React.useState<string>("");
  const [emoji2, setEmoji2] = React.useState<string>("");
  const [emoji3, setEmoji3] = React.useState<string>("");
  const [text1, setText1] = React.useState<string>("");
  const [text2, setText2] = React.useState<string>("");
  const [text3, setText3] = React.useState<string>("");
  React.useEffect(() => {
    var seed = Math.floor(Math.random() * LOADERS.length) % LOADERS.length;
    setEmoji1(LOADERS[seed % LOADERS.length][0] ?? "🍞");
    setText1(LOADERS[seed % LOADERS.length][1] ?? "Baking bread");
    setEmoji2(LOADERS[(seed + 1) % LOADERS.length][0] ?? "🍿");
    setText2(LOADERS[(seed + 1) % LOADERS.length][1] ?? "Popping popcorn");
    setEmoji3(LOADERS[(seed + 2) % LOADERS.length][0] ?? "✨");
    setText3(LOADERS[(seed + 2) % LOADERS.length][1] ?? "Making magic");
    setInit(true);
  }, []);
  React.useEffect(() => {
    load1().then(() => {
      setShowNext(true);
    });
  }, []);
  React.useEffect(() => {
    load2().then(() => {
      setHideFirst(true);
    });
  }, []);
  React.useEffect(() => {
    load3().then(() => {
      setShowLast(true);
    });
  }, []);
  React.useEffect(() => {
    load4().then(() => {
      setHideNext(true);
    });
  }, []);
  React.useEffect(() => {
    load5().then(() => {
      setShowNone(true);
    });
  }, []);
  return (
    <div className="loader">
      <div className={`${hideFirst ? "hidden" : ""}`}>
        <div
          className={`emoji ${init ? "visible" : "hidden"} ${
            showNext || showLast ? "animateOut" : "block"
          }`}
        >
          {emoji1}
        </div>
        <div
          className={`text ${init ? "visible" : "hidden"} ${
            showNext || showLast ? "animateOut" : "block"
          }`}
        >
          {text1}
        </div>
      </div>
      <div className={`${hideNext ? "hidden" : ""}`}>
        <div
          className={`emoji  ${hideFirst ? "visible" : "hidden"} ${
            showLast ? "animateOut " : ""
          }`}
        >
          {emoji2}
        </div>
        <div
          className={`text ${hideFirst ? "visible" : "hidden"} ${
            showLast ? "animateOut " : ""
          }`}
        >
          {text2}
        </div>
      </div>
      <div className={`${showNone ? "hidden" : ""}`}>
        <div
          className={`emoji ${hideNext ? "visible" : "hidden"} ${
            showNone ? "animateOut " : ""
          }`}
        >
          {emoji3}
        </div>
        <div
          className={`text ${hideNext ? "visible" : "hidden"} ${
            showNone ? "animateOut " : ""
          }`}
        >
          {text3}
        </div>
      </div>
    </div>
  );
}

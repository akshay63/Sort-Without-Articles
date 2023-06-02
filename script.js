/*
 **--------- Project17: Sort without articles ---------**

 Goal: Sort the list using array's sort() method without the "The", "An" and "A" in the items list and then render the items in the browser


 */

"use strict";

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//My approach✔✔✔
//1) remove/modify the proverbs
//2) sort the array
//3) render the list to DOM
// const updatedBands = bands
//   .map((band) => {
//     if (
//       band.startsWith("The ") ||
//       band.startsWith("A ") ||
//       band.startsWith("An ")
//     ) {
//       return band.slice(band.indexOf(" ")).trim();
//     } else {
//       return band;
//     }
//   })
//   .sort();

// updatedBands.forEach((band) => {
//   document
//     .getElementById("bands")
//     .insertAdjacentHTML("beforeend", `<li>${band}</li>`);
// });

//Approach: Suggested by Wes first and later implemented by Wes
//1) sort the array
//2) remove(replace) the proverbs
//3) render the list to DOM

function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");

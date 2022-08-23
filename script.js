"use strict";
console.clear();

// 1.
console.log([4, 2, 5, 3, 9, 7, 1, 8, 2, 6].sort());

// 2.
console.log(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"].sort());

// Bonuses
const sortArrOfNumbers = (arr) => arr.sort((a, b) => a - b);

const sortArrOfStrings = (arr) =>
  arr.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

console.log(sortArrOfNumbers([4, 2, 5, 3, 9, 10, 7, 1, 8, 2, 6]));
console.log(
  sortArrOfStrings(["Alkis", "Mazen", "Muhasin", "Saad", "Chris", "Oliveira"])
);

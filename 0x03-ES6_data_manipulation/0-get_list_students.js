const names = ["Guillaume", "James", "Serena"];
const locations = ["San Francisco", "Columbia", "San Francisco"];

export default function getListStudents() {
    return [
        { id: 1, firstName: names[0], location: locations[0] },
        { id: 2, firstName: names[1], location: locations[1] },
        { id: 3, firstName: names[2], location: locations[2] },
    ];
}

// const names = ["Guillaume", "James", "Serena"];
// const locations = ["San Francisco", "Columbia", "San Francisco"];

// const values = [];

// for (let x = 0; x < names.length; x++) {
//   values.push({ id: x + 1, firstName: names[x], location: locations[x] });
// }

// console.table(values);

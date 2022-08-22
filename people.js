const people = ['Nietzsche', 'Aurelius', 'Hesse', 'Arendt'];

console.log(people);

// to export a single thing -- module.exports = people;

// to export multiple thing -- 
module.exports = {
    people: people, ages
};
// 'people: people' can just be written as 'people' above, but I've written it like that because under the hood by default it will set it as a property 'people' set equal to the value of the 'people' constant

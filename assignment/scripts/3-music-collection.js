console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
const collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters



function addToCollection(title, artist, yearPublished){
//   - Create a new object having the above properties
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
//   - Add the new object to the end of the `collection` array
    collection.push(newAlbum);
//   - Return the newly created object
    return newAlbum;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
console.log('addToCollection("Bandit salete", "Sofiane", 2017)', addToCollection('Bandit salete', 'Sofiane', 2017));
console.log('addToCollection("Bloodletter", "Paleo", 2014)', addToCollection('Bloodletter', 'Paleo', 2014));
console.log('addToCollection("Boy King", "Wild Beasts", 2016)', addToCollection('Boy King', 'Wild Beasts', 2016));
console.log('addToCollection("Cupid Deluxe", "Blood Orange", 2013)', addToCollection('Cupid Deluxe', 'Blood Orange', 2013));
console.log('addToCollection("Sunbather", "Deafheaven", 2013)', addToCollection('Sunbather', 'Deafheaven', 2013));
console.log('addToCollection("Cold Fact", "Rodriguez", 1970)', addToCollection('Cold Fact', 'Rodriguez', 1970));

console.log('collection now contains:', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!
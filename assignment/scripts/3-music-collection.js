console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
const collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters



function addToCollection(title, artist, yearPublished, trackList){
//   - Create a new object having the above properties
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        trackList: trackList
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
console.log('addToCollection("Bandit salete", "Sofiane", 2017)', addToCollection('Bandit salete', 'Sofiane', 2017, [['Bandit salete', '3:17'], ['Toka', '3:18'], ['Mon petit loup', '2:54']]));
console.log('addToCollection("Bloodletter", "Paleo", 2014)', addToCollection('Bloodletter', 'Paleo', 2014, [['Shapeshifter', '2:44'], ['The Way Out of the Woods', '2:18'], ['Better Goodbyes', '3:04']]));
console.log('addToCollection("Boy King", "Wild Beasts", 2016)', addToCollection('Boy King', 'Wild Beasts', 2016, [['Big Cat', '3:07'], ['Tough Guy', '3:31'], ['Alpha Female', '3:44']]));
console.log('addToCollection("Cupid Deluxe", "Blood Orange", 2013)', addToCollection('Cupid Deluxe', 'Blood Orange', 2013, [['Chamakay', '4:20'], ["You're Not Good Enough", '4:21'], ['Uncle ACE', '4:16']]));
console.log('addToCollection("Sunbather", "Deafheaven", 2013)', addToCollection('Sunbather', 'Deafheaven', 2013, [['Dream House', '9:14'], ['Irresistible', '3:13'], ['Sunbather', '10:16']]));
console.log('addToCollection("Cold Fact", "Rodriguez", 1970)', addToCollection('Cold Fact', 'Rodriguez', 1970, [['Sugar Man', '3:49'], ['Crucify Your Mind', '2:32'], ['I Wonder', '2:34']]));
// console.log('addToCollection("Another Album from that year", "Rodriguez", 1970)', addToCollection('Another Album from that year', 'Rodriguez', 1970));


console.log('collection now contains:', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(recordArray) {
    //   - Console.log the number of items in the array.
    console.log(`number of items in recordArray is ${recordArray.length}`);
    //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (let record of recordArray) {
        console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`);
    }
}
// - Test the `showCollection` function.
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
function findByArtist(artist){
    //   - Create an array to hold any results, empty to start
    let results = [];
    //   - Loop through the `collection` and add any objects with a matching artist to the array.
    for (let record of collection) {
        if (record.artist === artist) {
            results.push(record);
        }
    }
    //   - Return the array with the matching results. If no results are found, return an empty array.
    return results;
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('findByArtist("Willie Nelson")', findByArtist("Willie Nelson"));
console.log('findByArtist("Blood Orange")', findByArtist("Blood Orange"));
console.log('findByArtist("Rodriguez")', findByArtist("Rodriguez"));
// > When testing your functions, write all tests in the JavaScript file!

// STRETCH GOALS!
// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   { artist: 'Ray Charles', year: 1957 }
function search(searchItem) {
    let results = [];
    //  If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
    if (typeof searchItem === 'undefined' || Object.keys(searchItem).length === 0) {
        //console.log('no search item');
        return collection;
    }
    //loop through array of record objects
    for (let record of collection) { 
        // for each, check if artist and year match between searchItem and record in collection
        if (searchItem.artist === record.artist && searchItem.year === record.yearPublished) {
            //console.log('found match:', record);
            //push matching record into results
            results.push(record);
        }
    } 
    return results;
}
//----TESTS for search()----
// console.log('search({})', search({}));
// console.log('search()', search());
// console.log('search({artist: "Blood Orange", year: 2013})', search({artist: 'Blood Orange', year: 2013}));
// console.log('addToCollection("Another Album from that year", "Rodriguez", 1970)', addToCollection('Another Album from that year', 'Rodriguez', 1970));
// console.log('search({artist: "Rodriguez", year: 1970})', search({artist: "Rodriguez", year: 1970}));
// console.log('search({artist: "Wild Beasts", year: 1970})', search({artist: "Wild Beasts", year: 1970}));

//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
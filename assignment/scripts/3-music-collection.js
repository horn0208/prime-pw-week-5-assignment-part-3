console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
const collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
function addToCollection(title, artist, yearPublished, tracks){
//   - Create a new object having the above properties
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };
//   - Add the new object to the end of the `collection` array
    collection.push(newAlbum);
//   - Return the newly created object
    return newAlbum;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
console.log('addToCollection("Bandit salete", "Sofiane", 2017)', addToCollection('Bandit salete', 'Sofiane', 2017, [{name: 'Bandit salete', duration: '3:17'}, {name: 'Toka', duration: '3:18'}, {name: 'Mon petit loup', duration: '2:54'}]));
console.log('addToCollection("Bloodletter", "Paleo", 2014)', addToCollection('Bloodletter', 'Paleo', 2014, [{name: 'Shapeshifter', duration: '2:44'}, {name: 'The Way Out of the Woods', duration: '2:18'}, {name: 'Better Goodbyes', duration: '3:04'}]));
console.log('addToCollection("Boy King", "Wild Beasts", 2016)', addToCollection('Boy King', 'Wild Beasts', 2016, [{name: 'Big Cat', duration: '3:07'}, {name: 'Tough Guy', duration: '3:31'}, {name: 'Alpha Female', duration: '3:44'}]));
console.log('addToCollection("Cupid Deluxe", "Blood Orange", 2013)', addToCollection('Cupid Deluxe', 'Blood Orange', 2013, [{name: 'Chamakay', duration: '4:20'}, {name: "You're Not Good Enough", duration: '4:21'}, {name: 'Uncle ACE', duration: '4:16'}]));
console.log('addToCollection("Cold Fact", "Rodriguez", 1970)', addToCollection('Cold Fact', 'Rodriguez', 1970, [{name: 'Sugar Man', duration: '3:49'}, {name: 'Crucify Your Mind', duration: '2:32'}, {name: 'I Wonder', duration: '2:34'}]));
console.log('addToCollection("Coming from Reality", "Rodriguez", 1970)', addToCollection('Coming from Reality', 'Rodriguez', 1970, [{name: 'Climb Up on My Music', duration: '4:54'}, {name: 'A Most Disgusting Song', duration: '4:49'}, {name: 'I Think of You', duration: '3:25'}]));

console.log('collection now contains:', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(recordArray) {
    //   - Console.log the number of items in the array.
    console.log(`number of items in recordArray is ${recordArray.length}`);
    //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (let record of recordArray) {
        console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`);
        //declare variable for track number outside the inner loop of tracks.
        let trackNum = 1;
        //loop through tracks in the record and console.log number, name, and duration
        for (let track of record.tracks) {
            // console.log('looping through tracks--inner loop in showCollection()');
            console.log(`${trackNum}. ${track.name}: ${track.duration}`);
            trackNum ++;
        }
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


// STRETCH GOALS!
// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   { artist: 'Ray Charles', year: 1957, trackName: 'A Song' } ---updated to also include trackName
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
            //push matching record into results array
            results.push(record);
        } 
        // loop through tracks of a given record
        for (let track of record.tracks){
            // console.log('track name loop works! Yay!');
            //check if Name in tracks matches searched trackName
            if (track.name === searchItem.trackName) {
                // console.log('a track name match!');
                //push matching record into results
                results.push(record);
            }
        }
    } 
    return results;
}
//----TESTS for search()----
// console.log('search({})', search({}));
// console.log('search()', search());
console.log('search({artist: "Unknown", year: 2013, trackName: "Uncle ACE"})', search({artist: 'Unknown', year: 2013, trackName: 'Uncle ACE'}));
// console.log('search({artist: "Rodriguez", year: 1970})', search({artist: "Rodriguez", year: 1970}));
// console.log('search({artist: "Wild Beasts", year: 1970})', search({artist: "Wild Beasts", year: 1970}));

//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
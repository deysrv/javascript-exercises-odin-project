const getTheTitles = function(arr) {
    let bookTitles = [];
    for(let books of arr){
        bookTitles.push(books.title)
    }

    return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;

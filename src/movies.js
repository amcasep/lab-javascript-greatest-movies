// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function(element) {
        return element.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter (function(element) {     
       if (element.director === "Steven Spielberg" && element.genre.includes("Drama"))
       return element
    })  
    return spielbergMovies.length;
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length === 0) {return 0}

    const totalScore = moviesArray.reduce(function(acc, curr) {
        return acc + curr.score
    }, 0)
    const averageScore = totalScore / moviesArray.length;
    return Math.round(averageScore*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(element => element.genre.includes("Drama"))
    if (dramaMovies.length === 0) {return 0}
    
    const totalDramaScore = dramaMovies.reduce(function(acc, curr){
        return acc + curr.score
    }, 0)

    const averageDramaScore = totalDramaScore / dramaMovies.length;
    return Math.round(averageDramaScore*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArray = moviesArray.slice() // first we clone the array and store it in a variable

    const moviesByYear = clonedArray.sort(function(a,b) {
        if (a.year !== b.year) {return a.year - b.year}
        else {return a.title.localeCompare(b.title)}
    }) ;
    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const clonedArray = moviesArray.slice()
    const orderABC = clonedArray.sort((a,b) => a.title.localeCompare(b.title))
    const first20 = orderABC.slice(0,20)
    const first20Title = first20.map(element => element.title)
    return first20Title
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const clonedArray = moviesArray.slice()
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

type movies = {
	title: string;
	releaseYear: number;
	genre: string;
}

const actionMovie: movies = {
	title: "The Dark Knight",
	releaseYear: 2008,
	genre: "Action",
}

const comedyMovie: movies = {
    title : "The Hangover",
	releaseYear: 2009,
	genre: "Comedy",
}

const horrorMovie: movies = {
	title: "The Conjuring",
	releaseYear: 2013,
	genre: "Horror",
}

console.log(actionMovie); 
console.log(comedyMovie); 
console.log(horrorMovie); 
console.log(actionMovie.title); 

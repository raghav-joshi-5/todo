import { Component, OnInit } from '@angular/core';

interface Movie {
  name: string;
  url: string;
  rating: number;
  overview: string;
}

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: Movie[] = [];
  isFormVisible: boolean = false;
  currentMovie: Movie | null = null;

  movieName: string = '';
  movieURL: string = '';
  movieRating: number = 1;
  movieOverview: string = '';

  ngOnInit(): void {}

  // Method to add a new movie
  addMovie() {
    const newMovie: Movie = {
      name: this.movieName,
      url: this.movieURL,
      rating: this.movieRating,
      overview: this.movieOverview,
    };

    this.movies.push(newMovie);

    // Reset the form after adding
    this.resetForm();
    this.isFormVisible = false;
  }

  // Method to edit an existing movie
  editMovie(movie: Movie) {
    this.movieName = movie.name;
    this.movieURL = movie.url;
    this.movieRating = movie.rating;
    this.movieOverview = movie.overview;
    this.currentMovie = movie;
    this.isFormVisible = true;
  }

  // Method to remove a movie
  removeMovie(movie: Movie) {
    const index = this.movies.indexOf(movie);
    if (index !== -1) {
      this.movies.splice(index, 1);
    }
  }

  // Reset the form fields
  resetForm() {
    this.movieName = '';
    this.movieURL = '';
    this.movieRating = 1;
    this.movieOverview = '';
    this.currentMovie = null;
  }

  // Close the form without saving
  closeForm() {
    this.resetForm();
    this.isFormVisible = false;
  }
}

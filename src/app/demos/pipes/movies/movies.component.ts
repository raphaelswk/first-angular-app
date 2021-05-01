import { Component, OnInit } from '@angular/core';
import { ImageFormaterPipe } from './image.pipe';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  providers: [
    ImageFormaterPipe
  ]
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  mappedMovies: Movie[];

  constructor(private imageFormat: ImageFormaterPipe) {}

  ngOnInit() {
    this.movies = [
      {
        name: 'Iron Man',
        releaseDate: new Date('05/02/2008'),
        price: 100.00,
        image: 'Avengers.jpg',
        size: '34563456'
      },
      {
        name: 'The Avengers',
        releaseDate: new Date('04/11/2012'),
        price: 150.00,
        image: 'Avengers.jpg',
        size: '34563456'
      },
      {
        name: 'avengers: age of ultron',
        releaseDate: new Date('04/23/2015'),
        price: 175.70,
        image: 'Avengers.jpg',
        size: '2345345'
      },
      {
        name: 'Avengers: Infinity War',
        releaseDate: new Date('04/23/2018'),
        price: 225.35,
        image: 'Avengers.jpg',
        size: '246456743464'
      },
      {
        name: 'Avengers: Endgame',
        releaseDate: new Date('04/25/2019'),
        price: 300.50,
        image: 'Avengers.jpg',
        size: '245624567456'
      }
    ];

    this.mappedMovies = this.movies.map(movie => {
      return {
        name: movie.name,
        releaseDate: movie.releaseDate,
        price: movie.price,
        image: this.imageFormat.transform(movie.image, 'default', true),
        size: movie.size
      }
    });
  }
}
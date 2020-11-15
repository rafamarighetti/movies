import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies..service';
import { MovieList } from '../../models/MovieList.model';
import { MOVIES_IMG } from '../../../app.api';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  movies: MovieList[];
  imgPath: string = MOVIES_IMG;
  term: string;

  searchHeader(term): any {
    this.term = term;
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getDiscoverMovieList().subscribe((movies: MovieList[]) => {
      this.movies = movies;
    });
  }
}

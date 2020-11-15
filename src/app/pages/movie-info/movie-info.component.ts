import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies..service';
import { MovieInfo } from '../../models/MovieInfo.model';
import { MOVIES_IMG } from '../../../app.api';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movie;
  imgPath: string = MOVIES_IMG;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.moviesService.getMovieById(this.route.snapshot.params[`id`]).subscribe((movie: MovieInfo[]) => {
      this.movie = movie;
      console.log(movie);
    });
  }
}

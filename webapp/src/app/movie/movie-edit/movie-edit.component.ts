import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  editForm: FormGroup;
  movieEdited = false;
  error: string;
  saved = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      'imageUrl': new FormControl(null, [Validators.required]),
      'boxOffice': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'genre': new FormControl(null, [Validators.required]),
      'dateOfLaunch': new FormControl(null, [Validators.required]),
      'active': new FormControl(null, [Validators.required]),
      'hasTeaser': new FormControl(null),
    });
    this.route.params.subscribe((params: Params) => {
      const movieId = params['id'];
      this.moviesService.getMovie(movieId).subscribe((movie: Movie) => {
        if (movie) {
          this.editForm.patchValue({
            id: movie.id,
            title: movie.title,
            imageUrl: movie.imageUrl,
            boxOffice: movie.boxOffice,
            genre: movie.genre,
            dateOfLaunch: movie.dateOfLaunch,
            active: movie.active ? "Yes" : "No",
            hasTeaser: movie.hasTeaser
          });
        } else {
          this.router.navigate(['not-found']);
        }
      });
    });
  }
  onSubmitEditForm() {
    console.log(this.editForm);
    this.movieEdited = true;
  }

  onSaveClick(editForm: Form) {
    console.log(editForm);
    this.moviesService.modifyMovie(this.editForm.value).subscribe(data => {
      console.log("Movie saved successfully");
      console.log(this.editForm.value);
      this.saved = true;
      this.error = '';
    },
      error => {
        console.log(error);
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });
  }
  
}

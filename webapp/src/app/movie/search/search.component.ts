import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  onSearchText(event: any) {
    this.movieService.filter.next({ title: event.target.value});
  }
}

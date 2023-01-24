import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.loaderService.fetchResults();

  constructor(private router: Router, private loaderService: LoaderService) {}

  goBack(): void {
    this.router.navigate(['find'])
  }

  seeMore(): void {
    // TODO
  }
}

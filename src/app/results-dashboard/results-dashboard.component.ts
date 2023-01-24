import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'app-results-dashboard',
  templateUrl: './results-dashboard.component.html',
  styleUrls: ['./results-dashboard.component.scss']
})
export class ResultsDashboardComponent {
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

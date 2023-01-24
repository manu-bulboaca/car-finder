import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoaderService} from "../loader/loader.service";
import {NgForOf} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  imports: [
    NgForOf,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ResultsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.loaderService.fetchResults();

  constructor(private router: Router, private loaderService: LoaderService) {}

  goBack(): void {
    this.router.navigate(['find'])
  }

  seeMore(): void {}
}

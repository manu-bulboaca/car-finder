import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
  imports: [
    MatExpansionModule,
    MatButtonModule,
  ]
})
export default class MoreDetailsComponent {
  public panelOpenState: boolean = false;

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['results']);
  }
}

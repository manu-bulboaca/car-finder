import { Component } from '@angular/core';
import {Router} from "@angular/router";

// TODO: Make this component standalone and import the needed angular-material modules

@Component({
  selector: 'more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent {
  public panelOpenState: boolean = false;

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['results']);
  }
}

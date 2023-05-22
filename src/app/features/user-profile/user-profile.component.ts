import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map} from "rxjs";

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [CommonModule, RouterLink],
  template: `
    <h1>User profile</h1>
    <div>
      <h2>Snapshot</h2>
      <p>userId: {{ userId }}</p>
      <pre>fullProfile: {{ fullProfile | json }}</pre>
    </div>
    <div>
      <h2>Observable</h2>
      <p>userId$: {{ userId$ | async }}</p>
      <pre>userIdData$: {{ userIdData$ | async | json }}</pre>
    </div>
    <button [routerLink]="['..', 125]">Display User 125</button>
  `,
  styles: [
    `
      div {
        border: 1px solid white;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 20px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

  private activatedRoute = inject(ActivatedRoute);
  userId = this.activatedRoute.snapshot.params['userId'];
  fullProfile = this.activatedRoute.snapshot.data;

  userId$ = this.activatedRoute.params.pipe(
    map(params => params['userId'])
  );
  userIdData$ = this.activatedRoute.data;

}

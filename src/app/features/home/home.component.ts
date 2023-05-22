import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  template: `
    <div>
    <button [routerLink]="['user-profile-full', 123]">
      Display profile for user 123 - full view
    </button>
    <button [routerLink]="['user-profile-limited', 123]">
      Display profile for user 123 - limited view
    </button>
    </div>
  `,
  styles: [`
    div {
      padding: 10px;
    display: flex;
      gap: 5px;
    flex-direction: column;
    }

    button {
      padding: 5px;
      font-size: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}

import { Component } from '@angular/core';
// @ts-ignore
import json from '../app/common/json/api.json';
import {Package} from './common/interfaces/package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  packages: Package[] = json.packages;
}

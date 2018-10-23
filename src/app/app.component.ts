import {Component} from '@angular/core';
import {Package} from './common/interfaces/package';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  packages: Package[] = null;

  constructor(private http: HttpClient) {
    this.http.get('src/app/common/json/api.json').subscribe(
      data => this.packages = data as Package[],
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}

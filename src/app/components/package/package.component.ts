import {Component, OnInit, Input} from '@angular/core';
import {Package} from '../../common/interfaces/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor() {
  }

  @Input() package: Package;
  presents: string[] = ['мышей', 'мышь', 'мыши', 'мыши', 'мыши', 'мышей'];
  selected  = false;

  ngOnInit() {
  }

  checkPackage() {
    this.selected = !this.selected;
    console.log(this.selected);
  }

}

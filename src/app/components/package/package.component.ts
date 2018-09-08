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
  selected  = false;
  hovered = false;

  ngOnInit() {
  }

  checkPackage() {
    if (!this.package.disabled) {
      this.selected = !this.selected;
      this.hovered = false;
    }
  }

  hover() {
    this.hovered = !this.hovered;
  }

}

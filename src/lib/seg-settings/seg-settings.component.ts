import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'lib-seg-settings',
  templateUrl: './seg-settings.component.html',
  styleUrls: ['./seg-settings.component.css']
})
export class SegSettingsComponent implements OnInit {
  thickness = 6;
  spacing = 1;
  count = 20;
  chars = '7-seg. display';
  color = '#f00';
  width = 40;
  height = 60;

  @ViewChild('box1') b1: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

}

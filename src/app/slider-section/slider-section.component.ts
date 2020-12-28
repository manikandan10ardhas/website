import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css']
})
export class SliderSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [{'image': 'assets/images/slider4.jpg'},{'image': 'assets/images/slider2.jpg'},{'image': 'assets/images/slider1.jpg'}];


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public indexBG: number = 1;

  constructor() {}

  ngOnInit(): void {}

  public previousBackground() {
    this.indexBG = this.indexBG === 1 ? 3 : this.indexBG - 1;
  }

  public nextBackground() {
    this.indexBG = this.indexBG === 3 ? 1 : this.indexBG + 1;
  }
}

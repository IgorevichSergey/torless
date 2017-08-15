import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-cafeteria-details',
  templateUrl: './cafeteria-details.component.html',
  styleUrls: ['./cafeteria-details.component.scss']
})
export class CafeteriaDetailsComponent implements OnInit {
  complete: number = 25; // 25, 50, 75, 100

  constructor(
    private renderer: Renderer
  ) { }

  ngOnInit() {
  }

  selectDay(event: MouseEvent) {
    let addClass: boolean = !(event.target as any).classList.contains('selected');
    this.renderer.setElementClass(event.target, 'selected', addClass);
  }

}

import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-branch-activity',
  templateUrl: './branch-activity.component.html',
  styleUrls: ['./branch-activity.component.scss']
})
export class BranchActivityComponent implements OnInit {
  complete: number = 0; // 25, 50, 75, 100
  checkedElement: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit() {

  }

  selectElement(elementName: string): void {
    this.checkedElement = elementName;
  }

}

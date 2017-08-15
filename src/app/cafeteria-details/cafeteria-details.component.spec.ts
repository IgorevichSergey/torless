import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaDetailsComponent } from './cafeteria-details.component';

describe('CafeteriaDetailsComponent', () => {
  let component: CafeteriaDetailsComponent;
  let fixture: ComponentFixture<CafeteriaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeteriaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeteriaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

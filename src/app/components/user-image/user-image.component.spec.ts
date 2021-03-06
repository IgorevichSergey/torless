import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageComponent } from './user-image.component';

describe('UserImageComponent', () => {
  let component: UserImageComponent;
  let fixture: ComponentFixture<UserImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

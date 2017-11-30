import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFacebookComponent } from './user-facebook.component';

describe('UserFacebookComponent', () => {
  let component: UserFacebookComponent;
  let fixture: ComponentFixture<UserFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToysComponent } from './user-toys.component';

describe('UserToysComponent', () => {
  let component: UserToysComponent;
  let fixture: ComponentFixture<UserToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

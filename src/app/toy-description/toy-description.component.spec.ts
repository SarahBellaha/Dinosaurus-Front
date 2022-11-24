import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyDescriptionComponent } from './toy-description.component';

describe('ToyDescriptionComponent', () => {
  let component: ToyDescriptionComponent;
  let fixture: ComponentFixture<ToyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

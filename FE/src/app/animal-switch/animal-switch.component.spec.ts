import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSwitchComponent } from './animal-switch.component';

describe('AnimalSwitchComponent', () => {
  let component: AnimalSwitchComponent;
  let fixture: ComponentFixture<AnimalSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

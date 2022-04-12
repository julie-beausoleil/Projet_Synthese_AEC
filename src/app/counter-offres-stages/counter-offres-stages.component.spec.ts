import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOffresStagesComponent } from './counter-offres-stages.component';

describe('CounterOffresStagesComponent', () => {
  let component: CounterOffresStagesComponent;
  let fixture: ComponentFixture<CounterOffresStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOffresStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOffresStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDemandesStagesComponent } from './counter-demandes-stages.component';

describe('CounterDemandesStagesComponent', () => {
  let component: CounterDemandesStagesComponent;
  let fixture: ComponentFixture<CounterDemandesStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDemandesStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDemandesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCandidatsComponent } from './counter-candidats.component';

describe('CounterCandidatsComponent', () => {
  let component: CounterCandidatsComponent;
  let fixture: ComponentFixture<CounterCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

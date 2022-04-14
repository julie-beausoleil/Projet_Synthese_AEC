import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterEntreprisesComponent } from './counter-entreprises.component';

describe('CounterEntreprisesComponent', () => {
  let component: CounterEntreprisesComponent;
  let fixture: ComponentFixture<CounterEntreprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterEntreprisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

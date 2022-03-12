import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDeStagesComponent } from './demandes-de-stages.component';

describe('DemandesDeStagesComponent', () => {
  let component: DemandesDeStagesComponent;
  let fixture: ComponentFixture<DemandesDeStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDeStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDeStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

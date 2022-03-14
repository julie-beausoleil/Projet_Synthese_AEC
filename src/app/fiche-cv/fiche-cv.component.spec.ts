import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCVComponent } from './fiche-cv.component';

describe('FicheCVComponent', () => {
  let component: FicheCVComponent;
  let fixture: ComponentFixture<FicheCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireInternshipRequestComponent } from './formulaire-internship-request.component';

describe('FormulaireInternshipRequestComponent', () => {
  let component: FormulaireInternshipRequestComponent;
  let fixture: ComponentFixture<FormulaireInternshipRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireInternshipRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireInternshipRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormulaireInternshipRequestComponent } from './dialog-formulaire-internship-request.component';

describe('DialogFormulaireInternshipRequestComponent', () => {
  let component: DialogFormulaireInternshipRequestComponent;
  let fixture: ComponentFixture<DialogFormulaireInternshipRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormulaireInternshipRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormulaireInternshipRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

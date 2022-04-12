import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDemandeComponent } from './fiche-demande.component';

describe('FicheDemandeComponent', () => {
  let component: FicheDemandeComponent;
  let fixture: ComponentFixture<FicheDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheStageComponent } from './fiche-stage.component';

describe('FicheStageComponent', () => {
  let component: FicheStageComponent;
  let fixture: ComponentFixture<FicheStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

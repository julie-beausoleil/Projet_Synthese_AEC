import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOffreStageComponent } from './liste-offre-stage.component';

describe('ListeOffreStageComponent', () => {
  let component: ListeOffreStageComponent;
  let fixture: ComponentFixture<ListeOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOffreStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

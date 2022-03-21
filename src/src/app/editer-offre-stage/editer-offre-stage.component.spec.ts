import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerOffreStageComponent } from './editer-offre-stage.component';

describe('EditerOffreStageComponent', () => {
  let component: EditerOffreStageComponent;
  let fixture: ComponentFixture<EditerOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerOffreStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

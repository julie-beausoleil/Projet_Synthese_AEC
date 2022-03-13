import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDemandeStageComponent } from './editer-demande-stage.component';

describe('EditerDemandeStageComponent', () => {
  let component: EditerDemandeStageComponent;
  let fixture: ComponentFixture<EditerDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerDemandeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

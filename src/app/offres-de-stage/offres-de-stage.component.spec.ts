import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresDeStageComponent } from './offres-de-stage.component';

describe('OffresDeStageComponent', () => {
  let component: OffresDeStageComponent;
  let fixture: ComponentFixture<OffresDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

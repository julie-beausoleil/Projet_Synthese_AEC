import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerEntrepriseComponent } from './editer-entreprise.component';

describe('EditerEntrepriseComponent', () => {
  let component: EditerEntrepriseComponent;
  let fixture: ComponentFixture<EditerEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

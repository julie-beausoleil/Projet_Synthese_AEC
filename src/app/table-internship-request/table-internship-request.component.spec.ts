import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInternshipRequestComponent } from './table-internship-request.component';

describe('TableInternshipRequestComponent', () => {
  let component: TableInternshipRequestComponent;
  let fixture: ComponentFixture<TableInternshipRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInternshipRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInternshipRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

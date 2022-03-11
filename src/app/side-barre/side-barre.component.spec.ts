import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarreComponent } from './side-barre.component';

describe('SideBarreComponent', () => {
  let component: SideBarreComponent;
  let fixture: ComponentFixture<SideBarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

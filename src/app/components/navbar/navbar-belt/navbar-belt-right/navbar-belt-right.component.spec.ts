import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBeltRightComponent } from './navbar-belt-right.component';

describe('NavbarBeltRightComponent', () => {
  let component: NavbarBeltRightComponent;
  let fixture: ComponentFixture<NavbarBeltRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarBeltRightComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBeltRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBeltContainerComponent } from './navbar-belt-container.component';

describe('NavbarBeltContainerComponent', () => {
  let component: NavbarBeltContainerComponent;
  let fixture: ComponentFixture<NavbarBeltContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarBeltContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBeltContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

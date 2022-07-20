import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBeltLeftComponent } from './navbar-belt-left.component';

describe('NavbarBeltLeftComponent', () => {
  let component: NavbarBeltLeftComponent;
  let fixture: ComponentFixture<NavbarBeltLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarBeltLeftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBeltLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

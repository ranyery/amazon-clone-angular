import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBeltSearchComponent } from './navbar-belt-search.component';

describe('NavbarBeltSearchComponent', () => {
  let component: NavbarBeltSearchComponent;
  let fixture: ComponentFixture<NavbarBeltSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarBeltSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBeltSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

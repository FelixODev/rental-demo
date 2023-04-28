import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeasePage } from './lease.page';

describe('LeasePage', () => {
  let component: LeasePage;
  let fixture: ComponentFixture<LeasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateLeasePage } from './create-lease.page';

describe('CreateLeasePage', () => {
  let component: CreateLeasePage;
  let fixture: ComponentFixture<CreateLeasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateLeasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

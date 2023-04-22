import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAssetPage } from './create-asset.page';

describe('CreateAssetPage', () => {
  let component: CreateAssetPage;
  let fixture: ComponentFixture<CreateAssetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

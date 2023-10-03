import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicNgPage } from './basic-ng.page';

describe('BasicNgPage', () => {
  let component: BasicNgPage;
  let fixture: ComponentFixture<BasicNgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasicNgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

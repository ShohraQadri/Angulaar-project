import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UpdateTodoPage } from './update-todo.page';

describe('UpdateTodoPage', () => {
  let component: UpdateTodoPage;
  let fixture: ComponentFixture<UpdateTodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

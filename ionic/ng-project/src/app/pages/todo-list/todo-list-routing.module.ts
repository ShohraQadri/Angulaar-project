import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListPage } from './todo-list.page';

const routes: Routes = [
  {
    path: '',
    component: TodoListPage
  },
  {
    path: 'update-todo',
    loadChildren: () => import('./update-todo/update-todo.module').then( m => m.UpdateTodoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListPageRoutingModule {}

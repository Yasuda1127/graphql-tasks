import { Injectable } from '@nestjs/common';
import { Task } from './modes/task.model';

// アプリケーションで実現したい機能を定義する
// 、データの処理、データベースアクセス、外部API呼び出し、計算、ロジックの実行など、さまざまなタスクを実行?

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    // const task1 = new Task();
    // task1.id = 1;
    // task1.name = '';
    // task1.dueDate = '2023-01-01';
    // task1.status = 'NOT_STARTED';
    // this.tasks.push(task1);
    return this.tasks;
  } // task一覧を取得するメソッド

  createTask(name: string, dueDate: string, description?: string): Task {
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);

    return newTask;
  }
}

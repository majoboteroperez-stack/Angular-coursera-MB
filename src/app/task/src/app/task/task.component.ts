import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent {

  @HostBinding('class') clases = 'container';

  tasks: string[] = ['Estudiar Angular', 'Hacer ejercicio'];

  addTask(newTask: string) {
    if (newTask.trim() !== '') {
      this.tasks.push(newTask);
    }
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray = [{ taskName: 'Adicionar tarefas', isCompleted: false }];

  ngOnInit(){
    this.taskArray = JSON.parse(localStorage.getItem('taskData')!);
  }

  onSubmit(form: NgForm){
   this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    this.onSave();
    form.reset();
  }

  onDelete(index: number){
    this.taskArray.splice(index, 1);
    this.onSave();
  }

  onCheck(index: number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    this.onSave();
  }

  onSave(){
    localStorage.setItem('taskData', JSON.stringify(this.taskArray));
  }

}

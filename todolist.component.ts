import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  values: any = [];
  tasks = new FormGroup({
    task: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.tasks.markAllAsTouched();
    if (this.tasks.valid) {
      this.values.push(this.tasks.value);
      console.log(this.values);
    }else{
      console.log("error")
    }
  }

  onDelete(index: number) {
    this.values.splice(index, 1);
  }
}

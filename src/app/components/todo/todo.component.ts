import { Component, OnInit } from '@angular/core';
import { Todo} from 'src/app/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[]=[];
  newTodo:String;

  constructor() { }

  ngOnInit(): void {
  }


  saveTodo(){
    if(this.newTodo){
      let tod = new Todo();
      tod.name = this.newTodo;
      tod.completed =true;
      this.todos.push(tod);
      this.newTodo =  '';
    }else{
      alert("Please enter task");
    }
  }

  doneTask(id:number){
    this.todos[id].completed = !this.todos[id].completed;
  }
  
  deleteTodo(id:number){
    this.todos =this.todos.filter((v,i)=>i!==id);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from "@angular/router";
import { SharedService } from 'src/app/shared/shared.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  submitted = false;
  reactiveForm=new FormGroup({
    name:new FormControl(),
    password : new FormControl(),
    skills : new FormControl(),
    gender : new FormControl(),
    qualification : new FormControl()
  });
  gender: string[] = ['Male', 'Female', 'Other'];
  listData: any;
  
  
  constructor(private fb: FormBuilder , private router : Router , private shared : SharedService ) { }

  ngOnInit(): void {
    this.listData = [];
    
    
    this.reactiveForm =this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      gender: ['', [Validators.required]],
      skills: [''],
      qualification: ['']
    });
    
  }

  onReset() {
    this.submitted = false;
  }

  task: Task = {
    name: 'Skills',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'python', completed: false, color: 'primary'},
      {name: 'java', completed: false, color: 'primary'},
      {name: 'php', completed: false, color: 'primary'},
      {name: 'node.js', completed: false, color: 'primary'}
    ]
  };
  
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  codeList = [
    { name: 'BE' },
    { name: 'MTech' },
    { name: 'BTech' },
    { name: 'MBA' },
    { name: 'IIT' },
    { name: 'Diploma' }
  ];
  
  public saveCode(e:any): void {
    let name = e.target.value;
    let list = this.codeList.filter(x => x.name === name)[0];
  }

  onSubmit () {
    this.listData.push(this.reactiveForm.value);
    this.router.navigateByUrl('/bootstrap');
    this.reactiveForm.reset();
    console.log(this.listData);
    this.shared.setInputData(this.listData)
    
  }

  

  
}
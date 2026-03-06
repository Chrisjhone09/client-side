import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  loginAnimation : string = ""

  isBtnClicked = false;
  constructor(private route : Router) {}
  ngOnInit(): void {
    this.loginAnimation="scale-in"
  }
  

  showMessage() {
    this.isBtnClicked =true;
  }

  login(){
    
  }

  clickRegister() {
    this.loginAnimation = "scale-out"
    }
}

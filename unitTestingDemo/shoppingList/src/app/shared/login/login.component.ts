import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  userName:string
  showNotFound:boolean = false;
  ngOnInit() {
  }

  login(){
    this.authService.login(this.userName).subscribe(()=>{
      if(this.authService.currentUser){
        this.router.navigate(['/']);
      }else{
        this.showNotFound = true;
      }
    })
  }

}

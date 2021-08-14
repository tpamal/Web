import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  user;
  token = localStorage.getItem('token');

  constructor(private router: Router, private userService: UserService) { 
    this.user = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit(): void {
    if(this.token == undefined){
      this.router.navigateByUrl('home');
    }else if(this.token != undefined){
console.log('Si tienes permiso para estar acá');
    }
    console.log(this.user)
  }

  onSubmit(){
    this.userService.updateUser(this.user).subscribe((res:any)=>{
      if(res.user){
        localStorage.setItem('user', JSON.stringify(res.user));
        alert('Usuario actualizado exitosamente');
      }else{
        alert('Error al actualizar tus datos, intenta de nuevo más tarde o ponte en contacto con soporte')
      }
    })
  }

  deleteAccount(){
    this.userService.deleteUser(this.user._id).subscribe((res:any)=>{
      if(res.message){
        localStorage.clear();
        alert('Cuenta de usuario eliminada');
        this.router.navigateByUrl('home');
      }else{
        alert('Error al eliminar tu cuenta')
      }
    });
  }

}

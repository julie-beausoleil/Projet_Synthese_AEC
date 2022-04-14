import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  valider(firstname: string, email: string){
    if( firstname ===''|| email ===''){
     
      alert("les champs doivent etre remplis ");
    } 
    else{
      this.router.navigate(["tableau-de-bord"]);
    } 
  }

}
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ServiciosService } from '../../services/servicios.service'; 
/*
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';/*
import { FormService } from '../../services/servicios.service'; */
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,  
    private authenticationService: AuthenticationService,
    private FormsService: ServiciosService,
    ) { }

    model: any = {};
    loading = false;
    returnUrl: string;
    config:any;
    //segmento:any;
    //sucursal:any;

    public sucursales = new Array<any>();
    public sucursal = new Array<any>();
    public sucursalId = new Array<any>();
    public subsidiary = new Array<any>();

    public segmento = new Array<any>();

    public token:any;
    public tokenStorage:any;


    /*,
    private alertService: AlertService
    
    private authenticationService: AuthenticationService,
    private alertService: AlertService*/

  ngOnInit() {
   this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
     /*
    $("div").each(function(){
        if($("div").hasClass("login")){
        }
    })*/
    this.tokenStorage  = localStorage.getItem('token');

    if( this.tokenStorage == null){
        console.log("no hay token");
    }else {
        console.log(JSON.parse(localStorage.getItem('token')));
    }

    //console.log(this.token );
    this.tokenStorage  = JSON.parse(localStorage.getItem('token'));/**/
    //console.log(this.tokenStorage);
   }
   login() {
 
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
               
                for(let item of data.results) {
                    this.config = item.config 
                    this.token = item.token;
                 // this.tokenStorage = this.token;
                    localStorage.setItem('token', JSON.stringify(this.token));            
                }

                for(let item of this.config){
                    this.segmento.push(item.segment); 
                }

                for(let item of this.segmento){
                    this.subsidiary = item.subsidiary;
                    for(let item2 of this.subsidiary){
                        let guardo = true;
                        for(let item3 of this.sucursal){ 
                            if (item3.id == item2.id) {
                                guardo = false;
                                break;
                            }
                        }
                       // let sucursalId = item2.id;
                        const sucursal_object= {
                            name: item2.name,
                            id: item2.id
                        }
                        if (guardo) {
                            this.sucursal.push(sucursal_object);    
                        }
                        
                        localStorage.setItem('sucursales', JSON.stringify(this.sucursal));
                    } 
                 
                } 
                console.log(JSON.parse(localStorage.getItem('token')));
                this.router.navigate(['home']);
               
            },
            error => {
              console.log(error);
            }); 
       }

       /*
        sucursal2 = [
           {
             id:23,
             name:'nombre', 
           },
           {
            id:23,
            name:'nombre', 
           },
        ]*/

  OnDestroy(){
      //this.HeaderComponent:OnDestroy;
  }

}

/*
 
 //encapsulation: ViewEncapsulation.Emulated,
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    //this._ref.destroy(); 

    constructor(
        private route: ActivatedRoute,
        private FormsService: FormService,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        this.authenticationService.logout();
 
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }
 
    
  
}*/

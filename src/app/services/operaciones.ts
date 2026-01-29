import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Operaciones {
  private operaciones="operaciones";

  setCookie(name:string, value:string, days:number=7) {
    const date=new Date(Date.now()+days * 864e5).toUTCString();
    document.cookie=`${name}=${value};expites=${date};path=/`;
  }

  getCookie(name:string):string|null{
    const cookies = document.cookie.split('; '); 
    const cookie = cookies.find(row => row.startsWith(name + '=')); 
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null
  }

  logOperation(operation:string){
    console.log("operacion:"+operation);

    const actual=this.getCookie(this.operaciones);
    const opetations=actual?JSON.parse(actual):[];
    opetations.push({
      action:operation,
      timestamp:new Date().toISOString()
    })

    
    this.setCookie(this.operaciones,JSON.stringify(opetations));
  }

  getOperations() { 
    const current = this.getCookie(this.operaciones); 
    return current ? JSON.parse(current) : []; 
  }
}

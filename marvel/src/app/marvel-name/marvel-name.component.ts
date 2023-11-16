import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel-name',
  templateUrl: './marvel-name.component.html',
  styleUrls: ['./marvel-name.component.css']
})
export class MarvelNameComponent {
  routeObs !: Observable<ParamMap>
  obs !: Observable<any>
  marvelList !: any
  constructor(private api: ApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.routeObs = this.route.paramMap
    this.routeObs.subscribe(this.getParam)
  }
  getParam = (params : ParamMap)=>{
    let id = params.get('id')
    this.routeObs = this.api.stillSee(id)
    console.log(id);
    
    if(id != null){
      this.routeObs.subscribe((data : any)=>
      {
        this.marvelList = data;
        console.log(this.marvelList);
        
      })
    }
  }
}

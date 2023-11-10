import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Root,Data } from 'src/models/one.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel';
  obs!: Observable<Root>
  marvelList !: Data;
  constructor(private api : ApiService){
      this.obs = this.api.makeRequest()
      this.obs.subscribe(this.show)
    }
    show= (data:Root)=>{
      this.marvelList = data.data
      
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonServiceService } from '../mon-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  title = "Hello Comp 1!";
  stagiaires = [];
  monJson;
  monApi;
  constructor(private activatedRoute: ActivatedRoute, private monService: MonServiceService, private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(params =>
    //   console.log(params.get('param'))
    // );
    // this.getStagiaires();
    this.getJSONStagiaires()
    this.getAPIJson();
  }

  // getStagiaires() {
  //   this.stagiaires = this.monService.donnees();
  // }

  getJSONStagiaires() {
    return this.monService.donneesJSON()
      .subscribe(data => this.monJson = data)
  }

  getAPIJson(){
    return this.monService.donneesApi()
      .subscribe(data => this.monApi = data)
  }

}

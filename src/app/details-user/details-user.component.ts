import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  user: Object;
  constructor(
    private monService: MonServiceService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.route.params.subscribe(params => this.user = params.id);
    this.monService.getUserById(this.user).subscribe(
      data => this.user = data
    )
  }

}

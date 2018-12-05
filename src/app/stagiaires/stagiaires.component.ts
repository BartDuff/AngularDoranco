import { Component, OnInit } from '@angular/core';
import { StagiaireService } from '../stagiaire.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { StagiaireModel } from '../shared/stagiaire-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css']
})
export class StagiairesComponent implements OnInit {
  stagiaires;
  constructor(private stagiaireService: StagiaireService, private db : AngularFirestore) { }

  ngOnInit() {
    this.getStagiaires().subscribe( data => this.stagiaires = data);
  }

  getStagiaires(){
    return this.db.collection('Stagiaires').valueChanges();
  }

}

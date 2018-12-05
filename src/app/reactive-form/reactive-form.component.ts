import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TouchSequence } from 'selenium-webdriver';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  stagiaire: Object;

  constructor(private formBuilder: FormBuilder, 
    private toastr: ToastrService, 
    private db : AngularFirestore,
    private route: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id : ['', Validators.required],
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      age : [ '', Validators.required] 
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.toastr.success('Formulaire correctement soumis', 'Stagiaires');
      this.stagiaire={
        id:parseInt(this.form.value.id),
        nom:this.form.value.nom,
        prenom:this.form.value.prenom,
        age:parseInt(this.form.value.age)
      };
      this.db.collection('Stagiaires').add(this.stagiaire);
      this.route.navigate(['stagiaires']);
    }
    else {
      this.toastr.error('Formulaire incorrect', 'Stagiaires')
    }
  }

}

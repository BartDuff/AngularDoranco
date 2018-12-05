import { Injectable } from '@angular/core';
import { StagiaireModel } from './shared/stagiaire-model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  formDonnee: StagiaireModel;
  constructor() { }
}

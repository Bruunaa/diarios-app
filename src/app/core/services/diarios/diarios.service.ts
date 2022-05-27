import { Injectable } from '@angular/core';
import { collectionData, doc, docData, Firestore, query, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Diario, DiarioConverter } from '../../models/diario';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DiariosService {

  constructor(private db: Firestore, private authService: AuthService) { }

  //referência a uma possível coleção do firestore
  diarios = collection(this.db, 'diarios').withConverter(DiarioConverter);

  getTodosDiarios():Observable<Diario[]>{
    //collectionData - extrai coleção do firestore
    return collectionData(this.diarios, {idField: 'id'}); //id referenciando o campo da interface
  }

  getDiarioUsuario():Observable<Diario[]>{
    return collectionData(
      query(this.diarios, where('usuarioId', '==', this.authService.uid)),
      { idField: 'id'}
      );
  }  

  getDiarioById(id: string): Observable<Diario>{
    const diarioDoc = doc(this.diarios, id);
    return docData(diarioDoc, {idField:'id'});
  }

}

/*
Listar os diários (todos)
Listas os diarios (Usuario Logado)
Diario por Id
Adicionar novo diario
Atualizar Novo diario
Deletar Diario
*/

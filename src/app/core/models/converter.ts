import { DocumentSnapshot } from "@angular/fire/firestore";

// modelo para criar interface de conversão
export interface Converter<T> {
    toFirestore(data: T): any;  //conversão antes de enviar para o firestore
    fromFirestore(snapshot: DocumentSnapshot, options: any): T; // conversão quando recebe o firestores 
}

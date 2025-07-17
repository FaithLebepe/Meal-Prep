import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.contactCollection = collection(this.firestore, 'contacts');
  }

  submitMessage(data: { name: string; email: string; message: string }) {
    return addDoc(this.contactCollection, data);
  }
}

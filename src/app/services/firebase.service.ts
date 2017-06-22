import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule,  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.listings = db.list('/listings') as FirebaseListObservable<Listing[]>;
    //console.log(this.listings);  
}
  
  getListings() {
    return  this.listings;
  }
}

interface Listing {
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms:string;
}
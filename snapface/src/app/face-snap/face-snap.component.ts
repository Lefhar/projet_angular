import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;
 title! : string;
 description! : string;
 createdAt! : Date;
 snaps!:number
 imageUrl!:string;
 ButtonSnaps!: string;
 UserHasSnap!:boolean;

 ngOnInit(): void {
  this.title = "mon titre";
  this.description = "ma description";
  this.createdAt = new Date();
  this.snaps= 2;
  this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.ButtonSnaps = "+1 Snap";
  this.UserHasSnap = false;
 }

 onSnap(): void {
  if(this.UserHasSnap){
    this.faceSnap.snaps--;
    this.ButtonSnaps = "-1 Snap";
    this.UserHasSnap = false;
  }else{
    this.faceSnap.snaps++;
    this.ButtonSnaps = "+1 Snap";
    this.UserHasSnap = true;
  }
  
 }
}
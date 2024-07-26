import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "mon titre",
      "ma description",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       2
    
    );
    this.myOtherSnap = new FaceSnap(
      "mon titre 1",
      "ma description 1",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       1
    
    );   
    
    this.myLastSnap = new FaceSnap(
      "mon titre 3",
      "ma description 3",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       6
    
    );
    this.mySnap.setLocation('amiens');
    this.myLastSnap.setLocation('corbie');
  }
}

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
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps= [
      new FaceSnap(
      "mon titre",
      "ma description",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       2
    
    ),
     new FaceSnap(
      "mon titre 1",
      "ma description 1",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       1
    
    ),   
    
    new FaceSnap(
      "mon titre 3",
      "ma description 3",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       6
    
    )
  ];
    this.faceSnaps[0].setLocation('amiens');
    this.faceSnaps[2].setLocation('corbie');
  }
}

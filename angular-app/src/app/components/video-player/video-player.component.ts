import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  public id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id_ = this.route.snapshot.paramMap.get('id');
    if (id_) {
      this.id = id_;
    }
  }

}

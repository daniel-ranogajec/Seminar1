import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/Video';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  @Output() onDeleteVideo: EventEmitter<Video> = new EventEmitter()
  faTimes = faTimes;
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(video: Video) {
    this.onDeleteVideo.emit(video);
  }

}

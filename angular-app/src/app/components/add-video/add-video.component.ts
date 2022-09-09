import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/Video';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  @Output() onAddVideo: EventEmitter<string> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title) {
      this.onAddVideo.emit(this.title);

      this.title = '';
    }
  }

}

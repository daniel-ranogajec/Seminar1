import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
import { Video } from 'src/app/Video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((videos) => this.videos = videos);
  }

  deleteVideo(video: Video) {
    this.videoService.deleteVideo(video).subscribe(() => {this.videos = this.videos.filter((v) => v.id !== video.id)})
  }
  
  addVideo(title: string) {
    this.videoService.addVideo(title).subscribe((video) => this.videos.push(video))
  }
}

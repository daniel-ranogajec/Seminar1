import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Video } from 'src/app/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:8000'

  constructor(private http:HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl)
  }

  deleteVideo(video: Video): Observable<Video> {
    const url = this.apiUrl + "/remove";
    return this.http.post<Video>(url, {id: video.id})
  } 

  addVideo(title: string): Observable<Video> {
    const url = this.apiUrl + "/search";
    return this.http.post<Video>(url, {Title: title})
  }
}

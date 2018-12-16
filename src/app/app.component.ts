import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public filesToUpload: Array<File> = [];
  public url = '';

  constructor(private http: HttpClient) {

  }

  handleFileInput(event: any) {
    this.filesToUpload = <Array<File>>event.target.files;
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  submitImage() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('uploads[]', files[0], files[0]['name']);
    this.http.post(`http://localhost:3000/image/add`, formData)
      .subscribe(data => {
        console.log(data);
      }
    );
  }

}

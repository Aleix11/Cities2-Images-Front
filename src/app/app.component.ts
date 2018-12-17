import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public filesToUpload: Array<File> = [];
  public filesToUpload: FileList;
  public url = '';

  constructor(private http: HttpClient) {

  }

  handleFileInput(event: any) {
    this.filesToUpload = event.target.files;
    // this.filesToUpload = <Array<File>>event.target.files;
    // if (event.target.files && event.target.files[0]) {
    //   let reader = new FileReader();
    //
    //   reader.onload = (event: any) => {
    //     this.url = event.target.result;
    //   };
    //
    //   reader.readAsDataURL(event.target.files[0]);
    //   console.log(reader);
    // }
  }

  submitImage() {
    let file: File = this.filesToUpload[0];
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    console.log(formData, this.filesToUpload);
    this.http.post(`http://localhost:3000/image/add`, formData)
      .subscribe(data => {
        console.log(data);
      }
    );
  }

}

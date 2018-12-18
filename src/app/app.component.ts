import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const  httpOptions = { headers: new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
})
};

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
  // handleFileInput(event: any) {
  //   this.filesToUpload = event.target.files;
  // }
  //
  // submitImage() {
  //   let file: File = this.filesToUpload[0];
  //   const formData: FormData = new FormData();
  //   formData.append('uploadFile', file, file.name);
  //   console.log(formData, this.filesToUpload);
  //   this.http.post(`http://localhost:8000/test`, formData, httpOptions)
  //     .subscribe(data => {
  //       console.log(data);
  //     }
  //   );
  // }

  base64textString: any;
  handleFileInput(event: any) {
    let files = event.target.files;
    let file = files[0];
    if (files && file) {
      let reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  submitImage() {
    this.http.post(`http://localhost:3000/myapp/image/add`, this.base64textString, httpOptions)
      .subscribe(data => {
          console.log(data);
        }
      );
  }

}

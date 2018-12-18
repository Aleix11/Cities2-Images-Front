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
    this.http.post(`http://localhost:3000/myapp/image/add`, this.base64textString)
      .subscribe(data => {
          console.log(data);
        }
      );
    }

}

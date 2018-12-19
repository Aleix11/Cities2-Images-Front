import {Component, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material";

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

  constructor(private http: HttpClient,
              public snackBar: MatSnackBar) {
    this.http.get(`http://localhost:3000/myapp/image/hi`, httpOptions)
      .subscribe(data => {
          console.log(data);
        }
      );
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
        let result: String = '';
        if (data === 0) {
          result = 'Ascensor';
        } else if (data === 1) {
          result = 'Floristeria';
        } else if (data === 2) {
          result = 'Armari';
        }
        this.snackBar.openFromComponent(PizzaPartyComponent, {
          duration: 10000,
          data: {
            option: result
          }
        });
        }
      );
    }

}



@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }
}

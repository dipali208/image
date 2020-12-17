import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public selectedFile: any;
  public article = {categoryName: ''};
    constructor(private http: HttpClient,
    //   private dialogRef: MatDialogRef<AddCategoryComponent>,
    // @Inject(MAT_DIALOG_DATA) private data: any
    ) { }
  
    ngOnInit(): void {
    }
    fileUpload(event:any) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
    fileUploadHandler(event:any) {
      event.preventDefault();
      console.log(this.article.categoryName);
  
      const data: FormData = new FormData();
      data.append( 'catimage', this.selectedFile);
      data.append('categoryName', this.article.categoryName);
      console.log(data);
      
      this.http.post('http://localhost:8080/api/cat', data)
      .subscribe((res:any) => {
        if(res['status'] === 200) {
          alert("njdcnkjdw")
         }
      })
    }

}

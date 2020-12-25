import { Component, ViewChild,OnInit } from '@angular/core';

import { ResponseMessage } from 'src/app/models/response-message';
import { StatusCode, FileType } from 'src/app/enums/enums';

import { timer } from 'rxjs';
import { Papa } from 'ngx-papaparse';
import { FillingDataService } from 'src/app/services/fillingData.service';
@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {
  totalNotSave: string;
  lstSession: any;
  config:any;
  sortColumnName:any;
  sortReverse:any;
  file:any;
  lstType=Object.keys(FileType).filter(
    (type) => isNaN(<any>type) && type !== 'values'
  );
  constructor(private papa:Papa,private fillingService:FillingDataService) {
    this.config = {
      itemsPerPage:20,
      currentPage: 1,
      totalItems: this.records.length
    };
   }

  ngOnInit() {

  }
  totalSave:any;
  usersNotSaved:string;
  public records: any[] = [];  
   csvReader: any;  
  lstHeader:Array<string>=[];
  Candidate:any;
  uploadListener($event: any): void {  
    let headerArray = []; 
    this.totalSave=0;
    this.totalNotSave="";
    this.lstHeader=[];
    this.records = [];  
    let text = [];  
    let files = $event.srcElement.files;  
    const formData: FormData = new FormData();
    if (this.isValidCSVFile(files[0])) {  
      this.file=files[0];
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
      reader.onload = (event: any) => {
        var csv = event.target.result; // Content of CSV file
        this.papa.parse(csv, {
          skipEmptyLines: true,
          header: true,
          complete: (results) => {
            for (let i = 0; i < results.data.length; i++) {
           
             this.records.push(results.data[i]);
            }

          }
        });
        this.lstHeader=Object.keys(this.records[0]);
        console.log(this.lstHeader);
        this.totalSave=this.records.length;
      }
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
   //this.records=rea
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, header:any) {  
    let csvArr = [];  
    let re = "|";
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(','); 
      let csvRecord: any=new Object();  
      for(let j=0;j<header.length;j++){
        let str="";
        if (curruntRecord[j]!=null) {
          str=curruntRecord[j].split('|').join(",");
        }
       
        csvRecord[header[j]]=str;

      }  
      csvArr.push(csvRecord);  
      
    }  
    console.log(header)
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
 
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }
  uploadCandidate(){
    const formData: FormData = new FormData();
    formData.append('fileKey', this.file, this.file.name);
    debugger;
    this.fillingService.uploadData(formData).subscribe((res:any)=>{

    })
    // formData.append('fileType',this.Candidate.FileType)

    // if (this.records.length>0) {
    //   this.saveCandidate(0,1);
    // } else {
      
    // }
  }
  saveCandidate(start:number,end:number){
    if (start<=this.records.length) {
      
   
 
   }
    // if (start<this.records.length) {
    //  this.delay(1000).then(()=>this.saveCandidate(end , end+15000));
    // }
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}

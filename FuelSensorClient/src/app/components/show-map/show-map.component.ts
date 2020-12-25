import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.component.html',
  styleUrls: ['./show-map.component.css']
})
export class ShowMapComponent implements OnChanges  {

  @Input() latitude: any;
  @Input() longitude: any;
  
  

  ngOnChanges() {

    

// alert(this.latitude);
// alert(this.longitude);
  }

}



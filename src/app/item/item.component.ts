import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	@Input() item;
	
  constructor() { }

  ngOnInit() {
  }


  formatUrl(url : string){
	  		var splitURL = url != null ? url.split('//').map(val => val ) : null;
	  		var split = splitURL ? splitURL[1].split('/'):null;
	  		var newUrl = split[0].includes('www') ? split[0].split('.')[1]+'.'+split[0].split('.')[2] : split[0];
	  		// console.log(splitURL2[1])
	  		// let result = url.replace(/(^\w+:|^)\/\//, '');
	  		// console.log(resu)
	  		return newUrl;
	  }

}

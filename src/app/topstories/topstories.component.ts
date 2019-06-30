import { Component, OnInit } from '@angular/core';
import { GetNewsQuery } from './graphql/query';
import { Apollo } from 'apollo-angular';
import { map, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.scss']
})
export class TopstoriesComponent implements OnInit {
	items: any[];
	isLoading:Boolean=true;
	  constructor(private _apollo: Apollo) { }

	  ngOnInit() {
	  	this.formatUrl("https://mstoeckl.com/notes/gsoc/blog.html")
	  	this._apollo.watchQuery<any>({
	      query: GetNewsQuery
	    })
	     .valueChanges
	     .subscribe(({ data, loading }) => {
	       this.isLoading = loading;
	       console.log(data)
	       this.items = data.hn.topStories;
	     })
	  }


	  formatUrl(url : string){
	  		var splitURL = url != null ? url.split('//').map(val => val ) : null;
	  		var split = splitURL ? splitURL[1].split('/'):null;
	  		var newUrl = split[0].includes('www') ? split[0].split('.')[1]+'.'+split[0].split('.')[2] : split[0];
	  		// console.log(splitURL2[1])
	  		console.log(newUrl)

	  		// let result = url.replace(/(^\w+:|^)\/\//, '');
	  		// console.log(resu)
	  		return newUrl;
	  }

}

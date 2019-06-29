import { Component, OnInit } from '@angular/core';
import { GetNewsQuery } from './graphql/query';
import { Apollo } from 'apollo-angular';
import { map, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

import gql from 'graphql-tag';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
 	
   news: Observable<any>;
  constructor(private apollo: Apollo) {
    //  apollo.query({
    //   query:gql`
    //       query books {
    //         books {
    //           title
    //           author
    //         }
    //       }`
    // })
    // .pipe(map(data => console.log("Data",data)))
   }

  ngOnInit() {
  	 this.apollo.watchQuery<any>({
      query: GetNewsQuery
    })
     .valueChanges
     .subscribe(({ data, loading }) => {
       console.log(loading)
       console.log(data)
     })
  }

  loadData(){
    //  this.apollo.query({
    //   query:gql`
    //       query books {
    //         books {
    //           title
    //           author
    //         }
    //       }`
    // })
    // .pipe(map(data => console.log("Data",data)))
  	// this.apollo.watchQuery<any>({
  	// 	query: gql`
  	// 		query books {
			// 		  books {
			// 		    title
			// 		    author
			// 		  }
			// 		}
			// 	`
  	// });

  }

}

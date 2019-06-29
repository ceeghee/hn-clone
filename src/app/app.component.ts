import { Component } from '@angular/core';
// import { GetNewsQuery } from './graphql/query';
import { Apollo } from 'apollo-angular';
import { map  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coins';

  // apollo: Apollo;

  constructor(private apollo: Apollo){

  }

  ngOnInit() {
  	 this.apollo.query({
      query:gql`
          {
            hn {
              topStories(limit: 30, offset: 0) {
                id,
                by {
                  id
                },
                timeISO, 
                url,
                title,
                score,
                descendants
              }
            }
          }
          `
    })
    // .subscribe(data => console.log(data))
  }

}

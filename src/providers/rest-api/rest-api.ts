import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestApiProvider {

posts: any;
private apiUrl = 'http://yprm-online.org/wp-json/wp/v2';

  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }

  async getPosts(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts?_embed&categories=8&filter[orderby]=rand&filter[posts_per_page]=6')
      .subscribe(data => {resolve(data)})
    })
  }

}

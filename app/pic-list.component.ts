import {Component, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Card} from './card.model';
import {Http, Response} from 'angular2/http';
import {PicDetailsComponent} from './pic-details.component'

@Component ({
  selector: 'pic-list',
  outputs: ['onAddToCart'],
  directives: [PicDetailsComponent],
  template: `
  <h2>API test</h2>
  <div class="picList">
    <a href="https://www.instagram.com/oauth/authorize/?client_id=8c5216dd5794464581e482d259b9aecf&redirect_uri=http://localhost:3000&response_type=token">Instagram Login</a>
    <a target="blank" href="https://instagram.com/accounts/logout/">Instagram Logout</a>
    <div *ngFor="#currentPic of pics" class="picture">
      <img src="{{currentPic.images.standard_resolution.url}}" (click)="picClicked(currentPic)">
      <pic-details [pic]="currentPic" *ngIf="currentPic === selectedPic" (onAddToCart)="addToCart($event)"></pic-details>
    </div>
  </div>
  `
})

export class PicListComponent {
  public token = 'access_token=3128477430.8c5216d.5551b14da14a40ed9c77579a4d83484e';
  public pics = [];
  public onAddToCart: EventEmitter<any>;
  public selectedPic: Card;
  constructor(private http:Http) {
    this.onAddToCart = new EventEmitter();
  }

  ngOnInit() {
    console.log(window.location.href);
    var userToken = window.location.href;
    if (window.location.href.length > 25) {
      this.token = userToken.slice(23);
    }
    console.log(this.token);

    this.getPics();
  }

  getPics() {
    return this.http.get('https://api.instagram.com/v1/users/self/media/recent?' + this.token).map((res:Response) => res.json()).subscribe(
      // the first argument is a function which runs on success
      data => { this.pics = data.data},
      // the second argument is a function which runs on error
      err => console.error(err)
      // the third argument is a function which runs on completion
      // () => console.log(this.pics)
    );
  }



  picClicked(clickedPic: Card) {
    console.log('click pic works!');
    if(this.selectedPic === clickedPic) {
      this.selectedPic = undefined;
    } else {
      this.selectedPic = clickedPic;
    }
  }

  addToCart(pic: Card) {
    this.onAddToCart.emit(pic);
  }
}

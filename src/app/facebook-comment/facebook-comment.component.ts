import { Component, OnInit, Input } from '@angular/core';

declare const FB: any;

@Component({
  selector: 'app-facebook-comment',
  templateUrl: './facebook-comment.component.html',
  styleUrls: ['./facebook-comment.component.css']
})
export class FacebookCommentComponent implements OnInit {

  @Input() currentUrl: string;
  
  constructor() {
    FB.init({
      appId: "1225089034202194",
      xfbml: true,
      version: "v2.7"
    });
  }

  ngOnInit() {
    // FB.XFBML.parse();
  }


}

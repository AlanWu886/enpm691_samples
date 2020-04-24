import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  post = 'test';
  // comment = ['comment1','comment2','comment3', '<img src="11" onerror="console.log(window.localStorage)" />','<img src="11" onerror="console.log(window.navigator.userAgent)" />'];
  // <img src="11" onerror="javascript:document.location.href='mailto:xyz@gmail.com';"/>
  // <img src="11" onerror="javascript:window.open(\'https://alanwu886.github.io/#!\');"/>
  // <script>window.open('https://alanwu886.github.io/#!')</script>
  // <img src="11" onerror="javascript:document.cookie;" />

  comment = ['<div ONpointerover="javascript:window.open(\'https://alanwu886.github.io/#!\');">MOVE HERE</div>', '<div onpointerover="console.log(window.localStorage);">MOVE HERE</div>'];

  ngOnInit () {
    // this.inject()
  }

  addData() {
  // var userInput = document.getElementById("comment").value;
  console.log(this.post);
  this.comment.push(this.post);  
  }

  inject(){
  console.log('xss attack!')
  const t = document.querySelector('#t')
    this.comment.forEach(item => {
      const p = document.createElement('p')
      p.innerHTML = item
      t.append(p)
    })
  };
}  


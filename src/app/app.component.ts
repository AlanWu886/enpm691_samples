import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  post = '';

  comment = ['<div onpointerover="console.log(window.localStorage);">MOVE HERE</div>',
  '<div onpointerover="javascript:window.open(decodeURIComponent(\'https%3A%2F%2Falanwu886.github.io%2F%23!\'));">MOVE HERE</div>',
  '<img src="11" onerror="console.log(window.navigator.userAgent)" />'];

  ngOnInit () {
    this.inject()
  }

  addData() {
  // var userInput = document.getElementById("comment").value;
  console.log(this.post);
  this.comment.push(this.post);
  this.post ='';
  }

  inject(){

  const t = document.querySelector('#t')
    this.comment.forEach(item => {
      const p = document.createElement('p')
      p.innerHTML = item
      t.append(p)
    })
  };
}  


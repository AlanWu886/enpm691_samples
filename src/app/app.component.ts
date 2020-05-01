import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  post = '';

  // comments = ['<div onpointerover="console.log(window.localStorage);">MOVE HERE</div>',
  // '<div onpointerover="javascript:window.open(decodeURIComponent(\'https%3A%2F%2Falanwu886.github.io%2F%23!\'));">MOVE HERE</div>',
  // '<img src="11" onerror="console.log(window.navigator.userAgent)" />'];

  comments = [];

  ngOnInit () {
    this.inject()
  }

  addData() {
  // var userInput = document.getElementById("comment").value;
  // console.log(this.post);
  
  this.comments.push(this.sanitize(this.post));
  console.log(this.comments);
  this.post ='';
  this.inject();
  }

  inject(){
  const comment_box = document.querySelector('#t')
    this.comments.forEach(item => {
      const c = document.createElement('c')

      c.innerHTML = item + '<br>';
      console.log(item,c)
      comment_box.append(c)
    })
  };

  sanTable = 
    {'<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':'&apos;'};

  sanitize(text){
    return text.replace(/["'<>]/g, m => this.sanTable[m]);
  }
}  


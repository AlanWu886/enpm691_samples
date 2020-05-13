import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  post = "";

  //eaxmple 1: <img src="empty" onerror="alert('xxx')">
  //eaxmple 2: <img src="empty" onerror="javascript:document.getElementById('title').innerHTML = null;">
  //eaxmple 3: <img src="empty" onerror="javascript:console.log(window.navigator.userAgent);">
  //eaxmple 4: <img src="empty" onerror="javascript:console.log(window.localStorage);">
  //<a href="javascript:alert('XSS')">redirect to...</a>


  // comments = ['<img src="empty" onerror="jjavascript:console.log(window.navigator.userAgent);">',
  // '<div onpointerover="javascript:window.open(decodeURIComponent(\'https%3A%2F%2Falanwu886.github.io%2F%23!\'));">MOVE HERE</div>'];

  comments = [];

  ngOnInit() {
    this.inject();
  }

  addData() {
    // naked input
    this.comments.push(this.post);
    console.log("current comment:", this.comments);
    this.addPost();
    
    // escape method
    // this.comments.push(this.encodeHTML(this.post));
    // console.log("current comment:", this.comments);
    // this.addPost();

    // blacklist method
    // if (this.blackList(this.post)) {
    //   this.post = 'illegal string!';
    // }else {
    //   this.comments.push(this.post);
    //   console.log("current comment:", this.comments);
    //   this.addPost();
    //   this.post="";
    // }

    // whitelist method
    // if (this.whiteList(this.post)) {   
    //   this.comments.push(this.post);
    //   console.log("current comment:", this.comments);
    //   this.addPost();
    //   this.post="";
    // }else {
    //   this.post = 'illegal string!';
    // }

  }

  inject() {
    const comment_box = document.querySelector("#c_box");
    this.comments.forEach(item => {
      const c = document.createElement("c");
      c.innerHTML = item + "<br>";
      // console.log(item, c);
      comment_box.append(c);
    });
  }

  addPost()  {
    const comment_box = document.querySelector("#c_box");
    const po = document.createElement("po");
    po.innerHTML = this.comments[this.comments.length-1] + "<br>";
    comment_box.append(po);
  }

  escTable = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };

  blacklist = {
    javascript: "",
    script: ""
  };

  encodeHTML(text) {
    return text.replace(/["'<>]/g, m => this.escTable[m]);
  };

  whiteList(text) {
    var patt = /^(\d|\w|@)/g;   
    return patt.test(text);
  };

  blackList(text) {
    var patt = /(javascript|script|onpointerover|onerror)/g;
    return patt.test(text);
  }
}

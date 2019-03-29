// Download
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);  
  element.style.display = 'none';
  document.body.appendChild(element);  
  element.click();
  document.body.removeChild(element);
}
// Download

// script
var scriptsrc = document.querySelectorAll('script');
var arrscript = [];
for(var i=0; i<scriptsrc.length; i++){
  if(scriptsrc[i].src != ''){
      arrscript.push(scriptsrc[i].src);
  }
}
// script

// image
var imagesrc = document.querySelectorAll('img');
console.log(imagesrc);
var imgsrc = [];
for(i = 0; i<imagesrc.length; i++){
  imgsrc.push(imagesrc[i].src);
}
// image

// style
var teststyle = document.styleSheets;
var stylesrc = [];
for(y = 0; y<teststyle.length-1; y++){
  stylesrc.push(teststyle[y].href);
}
console.log(stylesrc);
// style

var template = "";
template = `
<style>
.modal {display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);}
.modal-content {background-color: #fefefe; margin: auto; padding: 20px; border: 1px solid #888; width: 80%;}
.close {color: #aaaaaa; float: right; font-size: 28px; font-weight: bold;}
.close:hover, .close:focus {color: #000; text-decoration: none; cursor: pointer;}
p{font-size:12px;} h3 {font-size: 15px;}
* { box-sizing: border-box;}
.column { float: left; width: 33.33%; padding: 10px;}
.row:after { content: ""; display: table; clear: both;}
.jsbutton{float:left;}
</style>
<div id="myModal" class="modal">
<div class="modal-content">
  <span class="close">&times;</span>            
  <h2>Bookmarklet</h2>
  <div class="row">
  <div class="column">
      <h3>JS: ${arrscript.length} </h3><a id="jsid" onclick='scrdownfun();' href='#'>Download</a>
      <!--p>${arrscript.join("")}</p-->
  </div>
  <div class="column">
      <h3>CSS: ${stylesrc.length}</h3></h3><a onclick='styledownfun();' href='#'>Download</a>
      <!--p>${stylesrc.join("")}</p-->
  </div>
  <div class="column">
      <h3>Images: ${imagesrc.length}</h3><a id="imgid" onclick='imgdownfun();' href='#'>Download</a>
      <!--p>${imgsrc.join("")}</p-->
  </div>
  </div>
</div>
</div>
`
var d1 = document.querySelector('body');
d1.insertAdjacentHTML('beforeend', template);

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";

span.onclick = function() { modal.style.display = "none"; }

window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  template = '';
  }
}
function scrdownfun() { download("list_js.txt",arrscript);}
function styledownfun() { download("list_css.txt",stylesrc);}
function imgdownfun() { download("list_img.txt",imgsrc);}
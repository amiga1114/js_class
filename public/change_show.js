// tr에 해당하는 부분을 click하면
// ** '현재' click한 부분의 id가 몇인지 파악해야함
var table = document.getElementsByTagName('tr');
for(var i=0; i<table.length; i++) {
  table[i].onclick = function() {
    var show = this.getAttribute('hoho');
    window.location.href = '/boards/' + show;
  }
}
// 페이지를 이동한다.
// ** location.href = '/boards/?';

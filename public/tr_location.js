// tr에 해당하는 부분을 click하면
// ** '현재' click한 부분의 id가 몇인지 파악해야함
$(document).ready(function() {
  // == $(function() {})
  // var table = document.getElementsByClassName('board');
  $('.board').on('click', '.board', function() {
    location.href = '/boards/' + $(this).data('id');
  })
})
// 1. tr에 해당하는 html element을 찾는다.
// 2. html element에 click 이벤트 리스너를 달아준다.
// for(var i=0; i<table.length; i++) {
//   table[i].onclick = function() {
// // 3. 이벤트 핸들러에서는 해당 html element가 가지고 있는 속성을 꺼낸다.
// var show = this.getAttribute('data-id');
// // 4. 해당 속성 값으로 url을 만들어서 페이지를 이동한다.
// location.href = '/boards/' + show;
// }
// }

// 페이지를 이동한다.
// ** location.href = '/boards/?';

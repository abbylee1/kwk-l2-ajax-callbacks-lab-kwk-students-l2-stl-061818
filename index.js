$(document).ready(function (){
});

function searchRepositories(#searchTerms) {
  $("#searchTerms").val();
  $.get(`https://api.github.com/search/repositories?q=`)
  
}
  

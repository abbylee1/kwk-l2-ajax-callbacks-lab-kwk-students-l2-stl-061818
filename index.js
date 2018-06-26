$(document).ready(function (){
});

function searchRepositories(searchTerms) {
  const searchTerms = $("#searchTerms").val();
  $.get(`https://api.github.com/search/repositories?q=`
    $(#searchTerms}); , data => {
      S(`#results`).html();
    }
  
}
  

$(function() {
    var get_repositories_num;

    get_repositories_num=function() { 
        $('.fork').ready(function () {console.log('fork')})
        var fork_num=$('.fork').size();
        var source_num=$('.source').size();
        var fork_text=$('.repo_filter[rel="fork"]').text();
        var source_text=$('.repo_filter[rel="source"]').text();
        $('.repo_filter[rel="fork"]').text(fork_text+'['+fork_num+']');
        $('.repo_filter[rel="source"]').text(source_text+'['+source_num+']');
    }
    get_repositories_num();

});

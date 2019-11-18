$(function(){
    $('#acadBtn').click(function(e){
    	e.preventDefault();
        $('#v-pills-tab a[href="#v-pills-tech"]').tab('show');
        $('#mainContainer').scrollTo(0,{duration:'slow'});
    }),
    $('#techBtn').click(function(e){
        e.preventDefault();
        $('#v-pills-tab a[href="#v-pills-nontech"]').tab('show');
        $('#mainContainer').scrollTo(0,{duration:'slow'});
    }),
    $('#workexBtn').click(function(e){
        e.preventDefault();
        $('#v-pills-tab2 a[href="#v-pills-projects"]').tab('show');
        $('#mainContainer').scrollTo(0,{duration:'slow'});
    })
})
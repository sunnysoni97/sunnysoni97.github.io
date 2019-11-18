$(function(){
    $('#acadBtn').click(function(e){
    	e.preventDefault();
        $('#v-pills-tab a[href="#v-pills-tech"]').tab('show');
    }),
    $('#techBtn').click(function(e){
        e.preventDefault();
        $('#v-pills-tab a[href="#v-pills-nontech"]').tab('show');
    })
})
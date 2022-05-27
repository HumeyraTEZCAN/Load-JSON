$(document).ready(function() {
	/*const request = new XMLHttpRequest();
    request.onload = function() {
        if(this.status === 200){
            try {
                const restObj = JSON.parse(this.responseText);
                console.log(restObj);
                console.log(restObj[0].month)

            } catch(e){
                    console.warn("There was an error in JSON file");
            }
        }
        else 
        {
            console.warn("did not receive 200 OK response status")
        }
    };


    request.open("get", "json_files/chua.json");
    request.send();*/

    $(document).ready(function(){


        //document.getElementById("myBtn").addEventListener("click", displayChua);
        document.querySelector('[title="chua"]').addEventListener("click", displayChua);
        document.querySelector('[title="sorkin"]').addEventListener("click", displaySorkin);
        document.querySelector('[title="toobin"]').addEventListener("click", displayToobin);
        document.querySelector('[title="sampson"]').addEventListener("click", displaySampson);
        function displayChua() {
            $.getJSON("json_files/chua.json", function(data){ 
                $.each(data, function() {
                     $.each(this, function(key, value) {
                       $("#title").html(value.title);
                       $("#image").attr("src",value.image);
                       $("#nameplusmonth").html(value.month + "<br>" + value.speaker);
                       $("#text").html(value.text);
                        });
                        });
                        });
        }
        function displaySampson() {
            $.getJSON("json_files/sampson.json", function(data){ 
                $.each(data, function() {
                     $.each(this, function(key, value) {
                       $("#title").html(value.title);
                       $("#image").attr("src",value.image);
                       $("#nameplusmonth").html(value.month + "<br>" + value.speaker);
                       $("#text").html(value.text);
                        });
                        });
                        });
        }  function displaySorkin() {
            $.getJSON("json_files/sorkin.json", function(data){ 
                $.each(data, function() {
                     $.each(this, function(key, value) {
                       $("#title").html(value.title);
                       $("#image").attr("src",value.image);
                       $("#nameplusmonth").html(value.month + "<br>" + value.speaker);
                       $("#text").html(value.text);
                        });
                        });
                        });
        }
        function displayToobin() {
            $.getJSON("json_files/toobin.json", function(data){ 
                $.each(data, function() {
                     $.each(this, function(key, value) {
                       $("#title").html(value.title);
                       $("#image").attr("src",value.image);
                       $("#nameplusmonth").html(value.month + "<br>" + value.speaker);
                       $("#text").html(value.text);
                        });
                        });
                        });
        }














   
                     }); 








}); // end rea
/*
 $("#team").append( "Name: " + 
                       value.speaker + "<br>" + 
                        "Title: " + 
                        value.month +
                         "<br>" + 
                          "Bio: " + 
                          value.title +
                           "<br><br>" );
*/ 
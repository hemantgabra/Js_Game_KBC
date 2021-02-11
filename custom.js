  $(document).ready(function(){
  $.ajax({
    
    url: "q-ans.json",
    //url:"https://reqres.in/api/users?page=2",
    
    //type: "GET",
    //dataType: "JSON",

    success: function(GetData){
      //console.log(GetData);
      //var obj = eval(GetData.data);
      var output = "<div class='row border border-primary'><div class='col-sm-1'>ID</div><div class='col-sm-8'>Title</div><div class='col-sm-3'>Options</div></div>";



      for(var i in GetData){
        output += "<div class='row row border border-primary'><div class='col-sm-1'>" + GetData[i].id + "</div><div class='col-sm-8'>" + GetData[i].title + "</div><div class='col-sm-3'>" + GetData[i].options + "</div></div>";

      
      }

      output += "</div>";
      $("#QuationsAns").html(output);
      

      

    }
    
  });
  
});
  
    
    
     
    
    
    



    

    

    






  
         



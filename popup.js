function fun()
    {   if(document.getElementById("link1").innerText=="Pink")
      {document.body.bgColor="Pink";
      document.getElementById("link1").innerText="Red";
       } 
       else{
        document.body.bgColor="Red";
      document.getElementById("link1").innerText="Pink";
      //document.write(navigator.appVersion);
       }
    }

function validateform(){  
    const name=document.myform.name.value;  
    const email=document.myform.email.value;  
    const message=document.myform.message.value; 
    
    const atposition=email.indexOf("@");  
    const dotposition=email.lastIndexOf(".");
    
    const error = document.getElementById("error");
      
    if (name==null || name==""){  
      error.textContent = "Name can't be empty"  
      return false;  
    }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        error.textContent = "Please enter a valid email"
        return false;  
        
    }else if(message==null || message==""){  
        error.textContent = "Message field can't be empty"
      return false;
     
      }  
}


      
  

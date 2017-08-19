
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">  
    <HTML>  
     <HEAD>  
      <TITLE> New Document </TITLE>  
      <META NAME="Generator" CONTENT="EditPlus">  
      <META NAME="Author" CONTENT="">  
      <META NAME="Keywords" CONTENT="">  
      <META NAME="Description" CONTENT="">  
      <SCRIPT LANGUAGE="JavaScript">  
      <!--   
        function Change(osel){   
            document.getElementById("wy").value = osel.options[osel.selectedIndex].text;   
        }   
        window.onload =function(){   
            var osel = document.getElementById("osel");   
            document.getElementById("wy").value = osel.options[osel.selectedIndex].text;   
        }   
      
      //-->  
      </SCRIPT>  
     </HEAD>  
      
     <BODY>  
    <select id='osel' onchange="Change(this)">  
    <option value='1'>163.com</option>  
    <option value='2'>qq.com</option>  
    <option value='3'>其它</option>  
    </select>  
     <input type="text" id="wy" name="wy" >  
     </BODY>  
    </HTML>  
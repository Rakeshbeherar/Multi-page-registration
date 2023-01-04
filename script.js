function myFun() {


    var a = document.getElementById('User_Name1').value;
    var last_name = document.getElementById('User_Name2').value;
    var date = document.getElementById('date').value;
    var email=document.getElementById('Email').value;
    var i=document.getElementById('Father1').value;
    var j=document.getElementById('Father2').value;
    var k=document.getElementById('Mother1').value;
    var l=document.getElementById('Mother2').value;
    var select=document.getElementById("choose");
    var str=select.options[select.selectedIndex].value;
    var stc=select.options[select.selectedIndex].text;
     var n=document.getElementById('Nationality').value;
     var c=document.getElementById('Address').value;
     var ci=document.getElementById('city').value;
     var num=document.getElementById('number1').value;
     var phnum=document.getElementById('number2').value;
     


     // Local-Storage----------------------------------------------->//

     localStorage.setItem('a',a);
     localStorage.setItem('last_name',last_name);
     localStorage.setItem('date',date);
     localStorage.setItem('email',email);
     localStorage.setItem('i',i);
     localStorage.setItem('j',j);
     localStorage.setItem('k',k);
     localStorage.setItem('l',l);
     localStorage.setItem('n',n);
     localStorage.setItem('c',c);
     localStorage.setItem('ci',ci);
     localStorage.setItem('num',num);
     localStorage.setItem('phnum',phnum);
     localStorage.setItem('true',true);

      //FirstName-------------------------------------->//
    var correct_way = /^[A-Za-z]+$/;
    if (a == "") {
        document.getElementById("Message1").innerHTML = "*Invalid first name Entered";
        return false;

    }
   if (a.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message1").innerHTML = "*space not allow";
        return false;
    }
   if (a.length < 3) {
        document.getElementById("Message1").innerHTML = "*user name most be 5 Character";
        return false;
    }
   if (a.length > 10) {
        document.getElementById("Message1").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (a.match(correct_way))
        true;
    else {
        document.getElementById("Message1").innerHTML = "*Only alphabets are allowed";
        return false;
    }

    //LastName-------------------------------------------------------->//

    if (last_name == "") {
        return false;
       document.getElementById("Message2").innerHTML = "*Invalid last name Entered";
    
    }
    if (last_name.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message2").innerHTML = "*space not allow";
        return false;
    }
    if (last_name.length < 3) {
        document.getElementById("Message2").innerHTML = "*user name most be 5 Character";
        return false;
    }
    if (last_name.length > 10) {
        document.getElementById("Message2").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (last_name.match(correct_way))
        true;
    else {
        document.getElementById("Message2").innerHTML = "*Only alphabets are allowed";
        return false;
    }

     //Date---------------------------------------------------------------->

    if (date == "") {
        document.getElementById("Message3").innerHTML = "*Invalid Date range selected";
        return false;
    }
    if (date.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message3").innerHTML = "*space not allow";
        return false;
      }

    //Email----------------------------------------------------------------->

    if(email.indexOf('@')<=0){
      document.getElementById("Message4").innerHTML="*Invalide @ position";
      return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){

        document.getElementById('Message4').innerHTML="* Invalide . Position at 3, 4";
       return false;
     }

    //FathersName----------------------------------------------------------->      
     if (i == "") {
        document.getElementById("Message5").innerHTML = "*Invalid first name Entered";
        return false;

    }
   if (i.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message5").innerHTML = "*space not allow";
        return false;
    }
   if (i.length < 3) {
        document.getElementById("Message5").innerHTML = "*user name most be 5 Character";
        return false;
    }
   if (i.length > 10) {
        document.getElementById("Message5").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (i.match(correct_way))
        true;
    else {
        document.getElementById("Message5").innerHTML = "*Only alphabets are allowed";
        return false;
    }

    // FathersLastName--------------------------------------------------------------->
    if (j == "") {
        document.getElementById("Message6").innerHTML = "*Invalid last name Entered";
        return false;

    }
   if (j.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message6").innerHTML = "*space not allow";
        return false;
    }
   if (j.length < 3) {
        document.getElementById("Message6").innerHTML = "*user name most be 5 Character";
        return false;
    }
   if (j.length > 10) {
        document.getElementById("Message6").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (j.match(correct_way))
        true;
    else {
        document.getElementById("Message6").innerHTML = "*Only alphabets are allowed";
        return false;
    }


    //MothersFristName------------------------------------------------------------->
    if (k == "") {
        document.getElementById("Message7").innerHTML = "*Invalid first name Entered";
        return false;

    }
   if (k.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message7").innerHTML = "*space not allow";
        return false;
    }
   if (k.length < 3) {
        document.getElementById("Message7").innerHTML = "*user name most be 5 Character";
        return false;
    }
   if (k.length > 10) {
        document.getElementById("Message7").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (k.match(correct_way))
        true;
    else {
        document.getElementById("Message7").innerHTML = "*Only alphabets are allowed";
        return false;
    }
    //MotherslastName----------------------------------------------------------------->
    if (l == "") {
        document.getElementById("Message8").innerHTML = "*Invalid last name Entered";
        return false;

    }
   if (l.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message8").innerHTML = "*space not allow";
        return false;
    }
   if (l.length < 3) {
        document.getElementById("Message8").innerHTML = "*user name most be 5 Character";
        return false;
    }
   if (l.length > 10) {
        document.getElementById("Message8").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (l.match(correct_way))
        true;
    else {
        document.getElementById("Message8").innerHTML = "*Only alphabets are allowed";
        return false;
    }
    //Gender--------------------------------------------------------------------->
        
       if(document.getElementById('gender').checked == true) {   
                   
       } else {  
        document.getElementById("Message9").innerHTML="*gender is not selected";
                  return false; 
         } 

     //Nationality---------------------------------------------------------------> 
       if (n == "") {
        document.getElementById("Message10").innerHTML = "*fill the field";
        return false;
       }
       if (n.length > 20) {
        document.getElementById("Message8").innerHTML = "*Nationality most be less than 20 Character";
        return false;
       }
       
       if (n.match(correct_way))
        true;
       else {
        document.getElementById("Message10").innerHTML = "*Only alphabets are allowed";
        return false;
        }
        if (n.replace(/\s/g, "").length <= 0) {

            document.getElementById("Message10").innerHTML = "*space not allow";
           return false;
          }
        //Home-address-------------------------------------------------------------------->//
          if (c == "") {
            document.getElementById("Message11").innerHTML = "*fill the field";
            return false;
           }
           if (c.replace(/\s/g, "").length <= 0) {

            document.getElementById("Message11").innerHTML = "*space not allow";
           return false;
          }
        //city--------------------------------------------------------------------------->//
          if (ci == "") {
            document.getElementById("Message12").innerHTML = "*fill the field";
            return false;
           }
           if (ci.replace(/\s/g, "").length <= 0) {

            document.getElementById("Message12").innerHTML = "*space not allow";
           return false;
          }
          if (n.length > 10) {
            document.getElementById("Message12").innerHTML = "*user city most be less than 10 Character";
            return false;
           }
        //country-------------------------------------------------------------------------->
         
           if(str==0){
            document.getElementById("Message15").innerHTML = "*please fill country";
           }
             localStorage.setItem("str",str);
        //Telephone-number-------------------------------------------------------------------->
           if(isNaN(num)){
            document.getElementById("Message13").innerHTML = "*please fill number only";
            return false;
          }

           if (num.length <10) {
            document.getElementById("Message13").innerHTML = "*phone number most be 10 digits";
            return false;
           }
           if (num=="") {
            document.getElementById("Message13").innerHTML = "*fill the field ";
            return false;
           }
           if (num.replace(/\s/g, "").length <= 0) {

            document.getElementById("Message13").innerHTML = "*space not allow";
           return false;
          }
       //Phone-number------------------------------------------------------------------------>
          if (phnum=="") {
            document.getElementById("Message14").innerHTML = "*fill the field ";
            return false;
           }
          if(isNaN(phnum)){
            document.getElementById("Message14").innerHTML = "*please fill number only";
            return false;
          }

           if (phnum.length <10) {
            document.getElementById("Message14").innerHTML = "*phone number most be 10 digits";
            return false;
           }
           
           
         if (phnum.replace(/\s/g, "").length <= 0) {

        document.getElementById("Message14").innerHTML = "*space not allow";
         return false;
          }
           
    }



    //Page-2---------------------------------------------------------------->
    function myFun1(){

    var s=document.getElementById('school').value;
    var p=document.getElementById('percentage').value;
    var ss=document.getElementById('College').value;
    var pe=document.getElementById('percentage2').value;
    var u=document.getElementById('Univercity').value;
    var pr=document.getElementById('Course').value;
    var pi=document.getElementById('percentage3').value;
    var b=document.getElementById('back').value;
    var select=document.getElementById("hsc");
    var str=select.options[select.selectedIndex].value;
    var stc=select.options[select.selectedIndex].text;
    var e=document.getElementById("ssc");
    var st=e.options[e.selectedIndex].value;
    var stv=e.options[e.selectedIndex].text;

     //local-storage----------------------------------------------------------->
     localStorage.setItem('s',s);
     localStorage.setItem('p',p);
     localStorage.setItem('ss',ss);
     localStorage.setItem('pe',pe);
     localStorage.setItem('u',u);
     localStorage.setItem('pr',pr);
     localStorage.setItem('pi',pi);
     localStorage.setItem('b',b);

     var correct_way = /^[A-Za-z]+$/;
     //Institution-Name--------------------------------------->
    if (s== "") {
        document.getElementById("error1").innerHTML = "*fill the field";
        return false;

    }
   if (s.replace(/\s/g, "").length <= 0) {
        document.getElementById("error1").innerHTML = "*space not allow";
        return false;
    }
    if (s.match(correct_way))
    true;
     else {
    document.getElementById("error1").innerHTML = "*Only alphabets are allowed";
    return false;
      }
    //HSC-percentage---------------------------------------------->
    if (p== "") {
        document.getElementById("error2").innerHTML = "*fill the field";
        return false;

    }
   if (p.replace(/\s/g, "").length <= 0) {
        document.getElementById("error2").innerHTML = "*space not allow";
        return false;
    }
    if(isNaN(p)){
        document.getElementById("error2").innerHTML = "*please fill number only";
        return false;
      }
     // HSC Board---------------------------------------------------->
     if(str==0){
        document.getElementById("error9").innerHTML = "*please fill Board";
       }
         localStorage.setItem("str",str);



    //SSC-Institution---------------------------------------------------->
      if (ss== "") {
        document.getElementById("error3").innerHTML = "*fill the field";
        return false;

    }
   if (ss.replace(/\s/g, "").length <= 0) {
        document.getElementById("error3").innerHTML = "*space not allow";
        return false;
    }  
    if (ss.match(correct_way))
    true;
     else {
    document.getElementById("error3").innerHTML = "*Only alphabets are allowed";
    return false;
}
    //ssc percentage------------------------------------------------------->
    if (pe== "") {
        document.getElementById("error4").innerHTML = "*fill the field";
        return false;

    }
   if (pe.replace(/\s/g, "").length <= 0) {
        document.getElementById("error4").innerHTML = "*space not allow";
        return false;
    }
    if(isNaN(pe)){
        document.getElementById("error4").innerHTML = "*please fill number only";
        return false;
      }
      //SSC Board----------------------------------------------------------->
      if(st==0){
        document.getElementById("error10").innerHTML = "*please fill Board";
       }
         localStorage.setItem("st",st);

    //Current-Institution---------------------------------------------------->  
      if (u== "") {
        document.getElementById("error5").innerHTML = "*fill the field";
        return false;

    }
   if (u.replace(/\s/g, "").length <= 0) {
        document.getElementById("error5").innerHTML = "*space not allow";
        return false;
    }
    if (u.match(correct_way))
    true;
    else {
    document.getElementById("error5").innerHTML = "*Only alphabets are allowed";
    return false;
}
    //Cource-------------------------------------------------------------------->
    if (pr== "") {
        document.getElementById("error6").innerHTML = "*fill the field";
        return false;

    }
   if (pr.replace(/\s/g, "").length <= 0) {
        document.getElementById("error6").innerHTML = "*space not allow";
        return false;
    }
    if (pr.match(correct_way))
    true;
    else {
    document.getElementById("error6").innerHTML = "*Only alphabets are allowed";
    return false;
      }
     //percentage---------------------------------------------------------------->

    if (pi== "") {
        document.getElementById("error7").innerHTML = "*fill the field";
        return false;

    }
   if (pi.replace(/\s/g, "").length <= 0) {
        document.getElementById("error7").innerHTML = "*space not allow";
        return false;
    }
    if(isNaN(pi)){
        document.getElementById("error7").innerHTML = "*please fill number only";
        return false;
      }
   // Back-logs-------------------------------------------------------------------->
      if (b== "") {
        document.getElementById("error8").innerHTML = "*fill the field";
        return false;

    }
   if (b.replace(/\s/g, "").length <= 0) {
        document.getElementById("error8").innerHTML = "*space not allow";
        return false;
    }
    if(isNaN(b)){
        document.getElementById("error8").innerHTML = "*please fill number only";
        return false;
      }

  }

     //Page-3------------------------------------------------------------------------->

     var file1, file2, file3, file4;

     function myFormsubmit2() {
     
     
         console.log("files submitted", file1, "got 1", file2, "got 2", file3, "got 3", file4)
     
     
     }
     
     function myForm1(files1) {
     
         if (!/(\.bmp|\.png|\.jpg|\.jpeg)$/i.test(files1.value)) {
             alert("Invalid file type received.");
             files1.form.reset();
             files1.focus();
             return false;
         }
         else {
     
             var upload = document.getElementById("file1");
             var fileSize = upload.files[0].size / 1024 / 1024;
     
             if (fileSize < 4) {
                 console.log('This file size is: ' + upload.files[0].size / 1024 / 1024 + "MiB");
                 file1 = upload;
             }
             else {
                 console.log('This file size is: ' + upload.files[0].size / 1024 / 1024 + "MiB");
                 files1.form.reset();
                 files1.focus();
                 alert("file size too large");
             }
         }
     }
     
     function myForm2(files2) {
     
         if (!/(\.pdf|\.png|\.jpg|\.jpeg|\.doc)$/i.test(files2.value)) {
             alert("Invalid file type received.");
             files2.form.reset();
             files2.focus();
             return false;
         }
         else {
     
             var upload2 = document.getElementById("file2");
             var fileSize2 = upload2.files[0].size / 1024 / 1024;
     
             if (fileSize2 < 4) {
                 console.log('This file size is: ' + upload2.files[0].size / 1024 / 1024 + "MiB");
                 file2 = upload2;
             }
             else {
                 console.log('This file size is: ' + upload2.files[0].size / 1024 / 1024 + "MiB");
                 files2.form.reset();
                 files2.focus();
                 alert("file size too large");
             }
         }
     }
     
     function myForm3(files3) {
     
         if (!/(\.pdf|\.png|\.jpg|\.jpeg|\.doc)$/i.test(files3.value)) {
             alert("Invalid file type received.");
             files3.form.reset();
             files3.focus();
             return false;
         }
         else {
     
             var upload3 = document.getElementById("file3");
             var fileSize3 = upload3.files[0].size / 1024 / 1024;
     
             if (fileSize3 < 4) {
                 console.log('This file size is: ' + upload3.files[0].size / 1024 / 1024 + "MiB");
                 file3 = upload3;
             }
             else {
                 console.log('This file size is: ' + upload3.files[0].size / 1024 / 1024 + "MiB");
                 files3.form.reset();
                 files3.focus();
                 alert("file size too large");
             }
         }
     }
     
     function myForm4(files4) {
     
         if (!/(\.pdf|\.doc)$/i.test(files4.value)) {
             alert("Invalid file type received.");
             files4.form.reset();
             files4.focus();
             return false;
         }
         else {
     
             var upload4 = document.getElementById("file4");
             var fileSize4 = upload4.files[0].size / 1024 / 1024;
     
             if (fileSize4 < 10) {
                 console.log('This file size is: ' + upload4.files[0].size / 1024 / 1024 + "MiB");
                 file4 = upload4;
             }
             else {
                 console.log('This file size is: ' + upload4.files[0].size / 1024 / 1024 + "MiB");
                 files4.form.reset();
                 files4.focus();
                 alert("file size too large");
             }
         }
     }
     
        
        







    
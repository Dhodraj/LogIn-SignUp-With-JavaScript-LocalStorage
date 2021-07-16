function store(){
	var usernm = document.getElementById('name');
	var pwd= document.getElementById('pw');

	numbers = /[0-9]/g;
	uppercase = /[A-Z]/g;
	lowercase = /[a-z]/g;

	if(usernm.value.length==0 || pwd.value.length==0){
		alert('Fill All Forms');
		return false;
	}else if(pwd.value.length<=5){
		alert('Weak Password');
		return false;
	}else if(!pwd.value.match(numbers)){
		alert('Must contain atleast 1 number');
		return false;
	}else if(!pwd.value.match(uppercase)){
		alert('Must contain atleast 1 Uppercase');
		return false;
	}else if(!pwd.value.match(lowercase)){
		alert('Must contain 1 Lowercase');
	}
  else{
      
      var flag =0;
      for (let i=0;i<localStorage.length;i++){
                    const  n1 = localStorage.key(i);
                    const pass1 = localStorage.getItem(n1);
                    if(usernm.value == n1){
                        alert('Username Alerady Exist.. Try with another name');
                        flag =1;
                        return false;
                    }
                  }
      if(flag==0){
          alert('Account Created!');
          localStorage.setItem(usernm.value,pwd.value);
          return true;
      }   
     }  
 }




function check(){
	var loguser = document.getElementById('userName');
    var logpass = document.getElementById('userPw');
      var flag = 0;
    for(let j=0;j<localStorage.length;j++){
           
        const  checkname = localStorage.key(j);
        const checkpass = localStorage.getItem(checkname);
          if(loguser.value == checkname && logpass.value == checkpass){
                     flag=1;
                     alert('Successfully Logged In');
                     return true;
          }
    }
    if(flag==0){
          alert("Username/password don't exist");
          return false;
    }
}
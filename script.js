function store(){
	var fn= document.getElementById('Fname');
	var ln= document.getElementById('Lname');
	var n= document.getElementById('name');
	var pwd= document.getElementById('pw');

	numbers = /[0-9]/g;
	uppercase = /[A-Z]/g;
	lowercase = /[a-z]/g;


	if(n.value ==0 && pwd.value==0){
		alert("Please Fill All Forms ");
		return false;
	}else if(pwd.value<5){
		alert('Password is too weak');
		return false;
	}else if(!pwd.value.match(numbers)){
		alert("Must Contain 1 Number");
		return false;
	}else if(!pwd.value.match(uppercase)){
		alert("Must Contain 1 Uppercase");
		return false;
	}else if(!pwd.value.match(lowercase)){
		alert("Must Contain 1 Lowercase");
		return false;
	}else{
			var details=[];

	       if(JSON.parse(localStorage.getItem("details"))){
		     details= JSON.parse(localStorage.getItem("details"));
	        }

	        let people= {
		                 FirstName : fn.value,
		                 LastName : ln.value,
		                 Mail : n.value,
		                 Password : pwd.value
	                    };

	        var temp=1;

	        for(let i=0;i<JSON.parse(localStorage.getItem('details')).length;i++)
	        {
	        	storedmail= JSON.parse(localStorage.getItem('details'))[i].Mail;
	        	if(storedmail==n.value){
	        		alert("Already Exist");
	        		temp=0;
         			return false;
	        		
	        	}
	        }
	        if(temp=1)
	        {
	        	details.push(people);
                alert("Account Created!");
                localStorage.setItem("details",JSON.stringify(details));
                return true;
	        }        
	}

}

function check(){
	var logn= document.getElementById('userName');
	var logp= document.getElementById('userPw');
	var flag=0;

	for(let i=0;i<JSON.parse(localStorage.getItem('details')).length;i++)
	{
        storedmail= JSON.parse(localStorage.getItem('details'))[i].Mail;
        storedpass= JSON.parse(localStorage.getItem('details'))[i].Password;

        if((logn.value==storedmail) && (logp.value==storedpass))
        {
        	flag=1;
        	alert("Successfully Log-In");
        	return true;
        }
	}

	if(flag==0)
	{
		alert("Wrong UserName or Password");
		return false;
	}
}
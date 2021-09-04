function validateform()
{
	var name=document.myform.name.value;
	var x=document.myform.email.value;
	var atposition=x.IndexOf("@");
	var dotposition=x.IndexOf(".");
	if(name==null||name=="")
	{
		alert="Please fill your name here!";
		return false;
	}
	else
	{
	console.log("welcome"+name);	
	}
	if(atposition<1||dotposition<atposition+2||dotposition+2>x.length)
	{
		alert("Please enter a valid email address!");
		return false;
		
	}

}
function valid1()
{
var a=document.f1.t1.value;
var b=document.f1.p1.value;
if(a==""&&b=="")
{
alert("Enter Username and Password");
return false;
}
else if(a=="")
{
alert("Enter Username");
return false;
}
else if(b=="")
{
alert("Enter Password");
return false;
}
else if(a=="abhinav@gmail.com"&&b!="abhinav")
{
alert("Enter Valid Password")
return false;
}
else if(a=="abhinav@gmail.com"&&b=="abhinav")
{
return true;
}
else
{
alert("Enter Valid account")
return false;
}
}
function valid2()
{
var g=document.f2.t1.value;
var h=document.f2.t2.value;
var c=document.f2.t3.value;
var d=document.f2.p4.value;
var e=document.f2.p5.value;
var f=document.f2.s6.value;
if(g==""&&h==""&&c==""&&d==""&&e==""&&f=="")
{
alert("Enter User Details");
return false;
}
else if(g=="")
{
alert("Enter first name");
return false;
}
else if(h=="")
{
alert("Enter last name");
return false;
}
else if(c=="")
{
alert("Enter email");
return false;
}
else if(d=="")
{
alert("Enter password");
return false;
}
else if(e=="")
{
alert("Renter password");
return false;
}
else if(e!=d)
{
alert("Password donot match");
return false;
}
else if(f=="day")
{
alert("Enter birthday");
return false;
}
else
{
alert("Congratulations "+g+" "+h);
return true;
}
}
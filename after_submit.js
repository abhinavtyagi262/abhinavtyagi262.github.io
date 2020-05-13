
function valid1()
{
var a=document.f1.t1.value;
var b=document.f1.t2.value;
var c=document.f1.t3.value;
var d=document.f1.t4.value;
var e=document.f1.t5.value;
var f=document.f1.t6.value;
var g=b.length;
if(a==""&&b==""&&c==""&&d==""&&e==""&&f=="")
{
alert("Enter User Details");
return false;
}
else if(a=="")
{
alert("Enter Name");
return false;
}
else if(b=="")
{
alert("Enter Phone number");
return false;
}
else if(g!=10)
{
alert("Enter correct Phone number");
return false;
}

else if(d=="")
{
alert("Enter City");
return false;
}
else if(e=="")
{
alert("Enter State");
return false;
}


else
{
alert("Dear "+a+" your product will be delivered at "+d+" in coming 3-4 days.");
    return true;

}
}
function greater()
{
	var num = prompt("Enter a number:");
	if(num>100)
	{
		alert("The number you entered is greater than 100.");
	}
	
	else
	{
		alert("The number you entered is less than 100.");
	}
}

function temperature()
{
		var choice = prompt("Enter any of the following: \n 1. Celsius to Fahrenheit (press 1) \n 2. Fahrenheit to Celsius (press 2):");
	if(choice==1)
	{
		var celsius = prompt("Enter temperature in celsius:");
		var fahr = celsius * 1.5 + 32;
		document.write("The temperature in fahrenheit is: " + fahr+ "<br>");
	}
	
	if(choice==2)
	{
		var far = prompt("Enter temperature in fahrenheit:");
		var cel = ((far-32)*5)/9;
		document.write("The temperature in celsius is: " + cel+ "<br>");
	}
	
	else
	{
		alert("You clicked the wrong number. Please reload again and click either 1 or 2.");
	}
}

function multdiv()
{
	var num1 = prompt("Enter a number:");
	var num2 = prompt("Enter another number:");
	var mul = num1*num2;
	var div = num1/num2;
	document.write("The value after multiplication is:" + mul + "<br>");
	document.write("The value after division is:" + div);
}

function average()
{
	var eng = Number(prompt("Enter your mark on English:"));
	var mar = Number(prompt("Enter your mark on Marketing:"));
	var lit = Number(prompt("Enter your mark on Literature:"));
	var avg = (eng+mar+lit)/3;
	if(avg>=80)
	{
		document.write("You achieved" + avg + "<br>" + ". You passed with disctinction.");
	}
	
	if(avg>60 && avg<80)
	{
		document.write("You achieved" + avg + "<br>" + ". You passed with first division.");
	}
	
	if(avg>40 && avg<60)
	{
		document.write("You achieved" + avg + "<br>" + ". You passed with second division.");
	}
	
	if(avg<=40)
	{
		document.write("You achieved" + avg + ". You failed the exam. Work hard!");
	}
}

function counter()
{
	var c = prompt("Enter a character:");
	var b=0;
	var g=0;
	do
	{
		if(c=='b')
		{
		b++;
		}
		
		else if(c=='g')
		{
			g++;
		}		
	}
	while(c!= 'x');
	alert("The no. of boys:" + b);
	alert("The no. of girls:" + g);
}

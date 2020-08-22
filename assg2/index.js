exports.PerfectNumber=function (num)
{
    let num1 = num; 
	var remainder,addition = 0,i;
	for(i = 0; i < num; i++)
	{
		remainder = num%i;
		if(remainder==0)
		{
			addition += i;
		}
    }
    if(addition== num1)
    {
        return("number is perfect");
    } 
    else
    {
        return("number is not perfect");
    }
}


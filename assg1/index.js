
exports.count=function(string)
{
    let string1= string.toLowerCase('').split("").sort().join("");
    let final=[];
    let char=[];
    let count=[];
    var j=0;
    let counter=1;
    for (let i = 0; i < string.length; i++) 
    {

      if (string1[i] == string1[i + 1]) 
      {
        counter++;
      } 
      else 
      { 
        char[j]=string1[i];
        count[j]=counter;
        j++;
        counter= 1;

      }
    }
    for(let k=0;k<char.length;k++)
    {
      final[k]=[char[k],count[k]];
    }
    return(final);
   

};


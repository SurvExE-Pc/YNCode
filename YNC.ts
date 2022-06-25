{/* 
  //@ts-ignore */}
function YNCtoASC(YNC){function convertBinary(str: string){{/* 
  //@ts-ignore */}let result = "";{/* 
  //@ts-ignore */}
  {/* 
  //@ts-ignore */}str.split(" ").map(bin => {
    result += String.fromCharCode(parseInt(bin, 2))
  })
  return result;};{/* 
  //@ts-ignore */}let BIN = ((YNC.replaceAll("Y","1")).replaceAll("N","0"));let out = convertBinary(BIN);return (out).replaceAll("\x00","");};
{/* 
  //@ts-ignore */}
function ASCtoYNC(ASC){var result = "";for(var i = 0;i<ASC.length;i++){var bin = ASC[i].charCodeAt().toString(2);result += Array(8-bin.length+1).join("0")+bin;};for(let i=0;i<result.length;i++){if(((i/9).toString()).includes(".",0)===false){result=[result.slice(0, i), " ", result.slice(i)].join('')}};return ((result.replaceAll("1","Y")).replaceAll("0","N")).replaceAll("\x00","");};

export { YNCtoASC, ASCtoYNC };
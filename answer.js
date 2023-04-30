function titleCase(title, minorWords) {
  let minorArr=minorWords!==undefined?minorWords.toLowerCase().split(" "): ""
  let titleArr=title.toLowerCase().split(" ")
  let newArr = []
  if(title!=""){
  titleArr.forEach((x,i)=>{
   if(!minorArr.includes(x)||i==0){
     newArr.push(x.replace(x[0],x[0].toUpperCase()))
   }
   else{
    newArr.push(x)
   }
  })}
  return newArr ? newArr.join(" "):""
}

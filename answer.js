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

function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}

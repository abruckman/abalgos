// make a function to check if you can bubble sort if you can only swap numbers less than 1 apart

function checkSortable(a){
  var temp
  var sort = "Yes"
  for (i = 0; i < a.length-1 ; i += 1){
    //console.log(" " + a[i]+ "-" +a[i+1] )
    if (a[i] > a[i+1]){
      //console.log(a[i] - a[i+1])
      if ( -1 <= a[i] - a[i+1] && 1 >= a[i] - a[i+1]){
        temp = a[i]
        a[i] = a[i+1]
        a[i+1] = temp
      }else{
        return "No"
      }
    }
  }
  // console.log(a)
  return "Yes"

}

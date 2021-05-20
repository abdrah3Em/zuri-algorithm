function convertFahrToCelsius(data) {
  
  let dataType = function(){
        if(data.constructor == [].constructor){
          return 'this is an array.'
        }
        else if(data.constructor == {}.constructor){
          return 'this  is an object.'
        }
  }()

  if(data instanceof Object){
    if(data instanceof Array){
      return  `${JSON.stringify(data)} is not a valid number but a/an ${dataType}`
    }
    return  `${JSON.stringify(data)} is not a valid number but a/an ${dataType}`
  }

  return Number.parseFloat((data-32)/1.8).toFixed(4);
 
}


function checkYuGiOh (n){

  if(!parseInt(n) == true){
    return `An invalid parameter: ${JSON.stringify(n)}`
  }

  let myArr = []

  for( let x = 1; x <= n; x++){
    myArr.push(x)
  }

  //replacing 'yu', 'gi' or 'Oh'
  for(let i = 1; i < myArr.length; i++){
    
    if(myArr[i] % 2 == 0){
      //when divisible by both 2 and 3
      if(myArr[i] % 3 == 0){
        //when divisible by all
        if(myArr[i] % 5 == 0){
          myArr.splice(i,1, 'yu-gi-oh')
        } else {
          myArr.splice(i,1, 'yu-gi')
        }
      } 
      //when divisible by both 2 and 5
      else if (myArr[i] % 5 == 0){
        myArr.splice(i,1, 'yu-oh')
      }
      //when divisible by 2 only
      else{
        myArr.splice(i,1, 'yu')
      }
    } 

    else if(myArr[i] % 3 == 0){
      //when divisible by both 3 and 5
      if (myArr[i] % 5 == 0){
        myArr.splice(i,1, 'gi-oh')
      }
      //when divisible by 3 only
      else{
        myArr.splice(i,1, 'gi')
      }
    } 
    //when divisible by 5 only
    else if(myArr[i] % 5 == 0){
      myArr.splice(i,1, 'oh')
    } 
    //when divisible by none
    else {
      continue
    }
  }  
  return myArr
}


// Write your code below this line.
function luckyNumbers(n){
  let array = []
  for(let i=0; i<n; i++){
    let newLuckyNum = Math.floor(Math.random() * 10) +1
    if(array.includes(newLuckyNum)){
      i--
    } else {
      array.push(newLuckyNum)
    }
  }
  return array
}
console.log(luckyNumbers(5))
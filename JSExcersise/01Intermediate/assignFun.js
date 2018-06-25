
let getMyGrade = function (currentMarks,totalMarks) {
  let myPercent = (currentMarks/totalMarks)*100

let myGrade =''

      if (myPercent >= 70) {
        myGrade ='A'
      }else if (myPercent >= 60) {
        myGrade ='B'
      }else if (myPercent >=50) {
        myGrade ='C'
      }else if (myPercent >=40) {
        myGrade ='D'
      }else {
        myGrade='F'
      }
  return `your grade is ${myGrade} and percentage is ${myPercent}`
}

let yourResult = getMyGrade(62,150)
console.log(yourResult);

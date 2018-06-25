let myTodos = {
  day: 'Monday',
  mettings: 0,
  meetDone: 0,

 addMeeting: function (num) {
   this.meetings = this.meetings + num
 }
 summary: function () {
    return `You have ${this.meetings} meeting today`
 }

}


myTodos.addMeeting()
console.log(myTodos.summary);

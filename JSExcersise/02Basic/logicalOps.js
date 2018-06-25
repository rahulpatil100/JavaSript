//&& - AND operator = Bothe side need to be true
// ||-OR Operation = One side need to be true
// ! use to reverse o/p mean suppose your ans is true then o/p is false and false then ans is true
let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken) {
  console.log('Greeting message to USER:')
  console.log('Grant access to paid course')
}else if (isVerified || isGuest) {
  console.log('Allow free preview')
}else {
  console.log('MESSAGE:please contact  admin')
}

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2022 9:00 AM",
    isLoggedIn: false
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2022 9:30 AM",
    isLoggedIn: true
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2022 9:45 AM",
    isLoggedIn: true 
  },
  {
    _id: "eefarm",
    username: "Martha",
    email: "martha@martha",
    password: "123333",
    createdAt: "08/01/2022 10:00 AM",
    isLoggedIn: false
  }
];

// =========================================================

// find by id

// function findById(user, userId) {
//   const findId = user.filter((user) => {
//     return user._id === userId
//   })
//   console.log(findId);
// }

// findById (users, "eefarm");

// =========================================================

// find by email

// function findByEmail(user, userEmail) {
//   const findEmail = user.filter((user) => {
//     return user.email === userEmail
//   })
//   console.log(findEmail);
// }

// findByEmail (users, "martha@martha")

// =========================================================

// find by isLoggedIn

// function findByisLoggedIn(user, userLogin) {
//   const findisLoggedIn = user.filter((user) => {
//     return user.isLoggedIn === userLogin
//   })
//   console.log(findisLoggedIn);
//   }
  
//   findByisLoggedIn (users, true)
  
// =========================================================

// find by name 

// function  createdAtByUserName(user, username) {
//   const findUserName = user.filter((user) => {
//     return user.username === username
//   })
//   console.log(findUserName);
// }

// createdAtByUserName(users, "Martha")

// =========================================================

//



function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      appendId(object.id);
    })
    .catch(function (error) {
      appendError(error);
    });
}

function appendId(id) {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");
  h1.innerHTML = id;
  body.appendChild(h1);
}

function appendError(e) {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");
  h1.innerHTML = e.message;
  body.appendChild(h1);
}

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Carter",
//     dogBreed: "GSP",
//   }),
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad Things! Panic!!");
//     console.log(error.message);
//   });

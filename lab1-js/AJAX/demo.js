var table = document.getElementById("tbody");
var buttonGetUsers = document.getElementById("btn");

buttonGetUsers.addEventListener("click", function () {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {

            if (xhr.readyState == 4) {
                  if (xhr.status == 200) {

                        var usersData = JSON.parse(xhr.response);
                        console.log(usersData)

                        for (var i = 0; i < usersData.length; i++) {
                              var tr = document.createElement("tr");
                              console.log(tr)
                              var td = document.createElement("td");
                              td.innerText = usersData[i].id;
                              tr.append(td);
                              var td = document.createElement("td");
                              td.innerText = usersData[i].name;
                              tr.append(td);
                              var td = document.createElement("td");
                              td.innerText = usersData[i].username;
                              tr.append(td);
                              var td = document.createElement("td");
                              td.innerText = usersData[i].email;
                              tr.append(td);
                              table.append(tr)
                        }
                  }
            }
      }
      xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
      xhr.send("");
})





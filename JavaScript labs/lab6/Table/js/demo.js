var addNewOne = document.getElementById('idadd'); var id = 1;
addNewOne.onclick = function () {

    var flagName = false;
    var flagAge = false;

    //Validation Name
    var validName = document.querySelector('.myinputs input:nth-child(2)')
    var regName = /^[a-zA-Z]/;
    if (!String(validName.value).match(regName)) {
        var name = document.getElementById("validname")
        name.style.visibility = "visible"
    }
    else {
        var name = document.getElementById("validname")
        name.style.visibility = "hidden";
        flagName = true;
    }

    //Validation Age
    var validAge = document.querySelector('.myinputs input:nth-child(4)')
    if (validAge.value == '' || validAge.value.replace(/^\s+|\s+$/gm, '') == '' || isNaN(validAge.value) || validAge.value < 10 || validAge.value > 120) {
        var age = document.getElementById("validage")
        age.style.visibility = "visible"
    }
    else {
        var age = document.getElementById("validage")
        age.style.visibility = "hidden";
        flagAge = true;
    }
    if (flagName && flagAge) {

        var tr = document.createElement('tr')
        tr.setAttribute('id', id)

        //Append id in td
        var td = document.createElement('td')
        td.append(id)
        tr.appendChild(td)

        //Append name in td
        var td = document.createElement('td')
        td.append(validName.value)
        tr.appendChild(td)

        //Append age in td
        var td = document.createElement('td')
        td.append(validAge.value)
        tr.appendChild(td)

        //Append button Delete
        var td = document.createElement('td')
        td.innerHTML = '<button onclick="deleteRow(' + id + ')">Delete</button>'
        tr.appendChild(td)
        var newRow = document.querySelector('tbody')
        newRow.append(tr)
        id++;
    }
}
function deleteRow(id) {
    document.getElementById(id).remove(id - 1);
}







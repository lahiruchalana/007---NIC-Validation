var myArray = [
    {'name':'Lahiru', 'NIC':'971811102v', 'referralNIC':'', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Isuru', 'NIC':'199528108988', 'referralNIC':'952818988v', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Kasun', 'NIC':'971512256x', 'referralNIC':'', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Shanuka', 'NIC':'199819156243', 'referralNIC':'981916243v', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Amila', 'NIC':'990815621v', 'referralNIC':'', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Madushan', 'NIC':'200025145412', 'referralNIC':'002515412v', 'age':'24', 'birthdate':'10/31/1995'},
]

$('#search-input').on('keyup', function(){
    var value = $(this).val()
    console.log("Value:", value)
    var data = searchTable(value, myArray)
    buildTable(data)
})

buildTable(myArray)

function searchTable(value, data) {
    var filteredData = []
    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()
        var NIC = data[i].NIC
        // filter by name
        if (name.includes(value)) {
            filteredData.push(data[i])
        } else if (value.length === 9) { // old NIC filter without v/x
            if (NIC.includes(value)) {
                filteredData.push(data[i])
            } 
        } else if (value.length === 10) { // old NIC filter
            if (NIC.includes(value)) {
                filteredData.push(data[i])
            } 
        } else if (value.length === 12) { // new NIC filter
            var birthYearDOB = NIC.substr(0, 5)
            var valueBirthYearDOB = value.substr(2, 5)
            var serialCode = NIC.substr(5, 4)
            var valueSerialCode = value.substr(8, 4)
            if (birthYearDOB.includes(valueBirthYearDOB)) {
                if (serialCode.includes(valueSerialCode)) {
                    filteredData.push(data[i])
                }
            } else if (NIC.includes(value)) {
                filteredData.push(data[i])
            } 
        }
    }
    return filteredData
}

function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var colNIC = `NIC-${i}`
        var colreferralNIC = `referralNIC-${i}`
        var colage = `age-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].NIC}</td>
                        <td>${data[i].referralNIC}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                    </tr>`
        table.innerHTML += row
    }
}

var myArray = [
    {'name':'Lahiru', 'oldNIC':'971811102v', 'newNIC':'199718102548', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Isuru', 'oldNIC':'952818988v', 'newNIC':'199528108988', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Kasun', 'oldNIC':'971512256x', 'newNIC':'199715102256', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Shanuka', 'oldNIC':'981916243v', 'newNIC':'199819156243', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Amila', 'oldNIC':'990815621v', 'newNIC':'199908195621', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Madushan', 'oldNIC':'002515412v', 'newNIC':'200025145412', 'age':'24', 'birthdate':'10/31/1995'},
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
        var oldNIC = data[i].oldNIC
        var newNIC = data[i].newNIC
        if (name.includes(value)) {
            filteredData.push(data[i])
        } else if (oldNIC.includes(value)) {
            filteredData.push(data[i])
        } else if (newNIC.includes(value)) {
            filteredData.push(data[i])
        }
    }
    return filteredData
}

$('th').on('click', function(){
    var column = $(this).data('colname')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1);
    
    if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
    }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
    }

    $(this).html(text)
    buildTable(myArray)
    })


function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var cololdNIC = `oldNIC-${i}`
        var colnewNIC = `newNIC-${i}`
        var colage = `age-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].oldNIC}</td>
                        <td>${data[i].newNIC}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                    </tr>`
        table.innerHTML += row
    }
}

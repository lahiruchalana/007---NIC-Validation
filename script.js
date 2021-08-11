const nic = document.getElementById('NIC')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const nicno = document.getElementById('NICno')
const type = document.getElementById('type')

form.addEventListener('submit', (e) => {
    // add errors to messages[] for NIC number input
    let messages = []
    if (nic.value === '' || nic.value == null) {
        messages.push('NIC number is required')
    }
    
    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
    }

    // identify old valid NIC 
    if (nic.value.length === 10) {
        if (nic.value.substring( nic.value.length - 1) == 'v' || 
            nic.value.substring( nic.value.length - 1) == 'x' ||
            nic.value.substring( nic.value.length - 1) == 'V' ||
            nic.value.substring( nic.value.length - 1) == 'X' ) {
            nicno.innerHTML = "Your NIC number is: " + nic.value
            type.innerHTML = "This is an old NIC"            
        } else {
            nicno.innerHTML = nic.value + " has a invalid last character"
        }
    } else {
        nicno.innerHTML = nic.value + " is not a valid NIC number"
    }

    // identify new valid NIC 
    if (nic.value.length === 12) {
        nicno.innerHTML = "Your NIC number is: " + nic.value
        type.innerHTML = "This is a new NIC"            
    } else {
        nicno.innerHTML = nic.value + " is not a valid NIC number"
    }

    e.preventDefault()
}) 
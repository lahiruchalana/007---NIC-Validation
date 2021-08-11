const nic = document.getElementById('NIC')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const nicno = document.getElementById('NICno')

form.addEventListener('submit', (e) => {
    let messages = []
    if (nic.value === '' || nic.value == null) {
        messages.push('NIC number is required')
    }
    
    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
    }

    if (nic.value.length === 10 || nic.value.length === 12) {
        nicno.innerHTML = "Your NIC number is: "+ nic.value
    }

    if (!nic.value.length === 10 || nic.value.length === 12) {
        nicno.innerHTML = nic.value + " is not a valid NIC number"
    }

    e.preventDefault()
}) 
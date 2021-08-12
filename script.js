const nic = document.getElementById('NIC')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const nicno = document.getElementById('NICno')
const type = document.getElementById('type')
const dob = document.getElementById('DOB')
const age = document.getElementById('age')
const gender = document.getElementById('gender')

form.addEventListener('submit', (e) => {
    // add errors to messages array[] for user inputs of NIC number
    let messages = []
    if (nic.value === '' || nic.value == null) {
        messages.push('NIC number is required')
    }
    
    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
    }

    // identify old valid NIC 
    if (nic.value.length === 10) {
        // last character should be v or x
        // but user could type simple v or x also same time capital X or V
        if (nic.value.substring( nic.value.length - 1) == 'v' || 
            nic.value.substring( nic.value.length - 1) == 'x' ||
            nic.value.substring( nic.value.length - 1) == 'V' ||
            nic.value.substring( nic.value.length - 1) == 'X' ) {
                // find the gender and dob months and dates 
                if (nic.value.substr(2, 3) === '000') {
                    nicno.innerHTML = nic.value + " is not a valid NIC number"
                } 
                // (if 3+4+5 numbers are < 366 --> male)
                else if (nic.value.substring(2, 3) <= '366') {
                    nicno.innerHTML = "Your NIC number is: " + nic.value
                    type.innerHTML = "This is an old NIC"
                    dob.innerHTML = "Date of Birth: " + nic.value.substring(0, 2) + "/" 
                    age.innerHTML = "Age: " + (2021 - (19 + nic.value.substring(0, 2)))
                    gender.innerHTML = "Gender: Male" 
                }
                // (if 366 < 3+4+5 numbers are < 500 --> not a valid NIC)
                else if ('366' < nic.value.substring(2, 3) && nic.value.substring(2, 3) < '500') {
                    nicno.innerHTML = nic.value + " is not a valid NIC number"
                }
                // (if 500 <= 3+4+5 numbers are <= 866 --> female)
                else if ('500' <= nic.value.substring(2, 3) && nic.value.substring(2, 3) <= '866') {
                    nicno.innerHTML = "Your NIC number is: " + nic.value
                    type.innerHTML = "This is an old NIC"
                    dob.innerHTML = "Date of Birth: " + nic.value.substring(0, 2) + "/" 
                    age.innerHTML = "Age: " + (2021 - (19 + nic.value.substring(0, 2)))
                    gender.innerHTML = "Gender: Female" 
                }
                // (if 866 < 3+4+5 numbers are < 999 --> female)
                else if ('866' < nic.value.substring(2, 3) && nic.value.substring(2, 3) < '999') {
                    nicno.innerHTML = nic.value + " is not a valid NIC number"
                }
        } else {
            nicno.innerHTML = nic.value + " has a invalid last character"
        }
    } 
    // identify new valid NIC 
    else if (nic.value.length === 12) {
        // find the gender and dob months and dates
        if (nic.value.substr(4, 3) === '000') {
            nicno.innerHTML = nic.value + " is not a valid NIC number"
        } 
        // (if 3+4+5 numbers are < 366 --> male)
        else if (nic.value.substr(4, 3) <= '366') {
            nicno.innerHTML = "Your NIC number is: " + nic.value
            type.innerHTML = "This is a new NIC"
            dob.innerHTML = "Date of Birth: " + nic.value.substring(0, 4) + "/" 
            age.innerHTML = "Age: " + (2021 - nic.value.substring(0, 4))
            gender.innerHTML = "Gender: Male" 
        }
        // (if 366 < 3+4+5 numbers are < 500 --> not a valid NIC)
        else if ('366' < nic.value.substr(4, 3) && nic.value.substr(4, 3) < '500') {
            nicno.innerHTML = nic.value + " is not a valid NIC number"
        }
        // (if 500 <= 3+4+5 numbers are <= 866 --> female)
        else if ('500' <= nic.value.substr(4, 3) && nic.value.substr(4, 3) <= '866') {
            nicno.innerHTML = "Your NIC number is: " + nic.value
            type.innerHTML = "This is a new NIC"
            dob.innerHTML = "Date of Birth: " + nic.value.substring(0, 4) + "/" 
            age.innerHTML = "Age: " + (2021 - nic.value.substring(0, 4))
            gender.innerHTML = "Gender: Female" 
        }
        // (if 866 < 3+4+5 numbers are < 999 --> female)
        else if ('866' < nic.value.substr(4, 3) && nic.value.substr(4, 3) < '999') {
            nicno.innerHTML = nic.value + " is not a valid NIC number"
        }            
    } 
    else if (nic.value.length === 0) {
        nicno.innerHTML = "Please add your NIC number"
    } else {
        nicno.innerHTML = nic.value + " is not a valid NIC number"
    }

    e.preventDefault()
}) 
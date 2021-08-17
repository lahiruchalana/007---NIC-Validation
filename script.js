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
                    age.innerHTML = "Age: " + (2021 - (19 + nic.value.substring(0, 2)))
                    gender.innerHTML = "Gender: Male" 
                    // if it is a leap year or not it does not matter. leap year and non leap year both can use this code.
                    if ((nic.value.substring(0, 2) % 4) === 0 || (nic.value.substring(0, 2) % 4) === 1 || (nic.value.substring(0, 2) % 4) === 2 || (nic.value.substring(0, 2) % 4) === 3) {
                        if (nic.value.substr(2, 3) <= 31) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/January/" + nic.value.substr(2, 3)
                        } else if (nic.value.substr(2, 3) <= 60) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/February/" + (nic.value.substr(2, 3) - 31)
                        } else if (nic.value.substr(2, 3) <= 91) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/March/" + (nic.value.substr(2, 3) - 60)
                        } else if (nic.value.substr(2, 3) <= 121) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/April/" + (nic.value.substr(2, 3) - 91)
                        } else if (nic.value.substr(2, 3) <= 152) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/May/" + (nic.value.substr(2, 3) - 121)
                        } else if (nic.value.substr(2, 3) <= 182) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/June/" + (nic.value.substr(2, 3) - 152)
                        } else if (nic.value.substr(2, 3) <= 213) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/July/" + (nic.value.substr(2, 3) - 182)
                        } else if (nic.value.substr(2, 3) <= 244) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/August/" + (nic.value.substr(2, 3) - 213)
                        } else if (nic.value.substr(2, 3) <= 274) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/September/" + (nic.value.substr(2, 3) - 244)
                        } else if (nic.value.substr(2, 3) <= 305) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/Octomber/" + (nic.value.substr(2, 3) - 274)
                        } else if (nic.value.substr(2, 3) <= 335) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/November/" + (nic.value.substr(2, 3) - 305)
                        } else if (nic.value.substr(2, 3) <= 366) {
                            dob.innerHTML = "Date of Birth: " + nic.value.substr(0, 2) + "/December/" + (nic.value.substr(2, 3) - 335)
                        }
                    } 
                }
                // (if 366 < 3+4+5 numbers are < 500 --> not a valid NIC)
                else if ('366' < nic.value.substring(2, 3) && nic.value.substring(2, 3) < '500') {
                    nicno.innerHTML = nic.value + " is not a valid NIC number"
                }
                // (if 500 <= 3+4+5 numbers are <= 866 --> female)
                else if ('500' <= nic.value.substring(2, 3) && nic.value.substring(2, 3) <= '866') {
                    nicno.innerHTML = "Your NIC number is: " + nic.value
                    type.innerHTML = "This is an old NIC"
                    age.innerHTML = "Age: " + (2021 - (19 + nic.value.substring(0, 2)))
                    gender.innerHTML = "Gender: Female" 
                    dob.innerHTML = dobSelector(nic.value.substr(2, 3) - 500)
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
            age.innerHTML = "Age: " + (2021 - nic.value.substring(0, 4))
            gender.innerHTML = "Gender: Male" 
            dob.innerHTML = dobSelector(nic.value.substr(4, 3))
        }
        // (if 366 < 3+4+5 numbers are < 500 --> not a valid NIC)
        else if ('366' < nic.value.substr(4, 3) && nic.value.substr(4, 3) < '500') {
            nicno.innerHTML = nic.value + " is not a valid NIC number"
        }
        // (if 500 <= 3+4+5 numbers are <= 866 --> female)
        else if ('500' <= nic.value.substr(4, 3) && nic.value.substr(4, 3) <= '866') {
            nicno.innerHTML = "Your NIC number is: " + nic.value
            type.innerHTML = "This is a new NIC"
            age.innerHTML = "Age: " + (2021 - nic.value.substring(0, 4))
            gender.innerHTML = "Gender: Female" 
            dob.innerHTML = dobSelector(nic.value.substr(4, 3) - 500)
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
    
    // if it is a leap year or not it does not matter. leap year and non leap year both can use this code.
    function dobSelector(days) {
        if ((nic.value.substring(0, 4) % 4) === 0 || (nic.value.substring(0, 4) % 4) === 1 || (nic.value.substring(0, 4) % 4) === 2 || (nic.value.substring(0, 4) % 4) === 3) {
            if (days <= 31) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/January/" + days
            } else if (days <= 60) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/February/" + (days - 31)
            } else if (days <= 91) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/March/" + (days - 60)
            } else if (days <= 121) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/April/" + (days - 91)
            } else if (days <= 152) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/May/" + (days - 121)
            } else if (days <= 182) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/June/" + (days - 152)
            } else if (days <= 213) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/July/" + (days - 182)
            } else if (days <= 244) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/August/" + (days - 213)
            } else if (days <= 274) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/September/" + (days - 244)
            } else if (days <= 305) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/Octomber/" + (days - 274)
            } else if (days <= 335) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/November/" + (days - 305)
            } else if (days <= 366) {
                setDOB = "Date of Birth: " + nic.value.substr(0, 4) + "/December/" + (days - 335)
            }
        }

        return setDOB 
    }
    e.preventDefault()
}) 
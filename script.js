const nic = document.getElementById('NIC')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const nicno = document.getElementById('NICno')
const type = document.getElementById('type')
const dob = document.getElementById('DOB')
const age = document.getElementById('age')
const gender = document.getElementById('gender')

form.addEventListener('submit', (e) => {

    var nicNo = nic.value.trim()
    var currentYear = 2021
    let messages = []

    if (nic.value === '' || nic.value == null) {
        messages.push('NIC number is required')
    }
    
    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
    }

    // identify old valid NIC 
    if (nic.value.length === 10) {
        if (nicNo.substring( nic.value.length - 1) == 'v' || 
            nicNo.substring( nic.value.length - 1) == 'x' ||
            nicNo.substring( nic.value.length - 1) == 'V' ||
            nicNo.substring( nic.value.length - 1) == 'X' ) {
                var year = nicNo.substr(0, 2)
                var dobDays = nicNo.substr(2, 3)
                type.innerHTML = "Old NIC"
                getDetails(dobDays, year)
        } else {
            nicno.innerHTML = nic.value + " has a invalid last character"
        }
    } 
    // identify new valid NIC 
    else if (nic.value.length === 12) {
        var year = nic.value.substr(0, 4)
        var dobDays = nic.value.substr(4, 3)
        type.innerHTML = "New NIC"
        getDetails(dobDays, year)
    } 
    else if (nic.value.length === 0) {
        nicno.innerHTML = "Please add your NIC number"
    } else {
        notValid()
    }
    // find the gender and dob months and dates 
    function getDetails(dobDays, year) {
        if (dobDays === '000') {
            notValid() 
        } 
        else if (dobDays <= '366') {
            nicno.innerHTML = nic.value
            age.innerHTML = (currentYear - (19 + year))
            gender.innerHTML = "Male" 
            dob.innerHTML = year +  dobSelector(dobDays, year)              
        }
        else if ('366' < dobDays && dobDays < '500') {
            notValid() 
        }
        else if ('500' <= dobDays && dobDays <= '866') {
            nicno.innerHTML = nic.value
            age.innerHTML = (currentYear - (19 + year))
            gender.innerHTML = "Female" 
            dob.innerHTML = year +  dobSelector((dobDays - 500), year)
        }
        else if ('866' < dobDays && dobDays < '999') {
            notValid()
        }
    }
    // if it is a leap year or not it does not matter. leap year and non leap year both can use this code.
    function dobSelector(days, year) {
        if ((year % 4) === 0 || (year % 4) === 1 || (year % 4) === 2 || (year % 4) === 3) {
            if (days <= 31) {
                setDOB = "/January/" + days
            } else if (days <= 60) {
                setDOB = "/February/" + (days - 31)
            } else if (days <= 91) {
                setDOB = "/March/" + (days - 60)
            } else if (days <= 121) {
                setDOB = "/April/" + (days - 91)
            } else if (days <= 152) {
                setDOB = "/May/" + (days - 121)
            } else if (days <= 182) {
                setDOB = "/June/" + (days - 152)
            } else if (days <= 213) {
                setDOB = "/July/" + (days - 182)
            } else if (days <= 244) {
                setDOB = "/August/" + (days - 213)
            } else if (days <= 274) {
                setDOB = "/September/" + (days - 244)
            } else if (days <= 305) {
                setDOB = "/Octomber/" + (days - 274)
            } else if (days <= 335) {
                setDOB = "/November/" + (days - 305)
            } else if (days <= 366) {
                setDOB = "/December/" + (days - 335)
            }
        }
        return setDOB 
    }

    function notValid() {
        nicno.innerHTML = "Not a valid NIC number"
        age.innerHTML = "N/A" 
        gender.innerHTML = "N/A" 
        dob.innerHTML = "N/A" 
    }
    e.preventDefault()
}) 
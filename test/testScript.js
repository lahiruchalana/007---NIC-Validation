const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    for (let i = 1; i < 13; i++) {
        const nic = document.getElementById("NIC" + i)
        const errorElement = document.getElementById("error" + i)
        const nicno = document.getElementById("NICno" + i)
        const type = document.getElementById("type" + i)
        const dob = document.getElementById("DOB" + i)
        const age = document.getElementById("age" + i)
        const gender = document.getElementById("gender" + i)


        var nicTrim = nic.value.trim()
        var nicNo = nicTrim.replace(/[^a-zA-Z0-9]/g, "")
        var lastCharacter = nicNo.substring( nicNo.length - 1).toLowerCase()
        var currentYear = 2021
        let messages = []

        if (nicNo === '' || nicNo == null) {
            messages.push('NIC number is required')
        }
        if (messages.length > 0) {
            errorElement.innerText = messages.join(', ')
        }
        // identify old valid NIC (ex NIC - 971811102v)
        if (lastCharacter == 'v' || 
            lastCharacter == 'x' ) {
            if (nicNo.length >= 10) {
                var nicNo = nicTrim.substring(0, (nicTrim.length - 1)).replace(/[^0-9]/g, "") + nicTrim.substring(nicTrim.length - 1)
                if (nicNo.length === 10) {
                    var year = 19 + nicNo.substr(0, 2)
                    var dobDays = nicNo.substr(2, 3)
                    type.innerHTML = "Old NIC"
                    getDetails(dobDays, year)
                } else {
                    notValid()
                }
            } else {
                notValid()
            }
        } 
        else if (nicNo.length >= 9) {
            // nicTrim includes letters so use replace() method
            var nicNo = nicTrim.replace(/[^0-9]/g, "")
            // identify old valid NIC but without "v" or "x" (ex NIC - 971811102)
            if (nicNo.length === 9) {
                var year = 19 + nicNo.substr(0, 2)
                var dobDays = nicNo.substr(2, 3)
                type.innerHTML = "Old NIC"
                getDetails(dobDays, year)
            }
            // identify new valid NIC (ex NIC - 199718101102)
            else if (nicNo.length === 12) {
                var year = nicNo.substr(0, 4)
                var dobDays = nicNo.substr(4, 3)
                type.innerHTML = "New NIC"
                getDetails(dobDays, year)
            } 
            else if (nicNo.length === 0) {
                nicno.innerHTML = "Please add your NIC number"
            } else {
                notValid()
            }
        } else {
            notValid()
        }
        // find the gender and dob months and dates 
        function getDetails(dobDays, year) {
            if (dobDays === '000') {
                notValid() 
            } 
            // february 29 not available in some years ex - 97/98/99 (%4 === 1 | 2 | 3) only available in 96 - 2000 - 2004 (+4)
            else if ( (dobDays === '060' || dobDays === '560') &&  ((year % 4) === 1 || (year % 4) === 2 || (year % 4) === 3) ) {
                notValid() 
            }
            else if (dobDays <= '366') {
                nicno.innerHTML = nicNo
                age.innerHTML = (currentYear - (year))
                gender.innerHTML = "Male" 
                dob.innerHTML = year +  dobSelector(dobDays, year)              
            }
            else if ('366' < dobDays && dobDays < '500') {
                notValid() 
            }
            else if ('500' <= dobDays && dobDays <= '866') {
                nicno.innerHTML = nicNo
                age.innerHTML = (currentYear - (year))
                gender.innerHTML = "Female" 
                dob.innerHTML = year +  dobSelector((dobDays - 500), year)
            }
            else if ('866' < dobDays && dobDays < '999') {
                notValid()
            }
        }
        // if it is a leap year or not it does not matter. leap year and non leap year both can use this code. (feb 29 = 060 / 560)
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
    } 
    e.preventDefault()
})
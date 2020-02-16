








const info= [];

function getUserInput()
{
    window.onload()=function()
    {
        document.getElementById('sum').addEventListener("click", function () {
            const firstNameValue = document.getElementById("firstname").value;
            const lastNameValue = document.getElementById("lastname").value;
            const dateOfBirthValue = document.getElementById("dateOfBirth").value;
            const feesValue = document.getElementById("fees").value;
            const GenderValue = document.getElementById("gender").value;
            document.getElementById("firstname-out").textContent = firstNameValue;
            document.getElementById("lastname-out").textContent = lastNameValue;
            document.getElementById("dateOfBirth-out").textContent = dateOfBirthValue;
            document.getElementById("gender-out").textContent = feesValue;
            document.getElementById("gender-out").textContent = GenderValue;
        
            info.push(firstNameValue,lastNameValue,dateOfBirthValue,feesValue,GenderValue);
        });
    }

}

getUserInput();
    





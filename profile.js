document.addEventListener("DOMContentLoaded", function () {
    const storedData = JSON.parse(localStorage.getItem("profileData"));
    const registerForm = document.getElementById("registerForm");
    const registerOk = document.getElementById("registerOk");
    const logoutBtn = document.getElementById("logoutBtn");
    const deleteAccountBtn = document.getElementById("deleteAccountBtn");

    if (storedData) {
        
        registerForm.style.display = "none";

        const table = document.createElement("table");
        table.id = "profileTable";

        // table header
        const headerRow = table.insertRow();
        const nameHeader = headerRow.insertCell();
        nameHeader.innerHTML = "Name";
        const emailHeader = headerRow.insertCell();
        emailHeader.innerHTML = "Email";
        const addressHeader = headerRow.insertCell();
        addressHeader.innerHTML = "Address";

        // table rows
        const dataRow = table.insertRow();
        const nameCell = dataRow.insertCell();
        nameCell.innerHTML = storedData.name;
        const emailCell = dataRow.insertCell();
        emailCell.innerHTML = storedData.email;
        const addressCell = dataRow.insertCell();
        addressCell.innerHTML = storedData.address;

        registerOk.appendChild(table);
        registerOk.style.display = "flex";
    } else {
            registerForm.style.display = "block";
    }

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const acceptTerms = document.getElementById("accept_terms_and_conditions").checked;

        if (!acceptTerms) {
            swal({
                text: "You must accept terms and conditions!",
                icon: "warning",
            });
            return;
        }

        localStorage.setItem("profileData", JSON.stringify({ name, email, address }));

        registerForm.style.display = "none";

        const table = document.createElement("table");
        table.id = "profileTable";

        // table header
        const headerRow = table.insertRow();
        const nameHeader = headerRow.insertCell();
        nameHeader.innerHTML = "Name";
        const emailHeader = headerRow.insertCell();
        emailHeader.innerHTML = "Email";
        const addressHeader = headerRow.insertCell();
        addressHeader.innerHTML = "Address";

        // table rows
        const dataRow = table.insertRow();
        const nameCell = dataRow.insertCell();
        nameCell.innerHTML = name;
        const emailCell = dataRow.insertCell();
        emailCell.innerHTML = email;
        const addressCell = dataRow.insertCell();
        addressCell.innerHTML = address;

        registerOk.appendChild(table);
        registerOk.style.display = "flex";
    });



    logoutBtn.addEventListener("click", function (event) {
        event.preventDefault();
        registerForm.style.display = "block";
        registerOk.style.display = "none";
        localStorage.removeItem("profileData");
    });

    deleteAccountBtn.addEventListener("click", function (event) {


        swal({
            title: "Delete account",
            text: "Are you sure you want to delete your account?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                event.preventDefault();
                localStorage.removeItem("profileData");
                registerForm.style.display = "block";
                registerOk.style.display = "none";
                swal("Account deleted :(");
            } else {
                swal("Thanks for staying!");
            }
        });

    });
});







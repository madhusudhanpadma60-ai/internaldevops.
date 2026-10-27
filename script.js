    function validateForm() {
        let n = document.getElementById("name").value;
        let e = document.getElementById("email").value;
        let p = document.getElementById("password").value;
        if (n == "" || e == "" || p == "") {
            alert("All fields must be filled out");
            return false;
        }   
        if(p.length < 8) {
            alert("Password must be at least 8 characters long");
            return false;
        }
    }
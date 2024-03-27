
document.getElementById("sex").addEventListener("change", function() {
    var sexSelect = document.getElementById("sex");
    var sexValue = sexSelect.options[sexSelect.selectedIndex].value;
    var sexInput = document.getElementById("sexInput");

    // Update the value of the hidden input based on the selected option
    if (sexValue === "male") {
        sexInput.value = "1";
    } else if (sexValue === "female") {
        sexInput.value = "0";
    }
});


// Update value for CP
document.getElementById("cp").addEventListener("change", function() {
    var cpSelect = document.getElementById("cp");
    var cpValue = cpSelect.options[cpSelect.selectedIndex].value;
    var cpInput = document.getElementById("cpInput");

    // Update the value of the hidden input based on the selected option
    switch(cpValue) {
        case "typical":
            cpInput.value = "0";
            break;
        case "atypical":
            cpInput.value = "1";
            break;
        case "nonanginal":
            cpInput.value = "2";
            break;
        case "asymptomatic":
            cpInput.value = "3";
            break;
        default:
            break;
    }
});

// Update value for FBS
document.getElementById("fbs").addEventListener("change", function() {
    var fbsSelect = document.getElementById("fbs");
    var fbsValue = fbsSelect.options[fbsSelect.selectedIndex].value;
    var fbsInput = document.getElementById("fbsInput");

    // Update the value of the hidden input based on the selected option
    fbsInput.value = (fbsValue === "greater120") ? "1" : "0";
});

// Update value for restecg
document.getElementById("restecg").addEventListener("change", function() {
    var restecgSelect = document.getElementById("restecg");
    var restecgValue = restecgSelect.options[restecgSelect.selectedIndex].value;
    var restecgInput = document.getElementById("restecgInput");

    // Update the value of the hidden input based on the selected option
    restecgInput.value = (restecgValue === "normal") ? "0" : "1";
});

// Update value for exang
document.getElementById("exang").addEventListener("change", function() {
    var exangSelect = document.getElementById("exang");
    var exangValue = exangSelect.options[exangSelect.selectedIndex].value;
    var exangInput = document.getElementById("exangInput");

    // Update the value of the hidden input based on the selected option
    exangInput.value = (exangValue === "yes") ? "1" : "0";
});

// Update value for slope
document.getElementById("slope").addEventListener("change", function() {
    var slopeSelect = document.getElementById("slope");
    var slopeValue = slopeSelect.options[slopeSelect.selectedIndex].value;
    var slopeInput = document.getElementById("slopeInput");

    // Update the value of the hidden input based on the selected option
    switch(slopeValue) {
        case "upsloping":
            slopeInput.value = "0";
            break;
        case "flat":
            slopeInput.value = "1";
            break;
        case "downsloping":
            slopeInput.value = "2";
            break;
        default:
            break;
    }
});

// Update value for thal
document.getElementById("thal").addEventListener("change", function() {
    var thalSelect = document.getElementById("thal");
    var thalValue = thalSelect.options[thalSelect.selectedIndex].value;
    var thalInput = document.getElementById("thalInput");

    // Update the value of the hidden input based on the selected option
    switch(thalValue) {
        case "normal":
            thalInput.value = "1";
            break;
        case "fixed":
            thalInput.value = "2";
            break;
        case "reversible":
            thalInput.value = "3";
            break;
        default:
            break;
    }
});

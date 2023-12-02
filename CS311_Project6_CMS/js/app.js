document.addEventListener("DOMContentLoaded", function () {
    function addInput(containerId, labelText, inputID) {
        var container = document.getElementById(containerId);
        var inputGroup = document.createElement("div");
        inputGroup.style.display = "flex"; // Use flexbox to align items horizontally

        if (labelText.endsWith(":")) {
            var label = document.createElement("span");
            label.textContent = labelText;
            label.style.marginTop = "15px";
            label.style.fontSize = "10pt";

            // Append label to the input group
            inputGroup.appendChild(label);
        } else {
            // Create label text
            var label = document.createElement("span");
            label.textContent = labelText;
            label.style.fontSize = "10pt";

            // Create input
            var input = document.createElement("input");
            input.type = "text";
            input.id = inputID;

            // Append label and input to the input group
            inputGroup.appendChild(label);
            inputGroup.appendChild(input);
        }

        // Append the input group to the container
        container.appendChild(inputGroup);
    }

    // Add event listener to the addCurrentAssets button
    document.getElementById("addCurrentAssets").addEventListener("click", function () {
        // Hide the button and show calculate button
        this.style.display = "none";
        document.getElementById("totalCurrentAssetsInput").style.display = "flex";
        document.getElementById("calculatePosition").style.display = "block";

        // Add input elements 
        addInput("asset-input", "Cash: ", "cashInput");
        addInput("asset-input", "Inventory: ", "inventoryInput");
        addInput("asset-input", "Supplies: ", "suppliesInput");
        addInput("asset-input", "Temporary Investments: ", "tempInvestmentsInput");
    });
    

    // Add event listener to the addCurrentInvestments button
    document.getElementById("addCurrentInvestments").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("totalInvestmentsInput").style.display = "flex";
        document.getElementById("calculatePosition").style.display = "block";

        // Add input elements
        addInput("investment-input", "Land: ", "investmentInput");
        addInput("investment-input", "Building & Improvements: ", "investmentInput");
        addInput("investment-input", "Equipment: ", "investmentInput");
        addInput("investment-input", "Temporary Investments: ", "investmentInput");
    });

    // Add event listener to the addIntangibles button
    document.getElementById("addIntangibles").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("totalIntangiblesInput").style.display = "flex";
        document.getElementById("calculatePosition").style.display = "block";

        // Add input elements 
        addInput("intangibles-input", "Trade Names: ", "intangiblesInput");
        addInput("intangibles-input", "Goodwill: ", "intangiblesInput");
    });
    // Add event listener to the addLiabilities button
    document.getElementById("addLiabilities").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("totalLiabilitiesInput").style.display = "flex";
        document.getElementById("calculatePosition").style.display = "block";

        // Add input elements 
        addInput("liabilities-input", "Accounts Payable: ", "liabilitiesInput");
        addInput("liabilities-input", "Notes Payable: ", "liabilitiesInput");
        addInput("liabilities-input", "Interest Payable: ", "liabilitiesInput");
        addInput("liabilities-input", "Wages Payable: ", "liabilitiesInput");
        addInput("liabilities-input", "Accrued Expenses: ", "liabilitiesInput");
    });
    // Add event listener to the addLongTerm button
    document.getElementById("addLongterm").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("totalLongTermInput").style.display = "flex";
        document.getElementById("calculatePosition").style.display = "block";

        // Add input elements 
        addInput("longterm-input", "Notes Payable: ", "longTermInput");
        addInput("longterm-input", "Bonds Payable: ", "longTermInput");
    });
});

function calculate() {
    // Calculate total current assets
    var totalCurrentAssets = 0;
    var assetInputs = document.querySelectorAll("#asset-input input");
    assetInputs.forEach(function (input) {
        var value = parseFloat(input.value) || 0;
        totalCurrentAssets += value;
    });

    // Calculate total investments
    var totalInvestments = 0;
    var investmentInputs = document.querySelectorAll("#investment-input input");
    investmentInputs.forEach(function (input) {
        var value = parseFloat(input.value) || 0;
        totalInvestments += value;
    });

    // Calculate total intangibles
    var totalIntangibles = 0;
    var intangiblesInputs = document.querySelectorAll("#intangibles-input input");
    intangiblesInputs.forEach(function (input) {
        var value = parseFloat(input.value) || 0;
        totalIntangibles += value;
    });
    
    // Calculate total current liabilities
    var totalCurrentLiabilities = 0;
    var liabilitiesInputs = document.querySelectorAll("#liabilities-input input");
    liabilitiesInputs.forEach(function (input) {
        var value = parseFloat(input.value) || 0;
        totalCurrentLiabilities += value;
    });

    // Calculate total longterm liabilities
    var totalLongTermLiabilities = 0;
    var longTermliabilitiesInputs = document.querySelectorAll("#longterm-input input");
    longTermliabilitiesInputs.forEach(function (input) {
        var value = parseFloat(input.value) || 0;
        totalLongTermLiabilities += value;
    });

    // Calculate net position
    var totalAssets = totalCurrentAssets + totalInvestments + totalIntangibles;
    var totalLiabilities = totalCurrentLiabilities + totalLongTermLiabilities;
    var netPosition = totalAssets - totalLiabilities;

    // Display the totals
    document.getElementById("total-asset-label").textContent = "Total Assets: $" + totalAssets.toFixed(2);
    document.getElementById("total-liabilities-label").textContent = "Total Liabilities: $" + totalLiabilities.toFixed(2);
    document.getElementById("total-position-label").textContent = "Position: $" + netPosition.toFixed(2);
    
    document.getElementById("totalCurrentAssetsInput").textContent = "Total Current Assets: $"+totalCurrentAssets.toFixed(2);
    document.getElementById("totalInvestmentsInput").textContent = "Total Investments: $"+totalInvestments.toFixed(2);
    document.getElementById("totalIntangiblesInput").textContent = "Total Intangibles: $"+totalIntangibles.toFixed(2);
    document.getElementById("totalLiabilitiesInput").textContent = "Total Current Liabilities: $"+totalCurrentLiabilities.toFixed(2);
    document.getElementById("totalLongTermInput").textContent = "Total Long-Term Liabilities: $"+totalLongTermLiabilities.toFixed(2);

}

// Add event listener to the calculatePosition button
document.getElementById("calculatePosition").addEventListener("click", function () {
    calculate();
});

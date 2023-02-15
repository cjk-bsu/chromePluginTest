window.onload = function() {
    document.getElementById("submitBtn").addEventListener('click', myFunction)
}

function myFunction() {
    var input = document.getElementById("searchTerm").value;

    req = new XMLHttpRequest;

    req.open("GET", `https://cast.boisestate.edu/test/splchk.php?word=${input}&max=5`, true);
    req.send();

    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            var result = JSON.parse(req.responseText);
            var suggestions = result['suggestions']
            document.getElementById("results").innerHTML = suggestions.map(item => `<li>${item}</li>`).join('');
        }
    }
};

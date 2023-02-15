

function myFunction() {
    var input = document.getElementById("searchTerm").value;
    //document.getElementById("term").innerHTML = input

    req = new XMLHttpRequest;

    req.open("GET",  `https://cast.boisestate.edu/test/splchk.php?word=${input}&max=5`, true);
    req.send();

    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            //console.log(req.responseText);

            var result = req.responseText;
            //console.log(typeof(result));
            var JSONresult = JSON.parse(result);
            var suggestions = JSONresult['suggestions']
            //console.log(suggestions)
            
            //eof(JSONresult))
            document.getElementById("results").innerHTML = suggestions.map(item => `<li>${item}</li>`);
        }
    }
};

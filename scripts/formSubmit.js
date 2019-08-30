function submitForm() {
    //alert("Hello World!");

    var form = document.getElementById("submitIssue");
    var issueTitle = document.getElementById("issueTitle").value;
    var issueDescription = document.getElementById("issueDescription").value;

    //validate form first

    // Create JSON file for submission to GitHub


    alert("Title: " + issueTitle + "\nDescription: " + issueDescription);
}
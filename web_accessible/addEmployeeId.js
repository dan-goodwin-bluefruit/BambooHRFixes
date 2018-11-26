$(document).ready(function() {
    var idDiv = document.createElement('div');
    idDiv.id = "FixesEmployeeId";
    idDiv.style = "display: none;";
    var idDivContent = document.createTextNode(window.common.employeeId); 
    idDiv.appendChild(idDivContent);
    document.body.appendChild(idDiv);
});

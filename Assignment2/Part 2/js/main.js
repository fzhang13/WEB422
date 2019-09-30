/********************************************************************************* *
WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part
of this assignment has been copied manually or electronically from any other source * (including web
sites) or distributed to other students.
*
* Name: _Felix Xin Song Zhang_ Student ID: _111976171_ Date: _May 29th, 2019_
*
*
********************************************************************************/


$(document).ready(function () {

    console.log("Success loading jQuery");
    let employeesModel = [];
    initializeEmployeesModel();

    $("#employee-search").on("keyup", function (event) {
        let filtered = getFilteredEmployeesModel(this.value);
        refreshEmployeeRows(filtered);
    });
    $(document.body).on('click', '.body-row', function (e) {
        let employee = getEmployeeModelById($(this).attr("data-id"));
        if (employee != null) {

            employee.HireDate = moment(employee.HireDate).format('LL');

            let modalContentTemplate = _.template(
                '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %>. <%- employee.AddressZip %></br>' +
                '<strong>Phone Number:</strong> <%- employee.PhoneNum %> ext: <%- employee.Extension %></br>' +
                '<strong>Hire Date:</strong> <%- employee.HireDate %>'
            );
            let modalContent = modalContentTemplate({ 'employee': employee });

            showGenericModal(employee.FirstName + ' ' + employee.LastName, modalContent);
        }
    });
});

function initializeEmployeesModel() {
    $.ajax({
        url: "https://immense-dusk-84099.herokuapp.com/employees",
        type: "GET",
        contentType: "application/json"
    })
        .done(function (data) {
            employeesModel = data;
            refreshEmployeeRows(employeesModel);
            console.log("loaded employee data succesfully");
        })
        .fail(function (err) {
            showGenericModal('Error', 'Unable to get Employees');
            console.log("Error loading employee data");
        });
};

function showGenericModal(title, message) {
    $("#genericModal .modal-title").empty()
        .append(title);
    $("#genericModal .modal-body").empty()
        .append(message);
    $("#genericModal").modal('show');
};

function refreshEmployeeRows(employees) {
    $("#employees-table").empty();
    let template = _.template('<% _.forEach(employees, function(employee){%>' +
        '<div class="row body-row" data-id="<%- employee._id %>">' +
        '<div class="col-xs-4 body-column"><%- _.escape(employee.FirstName) %></div>' +
        '<div class="col-xs-4 body-column"><%- _.escape(employee.LastName) %></div>' +
        '<div class="col-xs-4 body-column"><%- _.escape(employee.Position.PositionName) %></div>' +
        '</div>' +
        '<% }); %>');
    $("#employees-table").append(template({ 'employees': employees }));
};

function getFilteredEmployeesModel(filterString) {
    let filteredEmployeesModel = _.filter(employeesModel, function (e) {
        if (e.FirstName.toLowerCase().includes(filterString.toLowerCase())
            || e.LastName.toLowerCase().includes(filterString.toLowerCase())
            || e.Position.PositionName.toLowerCase().includes(filterString.toLowerCase())) 
            return true;
        else return false;
    });
    return filteredEmployeesModel;
};

function getEmployeeModelById(id) {
    let ret = null;
    $.grep(employeesModel, function (n, i) {
        if (n._id == id) ret = _.cloneDeep(n);
        return false;
    });
    return ret;
}

import axios from "axios";

export default {
    fetchEmployees: function(){
        return axios
            .get("./employeeList")
            .then(res => {
                const employee = res.data;
                return employee.map(employees => {
                    return {
                        name: employees.name,
                        department: employees.department,
                        start_date: employees.start_date,
                        location: employees.location,
                        contact_email: employees.contact_email,
                        contact_number: employees.contact_number,
                        photo: employees.photo,
                        position: employees.position
                    };
                });
            });
    }
};
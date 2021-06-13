const Swal = require('sweetalert2');

export const Alerts = {
    showErrorMessage(message){
        Swal.fire({
            icon : 'error',
            title: 'Error',
            text : message
        })
    },
    showSuccessMessage(message){
        Swal.fire({
            icon : 'success',
            title: '',
            text : message
        })
    }
}
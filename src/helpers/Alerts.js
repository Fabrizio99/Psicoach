const Swal = require('sweetalert2');

export const Alerts = {
    showErrorMessage(message){
        Swal.fire({
            icon : 'error',
            title: 'Error',
            text : message,
            confirmButtonColor: '#8396D6'
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
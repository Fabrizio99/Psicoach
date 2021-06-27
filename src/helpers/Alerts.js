const Swal = require('sweetalert2');

export const Alerts = {
    showErrorMessage(message){
        Swal.fire({
            icon : 'error',
            title: 'Error',
            text : message,
            confirmButtonColor: '#77B2E8'
        })
    },
    showSuccessMessage(message, dismissible=true){
        return Swal.fire({
            icon : 'success',
            title: '',
            text : message,
            allowOutsideClick: dismissible,
            confirmButtonColor: '#77B2E8'
        })
    },
    showInfoMessage(message, title='Mensaje', dismissible){
        return Swal.fire({
            icon : 'info',
            title,
            text : message,
            allowOutsideClick: dismissible,
            confirmButtonColor: '#77B2E8'
        })
    }
}
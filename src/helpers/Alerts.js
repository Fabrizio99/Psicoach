import Swal from 'sweetalert2/dist/sweetalert2.js';

export const Alerts = {
    showErrorMessage(message){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message
        })
    },
    showSuccessMessage(message){
        Swal.fire({
            icon: 'success',
            title: '',
            text : message
        })
    }
}
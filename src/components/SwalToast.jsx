import React from "react";
import Swal from "sweetalert2";

const SwalToast = ({
    icon = 'info',
    title,
    content,
    timer = 3000,
    position = 'bottom-end',
    confirmText,
    denyText,
    confirmCallback,
    denyCallback
}) => {
    let confirmButtonColorClass = '';
    let cancelButtonColorClass = 'btn-secondary';

    switch (icon) {
        case 'info':
            confirmButtonColorClass = 'btn-primary';
            break;
        case 'success':
            confirmButtonColorClass = 'btn-success';
            break;
        case 'warning':
            confirmButtonColorClass = 'btn-warning';
            break;
        case 'error':
            confirmButtonColorClass = 'btn-danger';
            break;
        case 'question':
            confirmButtonColorClass = 'btn-info';
            if (confirmText === 'Ok') { confirmText = 'Si' };
            if (!denyText) { denyText = 'No' };
            break;
        default:
            confirmButtonColorClass = 'btn-primary';
    }

    return (
        Swal.fire({
            toast: true,
            position: position, // Posición: top-start, top-end, bottom-start
            icon: icon,
            title: title,
            html: content,
            showConfirmButton: confirmText ? true : false,
            confirmButtonText: confirmText,
            showDenyButton: !!denyText,
            denyButtonText: denyText || 'Cerrar',
            customClass: {
                confirmButton: `btn ${confirmButtonColorClass}`,
                cancelButton: `btn ${cancelButtonColorClass}`,
                denyButton: 'btn btn-secondary'
            },
            timer: timer,
            timerProgressBar: timer ? true : false,
        }).then((result) => {
            if (result.isConfirmed) {
                confirmCallback && confirmCallback();
            } else if (result.isDenied) {
                denyCallback && denyCallback();
            }
        })
    )
}

export default SwalToast;

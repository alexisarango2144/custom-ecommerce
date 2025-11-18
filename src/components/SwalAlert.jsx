import React from "react";
import Swal from "sweetalert2";

const SwalAlert = ({
    icon = 'info',
    title,
    content,
    confirmText = 'Ok',
    cancelText,
    denyText,
    confirmCallback,
    denyCallback,
    confirmButtonColorClass
}) => {
    let cancelButtonColorClass = 'btn-secondary';

    if (!confirmButtonColorClass) {
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
    }


    return (
        Swal.fire({
            title: title,
            icon: icon,
            html: content,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            showCloseButton: false,
            showCancelButton: !!cancelText,
            denyButtonText: denyText,
            showDenyButton: !!denyText,
            focusConfirm: true,
            customClass: {
                confirmButton: `btn ${confirmButtonColorClass}`,
                cancelButton: `btn ${cancelButtonColorClass}`,
                denyButton: 'btn btn-secondary',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                confirmCallback && confirmCallback();
            } else if (result.isDenied) {
                denyCallback && denyCallback();
            }
        })
    )
}

export default SwalAlert;

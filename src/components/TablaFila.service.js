import Swal from "sweetalert2";

export const notificacionSweet = (cb) => {

    Swal.fire({
        title: `¿Estás seguro de que quires eliminar?`,
        text: "¡No podrás restablecer esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, adelante!",
        cancelButtonText: "Noooooo!",
      }).then((result) => {
        if (result.isConfirmed) {
          cb()
          Swal.fire({
            title: "Lo borré!!!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}


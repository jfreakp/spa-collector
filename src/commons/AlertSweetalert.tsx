import { SweetAlertIcon } from "sweetalert2";
import Swal from "sweetalert2";


export const AlertSweetalert = (title: string, text: string, icon: SweetAlertIcon, confirmButtonText:string) => {
  Swal.fire({
      title,
      text,
      icon,
      confirmButtonText,
    });
}


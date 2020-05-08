import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMenuService {
  public getNotifications(): object[] {
    return [
      {
        text: 'Tienes 3 nuevas solicitudes.',
        time: 'Ahora',
        icon: 'plus_one',
        color: 'primary',
      }, {
        text: 'Error en la Base de Datos',
        time: '1 min',
        icon: 'error_outline',
        color: 'secondary',
      }, {
        text: 'La Dieta está lista!',
        time: '2 hours',
        icon: 'new_releases',
        color: 'primary',
      }, {
        text: 'Tienes 4 nuevos correos.',
        time: '5 dias',
        icon: 'mail_outline',
        color: 'primary',
      },
    ];
  }
}

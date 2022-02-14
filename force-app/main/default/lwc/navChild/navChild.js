import { LightningElement } from 'lwc';

export default class NavChild extends LightningElement {

    navBar =[
                 {Id:'101',
                  'Name':'Booking service'

                },
                {Id:'101',
                'Name':'Mechanic'

              },

              {Id:'102',
              'Name':'Customers'

            },];


    handleSelectMenu = () =>
    {
        const selectedEvent = new CustomEvent('selected', { detail: this.navBar.Id });
        this.dispatchEvent(selectedEvent);
    }


}
import { LightningElement ,track,wire} from 'lwc';
import getDetails from '@salesforce/apex/BookingController.getDetails';

export default class Test extends LightningElement {

 data =[

      { id:'101', 'Name': 'Beloro'}
 ];

 modalBookingId;
 isModalOpen = false;

@track data;
@wire(getDetails) 
accountRecords({data , error}){
  
    if(data){
        this.data = data;

    }
    else if(error){
        this.data = undefined;
    }

  }

  handleEdit = (event) =>{
    this.modalBookingId = event.target.value;
    console.log(this.modalBookingId);
    console.log('show the data'+this.data);
    this.isModalOpen = true;
}

handleModalClose = (event) =>{
    this.isModalOpen = false;
}

}
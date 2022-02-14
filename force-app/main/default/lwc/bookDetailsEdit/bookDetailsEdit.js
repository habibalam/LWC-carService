import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class BookDetailsEdit extends LightningElement {

 @api bccId;

 

closeModal = () =>{
    this.dispatchEvent(new CustomEvent("closemodal"));
}

handleSubmit = (event) =>{
    const fields = event.detail.fields;
    this.template.querySelector('lightning-record-form').submit(fields);
}

handleSuccess = (event) =>{
    console.log(JSON.stringify(event.detail));
    this.dispatchEvent(new ShowToastEvent({
        title: 'Booking Details Updated',
        message: `Record updated Successfully`,
        variant: 'success',
        mode: 'sticky'
    }));
    this.closeModal();
}

handleError = (event) => {
    console.log(JSON.stringify(event.error));
    this.dispatchEvent(new ShowToastEvent({
        title: 'Error',
        message: 'Booking  Updated Failed',
        variant: 'destructive',
        mode: 'sticky'
    }));
}

}
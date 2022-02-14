import { LightningElement,track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationBar extends NavigationMixin(LightningElement) {


    @track cssClass = 'slds-col';
    @track contactList;
   
    
   // book_service=[{'id':101, 'ServiceName':'Washing', 'serviceCharge':500}];
    

   NavigateToMechanic = () =>
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'00B5g00000J8LjNEAV',
                objectApiName: 'Contact',
                actionName:'view'
            },
        });
    }


}
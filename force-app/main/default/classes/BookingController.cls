public with sharing class BookingController {
    
    @AuraEnabled(cacheable=true)
    public static List<Booking__c>getDetails(){

        return [select Id ,Name ,Booking_Date__c,Expected_Delivery_Date__c, Stage__c, Service_Charges__c, payment_Status__c,Service_Type__c from Booking__c limit 5];
    }
}

public with sharing class GetContacts {

    //Method will return the list of contacts
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContact(){
        return [SELECT FirstName, LastName, Name, Id from Contact order by FirstName limit 5];
    }
}

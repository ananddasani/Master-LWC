public with sharing class DataTableThree {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(){

        return [SELECT Id, Name, Phone FROM Contact order by Name LIMIT 5];
    }
}

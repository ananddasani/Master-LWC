public with sharing class RelatedContacts {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(String accId) {
        List<Contact> reletedConList = [SELECT Id, Name, Phone FROM Contact WHERE AccountId =: accId ORDER BY Name LIMIT 5];

        return reletedConList;
    }
}

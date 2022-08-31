public with sharing class dataTableOne {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        List<Account> accounts = [SELECT id, Name FROM Account order by Name LIMIT 5];

        return accounts;
    }
}

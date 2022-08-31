public with sharing class AccountData {

    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(String name) {

        if(name == null){
            return [SELECT Id, Name FROM Account LIMIT 5 ];
        }

        String searchKey = '%' + name + '%';
        return [SELECT Id, Name FROM Account WHERE Name like :searchKey ];

    }
}

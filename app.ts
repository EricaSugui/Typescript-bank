import { AdminAccount } from './class/AdminAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(50)
peopleAccount.withdraw(30)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(50)
companyAccount.withdraw(55)
companyAccount.getLoan(30)
companyAccount.withdraw(55)

const challengeAccount: AdminAccount = new AdminAccount('ADMIN', 11)
console.log(challengeAccount)
challengeAccount.deposit(100)
challengeAccount.withdraw(80)

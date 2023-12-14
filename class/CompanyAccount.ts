import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  getLoan = (value:number): void => {
    if(this.getStatus()){
      let balance = this.getBalance()
      balance += value
      
      let newBalance = this.setBalance(balance)
      console.log(`Voce pegou um empréstimo de ${value}. Seu saldo atual é de ${newBalance}`)
    } else {
      console.log(`Transação indisponível. Fale com o seu gerente.`)
    }
  }
}

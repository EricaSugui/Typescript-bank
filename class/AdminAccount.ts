import { DioAccount } from "./DioAccount"

export class AdminAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    deposit = (value:number): void =>{
        value += 10
        if(this.getStatus()){
            let balance = this.getBalance() 
            balance += value
            this.setBalance(balance)
            console.log(`Voce depositou ${value}, seu saldo atual é de ${balance}.`)
          }
    } 
}
export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }
  setBalance = (value:number):number => this.balance = value
  getBalance = ():number =>  this.balance

  deposit = (value:number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou ${value}, seu saldo atual é de ${this.balance}.`)
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus() ){
      if (value < this.balance){
        this.balance -= value
        console.log(`Voce sacou ${value}, seu saldo atual é de ${this.balance}`)
      } else {
        console.log(`Saldo insuficiente. Seu saldo é de ${this.balance}`)
      }
    } else {
      console.log('Transação indisponível. Fale com o seu gerente.')
    }
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  getStatus = (): boolean => this.validateStatus()
}

const entrada = require("readline-sync");
let nome: string = entrada.question("digite seu nome: ");
let senha: string = entrada.question("digite sua senha: ");
let cpf: string = entrada.question("digite seu cpf: ");
let fzlg: boolean = false
let saldo: number = 100

for (let i = 0; i < 3; i++) {
  if (nome == 'renzo' && senha == 'darkzinho' && cpf == '47477225809') {
    fzlg = true
    break;
  }
  else{
    console.log('senha, nome ou cpf incorreto, por favor tente novamente');
    nome = entrada.question("digite seu nome: ");
    senha = entrada.question("digite sua senha: ");
    cpf = entrada.question("digite seu cpf: ");
  }
}

if (fzlg == true) {
  console.log('seja bem vindo');
  while (fzlg == true) {
    console.log('por favor escolho uma das opcoes');
    console.log('1: fazer um saque');
    console.log('2: fazer um deposito');
    console.log('3: fechar o programa');

    let op = parseFloat(entrada.question(""));

    if (op == 1 || op == 2) {
      senha = entrada.question("digite sua senha novamente: ");
      if (senha == 'darkzinho') {
        let val = parseFloat(entrada.question('seu saldo e '+saldo+', digite o valor: '));
        if(val > 0){
          if (op == 1 && val <= saldo) {
            saldo = saldo - val
            console.log('seu saldo agora e: '+ saldo);
          }
          else if (op == 2) {
            saldo = saldo + val
            console.log('seu saldo agora e: '+ saldo);
          }
          else{
            if(op == 1){
              console.log('valor invalido');
            }
            else{
              console.log('valor invalido');
              break;
            }
          }
          let q = parseFloat(entrada.question("gostaria de encerrar o programa? sim(1)|nao(2): "));
          
          if (q == 1) {
            fzlg = false
          }
        }
        else{
          console.log('valor invalido');
          break;
        }
      }
      else{
        console.log('senha incorreta');
      }
    }
    else if (op == 3) {
      console.log('ate a proxima');
      fzlg = false
    }
  }
}
else{
  console.log('usuario bloqueado');
}
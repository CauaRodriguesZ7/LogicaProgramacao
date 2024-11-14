/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressoes precisam ser verdadeiras para retornar true 
|| -> OR -> OU
! -> NOT -> NÃO
*/

// const expressaoAnd = true && true && true && true;
// console.log(expressaoAnd);

// const expressaoOr = false || false || true || false;
// console.log(expressaoOr)

const user = 'Cauã';
const senha = '291301';

const login = user === 'Cauã' || senha === '291304';
console.log(login);
function dividir(num1,num2){
 
    if(num2==0){
    return 'No se puede dividir por cero';
               }
else {
    let resultado=num1/num2;
    return resultado;
    }
}
     // console.log(dividir(12,4));
      module.exports=dividir;
      


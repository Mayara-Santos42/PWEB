function calcularMedia() 
{
    let nota1 = parseFloat(prompt("Primeira nota: "));
    let nota2 = parseFloat(prompt("Segunda nota: "));
    let nota3 = parseFloat(prompt("Terceira nota: "));
    
    let media = (nota1 + nota2 + nota3)/3;
    
    alert("Media das notas: "+media);
}

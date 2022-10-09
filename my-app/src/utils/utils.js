export function getIdade(nascimento) {
    var ano_atual = new Date().getFullYear();
    var ano_informado = nascimento.split('/')[2];
    return ano_atual - ano_informado
}  
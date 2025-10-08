const precos = {
  'Carpinteiro': 150,
  'Eletricista': 200,
  'Encanador': 180,
  'Pedreiro': 160,
  'Serralheiro': 170,
  'Ferreiro': 190
};

function verPreco(profissional){
  const preco = precos[profissional];
  document.getElementById('modal-titulo').innerText = profissional + " - Preço Tabelado";
  document.getElementById('modal-conteudo').innerText = `Preço do serviço: R$ ${preco},00`;
  document.getElementById('modal-bg').style.display = 'flex';
}

function simular(profissional){
  const preco = precos[profissional];
  const funcionario = (preco*0.7).toFixed(2);
  const empresa = (preco*0.3).toFixed(2);
  document.getElementById('modal-titulo').innerText = profissional + " - Simulação de Lucro";
  document.getElementById('modal-conteudo').innerText = 
    `Preço do serviço: R$ ${preco},00\nFuncionário recebe: R$ ${funcionario}\nLucro da empresa: R$ ${empresa}`;
  document.getElementById('modal-bg').style.display = 'flex';
}

function fecharModal(){
  document.getElementById('modal-bg').style.display = 'none';
}

// Pilhas ou LIFO (Last In First Out)
// Coleção ordenada de itens que segue o principio LIFO, ultimo a entrar primeiro a sair

function Pilha() {
  var items = [];

  //metodo push de inserir na pilha
  this.push = function (element) {
    items.push(element);
  };

  // metodo pop de remover do topo da pilha
  this.pop = function () {
    return items.pop();
  };

  // metodo peek que devolve o elemento que esta no topo da pilha
  this.peek = function () {
    return items[items.lenght - 1];
  };

  // metodo isEmpty informa se a pilha esta vazia ou nao
  this.isEmpty = function () {
    return items.length === 0;
  };

  //metodo clear que limpa a pilha
  this.clear = function () {
    items = [];
  };

  //metodo size que informa o tamanho da pilha
  this.size = function () {
    return items.length;
  };

  //metodo print que imprime a pilha no console
  this.print = function () {
    console.log(items.toString());
  };
}

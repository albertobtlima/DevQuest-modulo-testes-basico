const calcularValorPedido = require("./calcular-valor-pedido");

it("não deve cobra valor de frete quando o valor dos produtos for superior a 500", () => {
  // AAA - 3 passos de criação de um teste

  // Arrange - O objeto de teste
  const meuPedido = {
    itens: [
      { nome: "Poção de vida", valor: 100 },
      { nome: "Espada de prata", valor: 1000 },
      { nome: "Entrega", valor: 50, entrega: true },
    ],
  };

  // Act - O que vai ser testado
  const resultado = calcularValorPedido(meuPedido);

  // Assert - Qual o resultado esperado
  expect(resultado).toBe(1100);
});

it("deve cobrar valor de frete quando o valor dos produtos forem menor que 500", () => {
  const meuPedido = {
    itens: [
      { nome: "Poção de vida", valor: 100 },
      { nome: "Espada de prata", valor: 200 },
      { nome: "Entrega", valor: 50, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);
  expect(resultado).toBe(350);
});

it("deve cobrar valor de frete caso o valor dos produtos sejem igual a 500", () => {
  const meuPedido = {
    itens: [
      { nome: "Poção de vida", valor: 100 },
      { nome: "Espada de prata", valor: 400 },
      { nome: "Entrega", valor: 50, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);
  expect(resultado).toBe(550);
});

/* Caso os estados de entrega sejam RS ou SC, deve ser acrescido um valor de 30% na entrega */

it("deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS", () => {
  const pedidoComEstadoRS = {
    estado: "RS",
    itens: [
      { nome: "Poção de vida", valor: 100 },
      { nome: "Espada de prata", valor: 400 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoRS);
  expect(resultado).toBe(620);
});

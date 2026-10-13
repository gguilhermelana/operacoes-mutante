const ops = require('../src/operacoes');

describe('Testes adicionais para matar mutantes sobreviventes', () => {
  describe('Bloco 1', () => {
    test('soma/subtração/multiplicação com negativos e zero', () => {
      expect(ops.soma(-2, 5)).toBe(3);
      expect(ops.soma(0, 0)).toBe(0);
      expect(ops.subtracao(2, 5)).toBe(-3);
      expect(ops.multiplicacao(-3, 4)).toBe(-12);
      expect(ops.multiplicacao(5, 0)).toBe(0);
    });
    test('divisão: resultado fracionário e mensagem de erro', () => {
      expect(ops.divisao(7, 2)).toBe(3.5);
      expect(ops.divisao(0, 5)).toBe(0);
      expect(() => ops.divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
    test('potência: expoente zero e negativo', () => {
      expect(ops.potencia(5, 0)).toBe(1);
      expect(ops.potencia(2, -1)).toBe(0.5);
      expect(ops.potencia(3, 2)).toBe(9);
    });
    test('raiz quadrada: zero, negativo e mensagem', () => {
      expect(ops.raizQuadrada(0)).toBe(0);
      expect(ops.raizQuadrada(2)).toBeCloseTo(1.41421356);
      expect(() => ops.raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });
    test('resto da divisão', () => {
      expect(ops.restoDivisao(9, 3)).toBe(0);
      expect(ops.restoDivisao(7, 4)).toBe(3);
    });
    test('fatorial: 0, 1, 2, 3, 5 e negativo', () => {
      expect(ops.fatorial(0)).toBe(1);
      expect(ops.fatorial(1)).toBe(1);
      expect(ops.fatorial(2)).toBe(2);
      expect(ops.fatorial(3)).toBe(6);
      expect(ops.fatorial(5)).toBe(120);
      expect(() => ops.fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });
    test('média: array vazio, um elemento e valores não triviais', () => {
      expect(ops.mediaArray([])).toBe(0);
      expect(ops.mediaArray([7])).toBe(7);
      expect(ops.mediaArray([1, 2])).toBe(1.5);
    });
    test('somaArray: vazio e negativos', () => {
      expect(ops.somaArray([])).toBe(0);
      expect(ops.somaArray([5, -2])).toBe(3);
    });
  });

  describe('Bloco 2', () => {
    test('máximo/mínimo: ordens diferentes, negativos, vazio e mensagem', () => {
      expect(ops.maximoArray([50, 1, 10])).toBe(50);
      expect(ops.maximoArray([-5, -1, -9])).toBe(-1);
      expect(ops.minimoArray([2, 10, 100])).toBe(2);
      expect(ops.minimoArray([5, 1, 9])).toBe(1);
      expect(() => ops.maximoArray([])).toThrow('possui valor máximo');
      expect(() => ops.minimoArray([])).toThrow('possui valor mínimo');
      expect(() => ops.maximoArray([])).toThrow(/^Array vazio/);
      expect(() => ops.minimoArray([])).toThrow(/^Array vazio/);
    });
    test('valor absoluto: positivo, zero e negativo', () => {
      expect(ops.valorAbsoluto(5)).toBe(5);
      expect(ops.valorAbsoluto(-5)).toBe(5);
      expect(ops.valorAbsoluto(0)).toBe(0);
    });
    test('arredondar: .5, abaixo de .5 e negativos', () => {
      expect(ops.arredondar(9.4)).toBe(9);
      expect(ops.arredondar(2.5)).toBe(3);
      expect(ops.arredondar(-2.4)).toBe(-2);
    });
    test('isPar/isImpar: positivos e negativos', () => {
      expect(ops.isPar(7)).toBe(false);
      expect(ops.isPar(0)).toBe(true);
      expect(ops.isPar(-3)).toBe(false);
      expect(ops.isImpar(8)).toBe(false);
      expect(ops.isImpar(-3)).toBe(true);
      expect(ops.isImpar(0)).toBe(false);
    });
    test('porcentagens', () => {
      expect(ops.calcularPorcentagem(10, 50)).toBe(5);
      expect(ops.calcularPorcentagem(0, 50)).toBe(0);
      expect(ops.aumentarPorcentagem(200, 50)).toBeCloseTo(300);
      expect(ops.aumentarPorcentagem(100, 0)).toBe(100);
      expect(ops.diminuirPorcentagem(200, 25)).toBeCloseTo(150);
      expect(ops.diminuirPorcentagem(100, 0)).toBe(100);
    });
    test('inverter sinal', () => {
      expect(ops.inverterSinal(-3)).toBe(3);
      expect(ops.inverterSinal(0) === 0).toBe(true);
    });
  });

  describe('Bloco 3', () => {
    test('trigonometria com valores não nulos', () => {
      expect(ops.seno(Math.PI / 2)).toBeCloseTo(1);
      expect(ops.seno(1)).toBeCloseTo(0.84147098);
      expect(ops.cosseno(Math.PI)).toBeCloseTo(-1);
      expect(ops.cosseno(1)).toBeCloseTo(0.54030231);
      expect(ops.tangente(Math.PI / 4)).toBeCloseTo(1);
      expect(ops.tangente(1)).toBeCloseTo(1.55740772);
    });
    test('logaritmos', () => {
      expect(ops.logaritmoNatural(1)).toBe(0);
      expect(ops.logaritmoNatural(10)).toBeCloseTo(2.302585);
      expect(ops.logaritmoBase10(1000)).toBeCloseTo(3);
      expect(ops.logaritmoBase10(1)).toBe(0);
    });
    test('floor/ceil: fração e negativos', () => {
      expect(ops.arredondarParaBaixo(5.1)).toBe(5);
      expect(ops.arredondarParaBaixo(-5.1)).toBe(-6);
      expect(ops.arredondarParaCima(5.9)).toBe(6);
      expect(ops.arredondarParaCima(-5.9)).toBe(-5);
    });
    test('hipotenusa: catetos distintos e zero', () => {
      expect(ops.hipotenusa(4, 3)).toBe(5);
      expect(ops.hipotenusa(5, 12)).toBe(13);
      expect(ops.hipotenusa(0, 7)).toBe(7);
      expect(ops.hipotenusa(7, 0)).toBe(7);
    });
    test('conversões graus/radianos', () => {
      expect(ops.grausParaRadianos(90)).toBeCloseTo(Math.PI / 2);
      expect(ops.grausParaRadianos(0)).toBe(0);
      expect(ops.radianosParaGraus(Math.PI / 2)).toBeCloseTo(90);
      expect(ops.radianosParaGraus(1)).toBeCloseTo(57.2957795);
    });
  });

  describe('Bloco 4', () => {
    test('mdc e mmc', () => {
      expect(ops.mdc(12, 18)).toBe(6);
      expect(ops.mdc(18, 12)).toBe(6);
      expect(ops.mdc(7, 0)).toBe(7);
      expect(ops.mdc(17, 5)).toBe(1);
      expect(ops.mmc(4, 6)).toBe(12);
      expect(ops.mmc(3, 7)).toBe(21);
    });
    test('isPrimo: bordas', () => {
      expect(ops.isPrimo(-3)).toBe(false);
      expect(ops.isPrimo(0)).toBe(false);
      expect(ops.isPrimo(1)).toBe(false);
      expect(ops.isPrimo(2)).toBe(true);
      expect(ops.isPrimo(3)).toBe(true);
      expect(ops.isPrimo(4)).toBe(false);
      expect(ops.isPrimo(9)).toBe(false);
      expect(ops.isPrimo(13)).toBe(true);
    });
    test('fibonacci: casos base e seguintes', () => {
      expect(ops.fibonacci(0)).toBe(0);
      expect(ops.fibonacci(1)).toBe(1);
      expect(ops.fibonacci(2)).toBe(1);
      expect(ops.fibonacci(3)).toBe(2);
      expect(ops.fibonacci(6)).toBe(8);
    });
    test('produtoArray: vazio, um elemento, com zero', () => {
      expect(ops.produtoArray([])).toBe(1);
      expect(ops.produtoArray([5])).toBe(5);
      expect(ops.produtoArray([2, 0, 3])).toBe(0);
    });
    test('clamp: abaixo, acima e nos limites', () => {
      expect(ops.clamp(-5, 0, 10)).toBe(0);
      expect(ops.clamp(15, 0, 10)).toBe(10);
      expect(ops.clamp(0, 0, 10)).toBe(0);
      expect(ops.clamp(10, 0, 10)).toBe(10);
    });
    test('isDivisivel', () => {
      expect(ops.isDivisivel(10, 3)).toBe(false);
      expect(ops.isDivisivel(0, 3)).toBe(true);
    });
    test('temperatura', () => {
      expect(ops.celsiusParaFahrenheit(100)).toBe(212);
      expect(ops.celsiusParaFahrenheit(-40)).toBe(-40);
      expect(ops.fahrenheitParaCelsius(212)).toBeCloseTo(100);
      expect(ops.fahrenheitParaCelsius(-40)).toBeCloseTo(-40);
      expect(ops.fahrenheitParaCelsius(50)).toBeCloseTo(10);
    });
    test('inverso: zero e mensagem', () => {
      expect(ops.inverso(-2)).toBe(-0.5);
      expect(ops.inverso(1)).toBe(1);
      expect(() => ops.inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
  });

  describe('Bloco 5', () => {
    test('áreas e perímetro com valores assimétricos', () => {
      expect(ops.areaCirculo(1)).toBeCloseTo(Math.PI);
      expect(ops.areaCirculo(0)).toBe(0);
      expect(ops.areaRetangulo(3, 7)).toBe(21);
      expect(ops.perimetroRetangulo(3, 7)).toBe(20);
      expect(ops.perimetroRetangulo(0, 5)).toBe(10);
    });
    test('comparações: falso, igualdade e fronteira', () => {
      expect(ops.isMaiorQue(5, 10)).toBe(false);
      expect(ops.isMaiorQue(5, 5)).toBe(false);
      expect(ops.isMenorQue(10, 5)).toBe(false);
      expect(ops.isMenorQue(5, 5)).toBe(false);
      expect(ops.isEqual(7, 8)).toBe(false);
      expect(ops.isEqual(7, '7')).toBe(false);
    });
    test('mediana: desordenado, par, único e vazio', () => {
      expect(ops.medianaArray([5, 1, 3])).toBe(3);
      expect(ops.medianaArray([10, 9, 1, 2, 5])).toBe(5);
      expect(ops.medianaArray([4, 1, 3, 2])).toBe(2.5);
      expect(ops.medianaArray([10, 2])).toBe(6);
      expect(ops.medianaArray([9])).toBe(9);
      expect(ops.medianaArray([1, 2, 3, 4, 5, 6])).toBe(3.5);
      expect(() => ops.medianaArray([])).toThrow('possui mediana');
      expect(() => ops.medianaArray([])).toThrow(/^Array vazio/);
    });
    test('mediana não deve mutar o array original', () => {
      const arr = [3, 1, 2];
      ops.medianaArray(arr);
      expect(arr).toEqual([3, 1, 2]);
    });
    test('dobro/triplo/metade', () => {
      expect(ops.dobro(-4)).toBe(-8);
      expect(ops.triplo(-4)).toBe(-12);
      expect(ops.metade(5)).toBe(2.5);
      expect(ops.metade(0)).toBe(0);
    });
  });
});

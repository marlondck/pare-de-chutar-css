## Pare de Chutar CSS

Uma serie do [Marco Bruno](https://www.youtube.com/playlist?list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x)

## Display

- **Inline**: tem comportamento de paralavras (paragrafos) e, não é possível usar as propriedades `height` e `width`.

- **Block**: É o padrão definido no browser, é possível usar as propriedades `height` e `width`.
  Os elementos são encaixados um abaixo do outro.
  Se não setar uma largura, o elemento irá ocupar 100% da tela.

- **Inline-Block**: É a junção do inline e do block, é possível declarar altura e largura, e permite deixar os elementos na mesma linha.
  ![screenshot](inline-block.png?raw=true "screenshot")

## Floats

- **floats**: Servem para posicionar elementos a direita ou a esquerda, porém eles criam um contexto(camada) novo de exibição, logo se pode-se ter conteúdos empilhados um em cima de outro e também inline.

- **clear**: É uma propriedade que serve para limpar o contexto criado pelos floats.
  No exemplo temos duas caixas (aplicando float) e um paragrafo (sem float).
  No paragrafo aplica-mos o clear booth para que ela descesse do contexto caso contrário ficaria tudo na mesma linha.
  ![screenshot](floats.png?raw=true "screenshot")

## Positions

- **relative**: posiciona o elemento em relação a si mesmo. Ou seja, o ponto zero será o canto superior esquerdo, e ele começará a contar a partir dali. Todos os positions precisam de um ponto para iniciar o cálculo da coordenada para assim posicionar o elemento na tela. Ao contrário do que muitos acham, esse ponto não é o ponto central do elemento, o ponto base é o canto superior esquerdo do elemento. A partir deste canto, o browser irá calcular a coordenada que você definiu e irá posicionar o elemento no viewport.

- **static**: É o padrão do browser, estatico mantem a posição original.

![screenshot](relative.png?raw=true "screenshot")

- **absolute**: posiciona o elemento usando como referência a window ou o pai.
  A propriedade `transform: translate` usa a largura do elemento como referencia.

- **fixed**: bem parecido com absolute irá fixar a posição do elemento na coordenada que você definir. A medida que a página é rolada, o elemento continua fixo na posição que você definiu e o conteúdo da página rola normalmente. Geralmente é usado para fixar elementos como cabeçalhos ou sidebars.

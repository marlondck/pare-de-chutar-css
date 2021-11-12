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

- **relative**: Usa o pai como referência.

- **static**: É o padrão do browser, estatico mantem a posição original.

![screenshot](relative.png?raw=true "screenshot")

- **absolute**: posiciona o elemento usando como referência a window.
  A propriedade `transform: translate` usa a largura do elemento como referencia.

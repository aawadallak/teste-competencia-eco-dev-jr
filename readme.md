### Teste de competência Eco Dev. Jr

<p>
  O teste cabe em realizar os três desafios do HackerRank:

  1. https://www.hackerrank.com/challenges/counting-valleys/problem (Logica)
  2. https://www.hackerrank.com/challenges/more-than-75-marks/problem (SQL teste) 
  3. https://www.hackerrank.com/challenges/repeated-string/problem (logica)

</p>

## Counting Valleys

<p> 
  Começamos tratando os valleys como 0, e atribuindo-os a uma varíavel "valleys" assim como as elevações, percorremos um for onde "i" é menor que a quantiade de passos.

  Se para cada index for encontrado a string "D", diminuimos a elevação, do contrário aumentamos. Ainda dentro do nosso laço de repetição que trata a segunda condição, aplicamos mais uma regra, onde checamos se a elevação é menor que "-1", assim teriamos um "valley", então aumentamos a variável
  responsável pela contagem de valleys.

  Por último retornamos uma variável do tipo inteiro informando
  a quantidade de valleys que passamos dentro da quantidade de passsos
  propostas e do caminho informado.

</p>

## Repetead String

<p>
  Iniciamos a função recebendo o padrão da quantidade A como 0;

  No problema, temos duas entradas, sendo uma a string 'aba' e
  o input n=10, assim percebemos que para a string "encaixar" teríamos
  [a,b,a,a,b,a,a,b,a], a ultima string da lista, é o resto da divisão de 10/3. Assim temos apenas o primeiro caractere da string dentro de length = 1
  ou seja consideramos apenas o caractere "a" em "aba" logo temos a estrutura:

  [a,b,a,a,b,a,a,b,a,a]

  A primeira parte da solução, cabe em tratar todas as entradas.
  Onde atribuímos que n é maior que o tamanho da str.
  Entramos dentro da condicional atribuindo uma variável para
  a quantidade de "A's", transformamos essa string em uma lista.
  Utilizamos do método filter para buscar todos index que possuem
  o valor igual a "a" e retornamos com o método length esse número
  como um inteiro.

  O Math Floor serve para realizamos a divisão e arredondarmos para baixo
  e multiplicar pela quantidade "As" encontrada na string que foi passada

  A segunda parte da função trata do "resto", no caso tratamos a parte
  que sobra da operação. Passamos um for percorrendo i menor do que
  a sobra e buscamos dentro do index da string resultados que são iguais
  a "A", e caso encontre adicionáramos a variável inteira "A".

  A função retorna um valor inteiro da quantidade de variáveis repetidas  
  encontradas dentro da string passada no contexto da quantidade de
  entradas informadas.
</p>

## Higher Thank 75 Marks

<p>

  Utilizamos o SELECT e buscamos pelo campo "name", dentro
  da coluna "students", onde as notas "marks", são maiores do que 75,
  ondernando elas a principío pelo nome, porém caso os três últimos
  carácters sejam iguais, deveremos então ordena-las pelo ID

  A função RIGHT é responsável por análisar dentro do "name", os três
  últimos digítos do valor, podendo ser outros válores, foi utilizado 3
  para atender o proposto pelo desáfio. 

</p>

## 👨🏻‍🎓 Autor

<a href="https://github.com/aawadallak">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/74802742?v=4" width="100px;" alt=""/>
</a>

  [![Youtube Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=http)](mailto:alexandre.awadallak@gmail.com)

  [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/alexandre-yasser-awadallak-1900951b0/)](https://www.linkedin.com/in/alexandre-awadallak)

  [![Telegram Badge](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&link=https://t.me/aawadallak)](https://t.me/aawadallak)

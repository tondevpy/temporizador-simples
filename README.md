Contador de Tempo em JavaScript
Este é um pequeno script em JavaScript que implementa um contador de tempo em segundos, minutos e horas. Ele utiliza a função setInterval para atualizar os valores exibidos em elementos HTML em intervalos regulares.

O script possui três contadores independentes: contadorSegundos, contadorMinutos e contadorHoras, que mantêm o controle do tempo decorrido em cada unidade de tempo. Os valores desses contadores são exibidos em elementos HTML correspondentes: segundos, minutos e horas.

A função segundosTime é responsável por atualizar o valor dos segundos a cada segundo, exibindo-o no elemento segundos. Quando contadorSegundos atinge 59, ele é resetado para 0, para simular o tempo decorrido em um minuto.

A função minutosTime é executada a cada minuto (60.000 milissegundos) e atualiza o valor dos minutos, exibindo-o no elemento minutos. O contador contadorMinutos é incrementado a cada execução.

A função horasTime é executada a cada hora (3.600.000 milissegundos) e atualiza o valor das horas, exibindo-o no elemento horas. O contador contadorHoras é incrementado a cada execução.

Este script é útil para exibir um contador de tempo em uma página da web, permitindo acompanhar o tempo decorrido em diferentes unidades de tempo de forma simples e interativa.


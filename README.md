Anime Clicker Simulator
Um jogo clicker/simulator feito com HTML, CSS e JavaScript puro, desenvolvido para estudo, prática e evolução de lógica de programação, interface, sistemas de progressão e organização de projeto web.
O jogador clica para ganhar pontos, compra upgrades, gira RNG para conseguir personagens, equipa os melhores personagens, evolui unidades repetidas, desbloqueia mundos, derrota bosses, compra auras, pets, usa tickets, faz rebirth e progride por level.

Versão atual
Versão 6.6 — Correção do botão atacar e bugfixes
A versão 6.6 corrigiu o problema do botão ATACAR que podia parar de funcionar após a grande atualização visual da versão 6.5.

Também foram ajustadas camadas visuais, overlays e cliques no mobile.
Código da versão:
Update6.6

Recompensa:
60M pontos
300 Tickets 100x
30 Moedas de Rebirth


Tecnologias utilizadas
HTML5
CSS3
JavaScript
LocalStorage
GitHub Pages

O projeto não usa framework.

Tudo foi feito com arquivos simples:
index.html
style.css
script.js


Como jogar
1.	Clique em Jogar no menu inicial.
2.	Use o botão ATACAR para ganhar pontos.
3.	Compre upgrades para aumentar seus ganhos.
4.	Use o RNG para conseguir personagens.
5.	Equipe os melhores personagens para aumentar o multiplicador.
6.	Evolua personagens repetidos.
7.	Desbloqueie novos mundos.
8.	Derrote bosses para ganhar recompensas.
9.	Use auras, pets, tickets e rebirth para evoluir mais rápido.
10.	Complete conquistas, missões e coleção.

Principais sistemas do jogo
Sistema de clique
O jogador ganha pontos clicando no botão ATACAR.

O ganho por clique aumenta com:
Upgrades
Personagens equipados
Auras
Pets
Level do player
Rebirth
Eventos
Rebirth Shop


Sistema de RNG
O jogador pode girar para conseguir personagens de diferentes raridades.
Raridades disponíveis:
Comum
Raro
Épico
Lendário
Mítico
Divino
Secreto
Celestial
Universal

Opções de giro:
Girar 1x
Girar 10x
Girar 10.000x
Girar com todos os pontos
Auto RNG


Sistema de mochila
A mochila armazena os personagens obtidos.
Recursos da mochila:
Personagens repetidos acumulam quantidade
Favoritar personagem
Desfavoritar personagem
Favorito fica no topo
Equipar personagem
Desequipar personagem
Equipar melhores automaticamente
Evoluir todos possíveis
Multiseleção
Selecionar todos
Deselecionar todos
Excluir selecionados
Filtrar personagens
Ordenar por poder, nível, quantidade ou nome


Sistema de evolução
Personagens repetidos podem ser evoluídos.
Regra atual:
10 cópias = +1 nível

Quanto maior o nível do personagem, maior seu multiplicador.
Estágios:
Normal
Desperto
Supremo
Divino
Absoluto


Sistema de mundos
O jogo possui mundos com personagens e RNG próprios.
Mundos atuais:
Vila Ninja Oculta
Ilha dos Piratas
Estação Shibuya
Ilha de Caçadores

Cada mundo possui:
Preço de RNG próprio
Personagens exclusivos
Descrição própria
Progresso da coleção
Requisitos de desbloqueio


Sistema de coleção
A aba Coleção mostra o progresso geral dos personagens obtidos.
Recursos:
Porcentagem da coleção
Quantidade obtida
Barra de progresso
Recompensa ao completar 100%
Progresso por mundo

Recompensa ao completar 100%:
10M pontos
10 Tickets 100x


Sistema de bosses
Os bosses possuem vida, nível, recompensa e tipo.
Tipos de boss:
Comum
Raro
Lendário
Mítico
Secreto

Bosses especiais possuem:
Mais vida
Mais recompensa
Chance maior de drop
Visual especial
Drops exclusivos

Personagens exclusivos de boss:
Guardião Ninja
Capitão Fantasma
Maldição Suprema
Caçador Celestial


Sistema de auras
Auras podem ser compradas e equipadas para dar bônus.
Auras atuais:
Aura Ninja Básica
Aura Pirata
Aura Amaldiçoada
Aura Divina
Aura Universal

Bônus possíveis:
Mais pontos
Mais luck


Sistema de pets
Pets funcionam como companheiros equipáveis.
Pets atuais:
Raposa de Chakra
Dragão Pirata
Corvo Amaldiçoado
Lobo Demoníaco
Fênix Universal

Bônus possíveis:
Mais pontos
Mais luck
Mais recompensa de boss
Mais pontos por segundo


Ticket Shop
Tickets são usados como moeda especial.
Recursos da Ticket Shop:
Boost 2x pontos
Boost 2x luck
Boost 10x pontos
Boost 5x luck
Baú Comum
Baú Lendário
Conversão de tickets
Prêmio especial


Sistema de Rebirth
O jogador pode fazer rebirth para resetar parte do progresso e ganhar bônus permanente.
O rebirth mantém:
Personagens
Mochila
Coleção
Mundos
Auras
Pets
Conquistas
Moedas de Rebirth
Rebirth Shop

O rebirth reseta:
Pontos
Upgrades básicos
Pontos por segundo básico
Sorte básica


Rebirth Shop
A Rebirth Shop usa Moedas de Rebirth para comprar upgrades permanentes.
Upgrades atuais:
Treinamento Permanente
Sorte Permanente
Caçador de Boss
Desconto Dimensional
Slot Supremo


Sistema de Level
O jogador ganha XP ao realizar ações.
Ganha XP ao:
Clicar
Girar RNG
Derrotar boss
Evoluir personagem
Fazer rebirth

O level aumenta o bônus de pontos do jogador.

Menu inicial
A partir da versão 6.1, o jogo possui uma tela inicial com:
Jogar
Update Log
Configurações
Créditos

Na versão 6.5, os painéis de Update Log, Configurações e Créditos passaram a abrir com animação de baixo para cima.

Configurações
A aba Configurações permite:
Salvar manualmente
Exportar save
Importar save
Copiar save
Ativar/desativar animações
Ativar/desativar sons

O sistema de exportar/importar save permite guardar o progresso e usar em outro navegador ou dispositivo.

Sistema de save
O jogo usa LocalStorage para salvar automaticamente o progresso no navegador.
Chave principal do save:
const SAVE_KEY = "animeClickerSimulatorSave";

Também existe suporte para exportar/importar save manualmente.

Códigos disponíveis
Update1
Update2
Update3
Update4
Update4.1
Update4.2
Update5.0
Update5.1
Update5.2
Update5.3
Update5.4
Update5.5
Update5.6
Update5.7
Update5.8
Update5.9
Update5.10
Update5.11
Update5.12
Update5.13
Update5.14
Update5.15
Update6.0
Update6.1
Update6.2
Update6.5
Update6.6

Observação: alguns códigos antigos sem ponto continuam compatíveis para não prejudicar jogadores antigos.

Histórico resumido de versões
1.0 - Sistema inicial de clique
2.0 - RNG, mochila e boss
3.0 - Sistema de abas e ADM
4.0 - Mundos, fusão e evolução
4.1 - Update Log e códigos
4.2 - Economia balanceada e giros maiores
5.0 - Rank, rebirth, eventos e coleção
5.1 - Interface limpa e imagens
5.2 - Menu organizado e save permanente
5.3 - Mochila melhorada
5.4 - Mobile e evolução em massa
5.5 - Scroll interno e correção de mochila
5.6 - Progresso da coleção
5.7 - QOL e RNG melhorado
5.8 - Auto RNG, filtros e Ticket Shop
5.9 - Giro 10.000x e números abreviados
5.10 - Configurações e save exportável
5.11 - Pop-up de drop raro e efeitos visuais
5.12 - Ticket Shop completo e códigos com ponto
5.13 - Sistema de Auras
5.14 - Sistema de Pets
5.15 - Bosses especiais e drops exclusivos
6.0 - Level do Player e Rebirth Shop
6.1 - Tela inicial e menu principal
6.2 - Menu separado e créditos atualizados
6.5 - Grande atualização de interface
6.6 - Correção do botão atacar e bugfixes


Como rodar o projeto localmente
Baixe ou clone o projeto e abra o arquivo:
index.html

Ou use uma extensão como Live Server no VS Code.
Estrutura recomendada:
anime-clicker-simulator/
├── index.html
├── style.css
├── script.js
└── img/
    ├── naruto.png
    ├── sasuke.png
    ├── tanjiro.png
    └── ...


Pasta de imagens
As imagens dos personagens devem ficar na pasta:
img/

Exemplo:
img/naruto.png
img/sasuke.png
img/tanjiro.png
img/muzan.png

No JavaScript, as imagens são chamadas assim:
Naruto: "./img/naruto.png"
Sasuke: "./img/sasuke.png"
Muzan: "./img/muzan.png"


Publicação no GitHub Pages
Para publicar:
1.	Crie um repositório no GitHub.
2.	Envie os arquivos:
index.html
style.css
script.js
img/

3.	Vá em Settings.
4.	Entre em Pages.
5.	Selecione a branch principal.
6.	Salve.
7.	Acesse o link gerado pelo GitHub Pages.

Próximas ideias
Novos mundos
Novos personagens
Mais bosses exclusivos
Sistema de equipamentos
Sistema de quests diárias
Eventos com tempo limitado
Ranking local
Mais animações de drop
Melhorias no mobile
Balanceamento da economia
Sistema de loja visual


Créditos
Desenvolvimento: Arthur
Projeto feito para aprendizado em HTML, CSS e JavaScript.
Assistência técnica e ideias de código: ChatGPT


Observação importante
Este projeto é feito para estudo e diversão.
Para uma publicação profissional, recomenda-se usar personagens, nomes, imagens e artes próprias ou com licença/permissão de uso.

Status do projeto
Status: Em desenvolvimento
Versão atual: 6.6
Tipo: Clicker / Simulator / RNG
Plataforma: Web


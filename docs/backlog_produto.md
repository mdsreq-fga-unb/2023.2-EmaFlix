## Histórico de Revisão
| Data  | Versão | Descrição | Autor |
| ---   | ------ | --------- | ----- |
| 19/10 |  1.0   | Primeira versão do backlog do produto | Todos |

## Definição de Preparado

1. O item de backlog deve caber em uma sprint de duas semanas.
2. Todos os pré-requisitos para construção do item devem estar desenvolvidos
3. O requisito deve estar descrito em uma história de usuário.
4. O requisito deve possuir critérios de aceitação.

## Definição de Pronto

1. Critérios de aceitação: Passa pelos critérios de aceitação definidos?.
2. Se está de acordo com o padrão de codificação definido abaixo.

    **Convenção de Nomenclatura:** Use nomes descritivos para variáveis, funções e classes.

    **Indentação e Espaçamento:** Mantenha uma formatação consistente usando espaços ou tabs para indentação.

    **Comentários:** Escreva comentários claros e concisos explicando o que o código está fazendo.

     **Duplicação de Código:** Refatore o código para evitar repetições. Use funções ou classes para encapsular 
     funcionalidades comuns.

     **Organização de Arquivos e Diretórios:** Mantenha uma estrutura de diretórios bem organizada para facilitar a navegação e a manutenção do código.

## Personas

**Administrador:** Professores que serão responsáveis por gerenciar os conteúdos da plataforma e terá a permissão de administrador do sistema.

**Estudantes:** Alunos e público externo que terão acesso aos conteúdos e as funções destinadas a usuários.

## Critérios de Priorização

O backlog e o critério de priorização, foram organizados e baseados em 3 variáveis: Valor de Negócio (VN), Viabilidade (V) e Criticidade (C). Os itens de backlog foram avaliados com uma pontuação de 1 a 5, indicando sua importância. A prioridade de cada requisito é determinada pela média dos critérios aplicados, calculada como:

* **(VN + V + C)/3**

Além disso, foi usado este critério para definir os produtos MPV 1 e o MPV 2


## Requisitos funcionais

Requisitos funcionais são um conjunto de especificações que delineiam o comportamento e as capacidades que um sistema ou software deve apresentar. Eles estabelecem as funcionalidades que o sistema precisa ter para satisfazer as necessidades e expectativas dos usuários, além de descrever os processos que o sistema deve ser capaz de executar.


| Temas                     | Épicos                     | Numeração | User Story                                                                                                                                                                     | Valor de negócio | Viabilidade | Criticidade | Total |
|---------------------------|----------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------|-------------|-------|
| Gerenciamento de Conteudo | Gerenciamento de material  | 1         | Eu, como administrador, posso catalogar os vídeos já existentes, para manter a plataforma organizada e facilitar a pesquisa de conteúdo para os estudantes.                    | 5                | 4           | 4           | 5     |
| Gerenciamento de Conteudo | Gerenciamento de material  | 2         | Eu, como administrador, posso remover videos do ar, para garantir a conformidade com diretrizes e remover conteúdo inadequado ou não autorizado.                               | 5                | 3           | 5           | 4,3   |
| Gerenciamento de Usuarios | Acesso por role            | 3         | Eu, como estudante, posso assistir aos videos da plataforma, para aproveitar o conteúdo educacional para os alunos.                                                            | 5                | 5           | 5           | 4,3   |
| Gerenciamento de Conteudo | Navegabiliadade de Usuario | 4         | Eu, como estudante, posso buscar video por nome, para facilitar a pesquisa e localização de conteúdo específico.                                                               | 4                | 5           | 3           | 4     |
| Gerenciamento de Conteudo | Navegabiliadade de Usuario | 5         | Eu, como estudante, posso buscar um video por genero, para melhorar a experiência do usuário, permitindo a busca de vídeos por categoria.                                      | 3                | 5           | 3           | 3,6   |
| Gerenciamento de Conteudo | Navegabiliadade de Usuario | 6         | Eu, como estudante, posso buscar um video por faixa etaria, para garantir que o conteúdo seja apropriado para a idade do aluno.                                                | 3                | 5           | 3           | 3,6   |
| Gerenciamento de Usuarios | Acesso por role            | 7         | Eu, como administrador, posso fornecer permissões a outros usuarios, para gerenciar o acesso de usuários e colaboradores à plataforma.                                         | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Usuarios | Acesso por role            | 8         | Eu, como administrador, posso remover permissões de outros usuarios, para manter o controle de quem tem acesso a recursos específicos da plataforma.                           | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Navegabiliadade de Usuario | 9         | Eu, como estudante, posso buscar um video por tag, para ajudar os estudantes a encontrar conteúdo relacionado a tópicos específicos.                                           | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Navegabiliadade de Usuario | 10        | Eu, como estudante, posso salvar um video numa lista para assistir mais tarde,  para permitir que os estudantes organizem e acessem o conteúdo que desejam ver posteriormente. | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Interação de Comunidade    | 11        | Eu, como estudante, posso comentar em um vídeo, para alimentar a interação dos alunos e a discussão em torno do conteúdo.                                                      | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Interação de Comunidade    | 12        | Eu, como estudante, posso avaliar um video com uma nota, para fornecer feedback sobre a qualidade do conteúdo e ajudar outros alunos na escolha de vídeos.                     | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Interação de Comunidade    | 13        | Eu, como adminsitrador, posso comentar um video, para participar de discussões e fornecer informações adicionais quando necessário.                                            | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Interação de Comunidade    | 14        | Eu, como adminsitrador, posso marcar um comentario como relevante, para destacar comentários úteis e informativos na plataforma.                                               | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Conteudo | Interação de Comunidade    | 15        | Eu, como administrador, posso remover um comentario da plataforma, para manter a plataforma livre de comentários inadequados ou spam.                                          | 2                | 5           | 3           | 3,3   |
| Gerenciamento de Usuarios | Login de Usuario           | 16        | Eu, como Estudante, posso logar com minhas credenciais, para garantir que apenas usuários autorizados acessem a plataforma.                                                    | 2                | 5           | 2           | 3     |
| Gerenciamento de Usuarios | Login de Usuario           | 17        | Eu, como Estudante, posso recuperar minhas credenciais, permitir que os alunos recuperem o acesso à plataforma em caso de esquecimento de senha ou problemas de login.         | 2                | 5           | 2           | 3     |

## MVP 1

| Temas                        | Épicos                   | User Story                                                                                                                              | Valor de negócio | Viabilidade | Criticidade | Total |
|------------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------|--------------|--------------|-------|
| Gerenciamento de Conteudo    | Gerenciamento de material| Eu, como administrador, posso catalogar os vídeos já existentes, para manter a plataforma organizada e facilitar a pesquisa de conteúdo para os estudantes. | 5                | 4            | 4            | 5     |
| Gerenciamento de Conteudo    | Gerenciamento de material| Eu, como administrador, posso remover videos do ar, para garantir a conformidade com diretrizes e remover conteúdo inadequado ou não autorizado.             | 5                | 3            | 5            | 4,3   |
| Gerenciamento de Usuarios    | Acesso por role          | Eu, como estudante, posso assistir aos videos da plataforma, para aproveitar o conteúdo educacional para os alunos.                           | 5                | 5            | 5            | 4,3   |
| Gerenciamento de Conteudo    | Navegabiliadade de Usuario| Eu, como estudante, posso buscar video por nome, para facilitar a pesquisa e localização de conteúdo específico.                           | 4                | 5            | 3            | 4     |
| Gerenciamento de Conteudo    | Navegabiliadade de Usuario| Eu, como estudante, posso buscar um video por genero, para melhorar a experiência do usuário, permitindo a busca de vídeos por categoria.  | 3                | 5            | 3            | 3,6   |
| Gerenciamento de Conteudo    | Navegabiliadade de Usuario| Eu, como estudante, posso buscar um video por faixa etaria, para garantir que o conteúdo seja apropriado para a idade do aluno.          | 3                | 5            | 3            | 3,6   |
| Gerenciamento de Usuarios    | Acesso por role          | Eu, como administrador, posso fornecer permissões a outros usuarios, para gerenciar o acesso de usuários e colaboradores à plataforma.   | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Usuarios    | Acesso por role          | Eu, como administrador, posso remover permissões de outros usuarios, para manter o controle de quem tem acesso a recursos específicos da plataforma. | 2                | 5            | 3            | 3,3   |

## MVP 2

| Temas                        | Épicos                   | User Story                                                                                                                              | Valor de negócio | Viabilidade | Criticidade | Total |
|------------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------|--------------|--------------|-------|
| Gerenciamento de Conteudo    | Navegabiliadade de Usuario| Eu, como estudante, posso buscar um video por tag, para ajudar os estudantes a encontrar conteúdo relacionado a tópicos específicos.     | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Conteudo    | Navegabiliadade de Usuario| Eu, como estudante, posso salvar um video numa lista para assistir mais tarde,  para permitir que os estudantes organizem e acessem o conteúdo que desejam ver posteriormente. | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Conteudo    | Interação de Comunidade  | Eu, como estudante, posso comentar em um vídeo, para alimentar a interação dos alunos e a discussão em torno do conteúdo.                | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Conteudo    | Interação de Comunidade  | Eu, como estudante, posso avaliar um video com uma nota, para fornecer feedback sobre a qualidade do conteúdo e ajudar outros alunos na escolha de vídeos. | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Conteudo    | Interação de Comunidade  | Eu, como adminsitrador, posso comentar um video, para participar de discussões e fornecer informações adicionais quando necessário.     | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Conteudo    | Interação de Comunidade  | Eu, como adminsitrador, posso marcar um comentario como relevante, para destacar comentários úteis e informativos na plataforma.       | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Conteudo    | Interação de Comunidade  | Eu, como administrador, posso remover um comentario da plataforma, para manter a plataforma livre de comentários inadequados ou spam.  | 2                | 5            | 3            | 3,3   |
| Gerenciamento de Usuarios    | Login de Usuario         | Eu, como Estudante, posso logar com minhas credenciais, para garantir que apenas usuários autorizados acessem a plataforma.             | 2                | 5            | 2            | 3     |
| Gerenciamento de Usuarios    | Login de Usuario         | Eu, como Estudante, posso recuperar minhas credenciais, permitir que os alunos recuperem o acesso à plataforma em caso de esquecimento de senha ou problemas de login. | 2                | 5            | 2            | 3     |


## Requisitos não funcionais

Requisitos não funcionais são critérios que definem as características e restrições que um sistema ou software deve possuir, além das suas funcionalidades. Eles se concentram em aspectos que não estão diretamente relacionados às operações específicas do sistema, mas são cruciais para garantir seu desempenho, segurança, usabilidade e eficiência.

1. Design Padronizado: O sistema será desenvolvido usando um padrão de interfaces definido.
2. Compatibilidade com Dispositivos Móveis: O site oferecerá uma versão adaptativa para usuários mobiles.
3. Compatibilidade com Dispositivos Móveis: Baseada na lista de telas padronizadas fornecida pelo Android Developers, a portabilidade garantida será de: 600 px >= largura =< 840 px  a 480 px >= altura =< 900 px

| Classe de tamanho     | Pontos de interrupção | Representação do dispositivos                                   | Percentual           |
|-----------------------|-----------------------|-----------------------------------------------------------------|----------------------|
| Largura compacta      | < 600 dp              | 99,96% dos smartphones no modo retrato                           | 99,96%               |
| Largura média         | 600 dp+               | 93,73% dos tablets no modo retrato                              | 93,73%               |
| Largura expandida     | Largura expandida     | 97,22% dos tablets no modo paisagem                             | 97,22%               |
| Altura compacta       | < 480 dp              | 99,78% dos smartphones no modo paisagem                         | 99,78%               |
| Altura média          | 480 dp+               | 96,56% dos tablets no modo paisagem e 97,59% de smartphones no modo retrato | 96,56% / 97,59% |
| Altura expandida      | 900 dp+               | 94,25% de tablets no modo retrato                               | 94,25%               |

4. Taxa de Qualidade de Vídeo: A plataforma será capaz de suporte a todas as qualidades de vídeo até 1080p.
5. Capacidade de Armazenamento: A plataforma terá armazenamento baseado nos servidores disponibilizados pelo próprio campus.
6. Suporte aos navegadores: A aplicação suportar os seguintes navegadores

| Navegação       | Versão                         |
|-----------------|--------------------------------|
| Firefox Browser | Versão: 118.0.2 (64 bits)      |
| Google Chrome   | Versão: 118.0.5993.89 (64 bits)|
| Microsoft Edge  | Versão: 118.0.2088.57 (64 bits)|
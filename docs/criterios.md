## Critérios de aceitação MVP 1

|1. Eu, como administrador, posso catalogar os vídeos já existentes, para manter a plataforma organizada e facilitar a pesquisa de conteúdo para os estudantes.| Validado pelo DOR 
|------------|------|
|- Pode fazer upload do poster do vídeo para ser mais visual. - **Problemas no servidor do IFB**| 
|- A plataforma deve fornecer classificação etária e gêneros já presentes na plataforma em formato de drop-down list.| 
|- O usuário que executa a ação deve ter um perfil de administrador na plataforma.

|2. Eu, como administrador, posso remover vídeos do ar, para garantir a conformidade com as diretrizes e remover conteúdo inadequado ou não autorizado.| Validado pelo DOR|
|------------|------|
|- A ação deve ser instantânea e retorna para a home da plataforma.|
|- A partir da deleção do vídeo, todos os dados relacionados àquele vídeo no banco de dados, gênero, classificação etária e tags devem ser deletados.|

|3. Eu, como estudante, posso assistir aos vídeos da plataforma, para aproveitar o conteúdo educacional para os alunos.|Validado pelo DOR|
|------------|------|
|- O usuário deve assistir o vídeo pelo próprio player direto na plataforma.|

|4. Eu, como estudante, posso buscar vídeo por nome, gênero e faixa etária para selecionar apenas conteúdos específicos que estou buscando.|Validado pelo DOR|
|------------|------|
|- A busca por nome não é case sensitive, ou seja, maiúsculas e minúsculas não tem diferença.|
|- A busca não requer nome completo, o texto digitado será usado para comparar com os títulos.|
|- O estudante deve conseguir filtrar toda a base de dados de conteúdos pelo nome de exibição das obras. |
|- A busca acontece em tempo real com o input ao decorrer que o usuário digita o valor do campo. |
|- O estudante deve conseguir filtrar toda a base de dados de conteúdos pelo nome de exibição, por gênero e por faixa etária das obras. |

|5. Eu, administrador, posso fornecer permissões a outros usuários, para gerenciar o acesso de usuários e colaboradores à plataforma.|Validado pelo DOR|
|------------|------|
|- Deve existir uma funcionalidade ou opção no sistema que permita ao administrador conceder permissões a outros usuários, deletar comentários, marcar comentários com destaque.|
|- Ao fornecer a permissão deve-se ser possível digitar a permissão e o username do usuário.|

|6. Eu, como administrador, posso remover permissões de outros usuários, para manter o controle de quem tem acesso a recursos específicos da plataforma.|Validado pelo DOR|
|------------|------|
|- Devo ter a capacidade de revogar ou modificar as permissões concedidas a usuários estudantes.|

## Critérios de aceitação MVP 1 

|7. - Eu, como estudante, posso buscar um vídeo por tag, para ajudar os estudantes a encontrar conteúdo relacionado a tópicos específicos. |Validado pelo DOR|
|------------|------|
|- A plataforma deve oferecer uma lista de tags para buscar todos os conteúdos da plataforma.|

|8. - Eu, como estudante, posso salvar um vídeo numa lista para assistir mais tarde, para permitir que os estudantes organizem e acessem o conteúdo que desejam ver posteriormente. |Validado pelo DOR|
|------------|------|
|- A lista deve ser persistente em um banco de dados.|
|- Ao adicionar um item na lista, o usuário deve receber uma confirmação na tela se a operação foi bem sucedida ou não. |
| - O usuário tem a possibilidade de remover e adicionar vídeos a lista. |

|9. - Eu, como estudante, posso comentar em um vídeo, para alimentar a interação dos alunos e a discussão em torno do conteúdo. |Validado pelo DOR|
|------------|------|
|- O comentário deve persistir num banco de dados. |

|10. - Eu, como estudante, posso avaliar um vídeo com uma nota, para fornecer feedback sobre a qualidade do conteúdo e ajudar outros alunos na escolha de vídeos. |Validado pelo DOR|
|------------|------|
|- O feedback deve ser feito em uma categoria de 0 a 5, com classificação sendo 0 péssimo, e 5 perfeito. |
| Não deve ser possível realizar um feedback duas vezes com a mesma conta de estudante, o usuário deve receber um erro na tela avisando isto. |

|11. - Eu, como administrador, posso comentar um vídeo, para participar de discussões e fornecer informações adicionais quando necessário. |Validado pelo DOR|
|------------|------|
|- Comentários de administradores têm prioridade 1 por padrão, comentários marcados como relevantes têm prioridade 0 (sempre vem primeiro), e demais comentários devem ter prioridade 3. |

| 12. Eu, como administrador, posso marcar um comentário como relevante, para destacar comentários úteis e informativos na plataforma. | Validado pelo DOR|
|------------|------|
| - Ao marcar um comentário como relevante, deve receber uma notificação na tela me informando se a operação foi bem sucedida ou não |

| 13. Eu, como administrador, posso remover um comentário da plataforma, para manter a plataforma livre de comentários inadequados ou spam.| Validado pelo DOR|
|------------|------|
| - O comentário deve ser excluído do banco de dados. |

|14. Eu, como estudante, posso logar com minhas credenciais, para garantir que apenas usuários autorizados acessem a plataforma. | Validado pelo DOR|
|------------|------|
|Ao realizar a requisição de login, apenas devo ter notificado se a operação foi bem sucedida ou não e caso as credenciais estejam erradas.|
| Caso a operação seja bem sucedida, deve ser redirecionado para a homepage. |

| 15.  Eu, como estudante, posso recuperar minhas credenciais, permitir que os alunos recuperem o acesso à plataforma em caso de esquecimento de senha ou problemas de login. | Validado pelo DOR|
|------------|------|
| A conta deve ser recuperada a partir de um link enviado para o email cadastrado na conta. |
| Caso o link seja inválido, deve-se informar na tela e colocar possibilidade para requisitar novamente a recuperação de conta.|
| Em caso de senha e confirmação de senha não forem iguais, deve ser notificado na tela com informação que as senhas não estão iguais. |
| Ao recuperar a conta deve receber uma confirmação de que a operação foi bem sucedida, e após isso deve ser enviado para a tela de login novamente. |





















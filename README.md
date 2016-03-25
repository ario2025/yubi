# Yubi Framework
Yubi Framework é um framework minimalista para Ajax nativo em JavaScript. Essencial para comunicação de dados.

! Modo de uso:

yubi.JSON("url e querystring",function(data){
  /* Faça o que quiser aqui com a resposta dentro da variável data, que já está convertido para objeto JSON. */
  
});

yubi.POSTJSON("url e querystring","formulário POST",function(data){
  /* Faça o que quiser aqui com a resposta dentro da variável data, que já está convertido para objeto JSON. */
  
});

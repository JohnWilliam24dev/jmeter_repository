# **Relatório de Desempenho – Teste ViaCEP (JMeter)**  
Baseado nos dados exibidos no *Relatório de Sumário*.

---

## **1. Visão Geral do Teste**
- Total de requisições executadas: **24.485**
- Tipo de teste: **Carga / Simultaneidade**

---

# **2. Métricas de Tempo de Resposta**

### **Tempo de Resposta Médio**
- **116 ms**  
Representa o tempo médio necessário para o servidor responder cada requisição.

### **Tempo de Resposta Mínimo**
- **0 ms**  
Indica requisições extremamente rápidas ou comportamento interno do cliente (possível cache ou limitação de medição).

### **Tempo de Resposta Máximo**
- **3508 ms (3,5 s)**  
Tempo mais lento registrado no teste, demonstrando momentos de sobrecarga ou instabilidade.

### **Desvio Padrão**
- **143,97 ms**  
Valor alto, indicando **grande variação** nos tempos de resposta — o servidor apresentou respostas inconsistentes.

---

# **3. Vazão (Throughput)**

### **Throughput**
- **114,7 requisições por segundo**

Capacidade real que o sistema manteve durante o teste.

### **Taxa de Transferência**
- **Recebido:** 186,41 KB/s  
- **Enviado:** 5,78 KB/s

Mostra o volume de dados trafegados por segundo, útil para avaliar consumo de rede e impacto do tráfego.

---

# **4. Percentual de Erros**

### **% de Erro**
- **56,61%**

Mais da metade das requisições falharam.  
Esse é um indicador crítico de que o sistema **não suportou a carga** ou apresentou erros frequentes durante o teste.

---

#  **5. Conexões Ativas e Pico de Conexões**

> *O JMeter não exibe essas métricas diretamente no Relatório de Sumário, mas é possível interpretá-las indiretamente.*

### **Conexões Ativas**
- Provavelmente altas durante todo o teste devido ao uso de usuários simultâneos.
- Contribuem para o aumento do tempo máximo e dos erros.

### **Pico de Conexões**
- Momentos de maior pressão no servidor podem ter gerado:
  - tempo máximo elevado (3,5 s),  
  - alta variabilidade (desvio padrão),  
  - explosão nos erros (56%).

---

# **6. Conclusão Geral**

### **Pontos Positivos**
- Tempo médio de resposta **baixo** (116 ms) quando a requisição é bem-sucedida.
- Vazão **relativamente alta** (115 req/s).

### **Pontos Negativos**
- **56% de erros** → resultado extremamente crítico.
- Tempo máximo muito alto (3,5 s).
- Alta variação de resposta, indicando instabilidade.

---

# **Resumo Final**
O serviço **não suportou** a carga aplicada.  
Apesar do tempo médio ser bom, a altíssima taxa de erros e a grande oscilação dos tempos tornam o desempenho **inaceitável para produção**.

---

Se quiser, posso gerar um gráfico, transformar em PDF ou criar uma versão executiva mais formal.  


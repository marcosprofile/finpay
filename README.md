# Finpay — UI Architecture & Design System

> Transformando um layout visual em um sistema escalável, consistente e pronto para engenharia.

<img width="4096" height="2304" alt="image" src="https://github.com/user-attachments/assets/28787289-52dc-411e-af42-d0bf7d396a13" />

<br>

**Projeto:** [Acessar](https://finpay-ui-architecture.vercel.app/)
<br>
**Behance:** [Acessar](https://www.behance.net/gallery/248503691/Finpay-UI-Architecture-Design-System)
<br>
**Figma:** [Acessar](https://www.figma.com/design/uVD2dB4xb9KEkhjukU200a/Finpay?node-id=0-1&t=IGymZ7fCxBRsHrHH-1) 

---

## Sobre o Projeto

Este projeto é um estudo de arquitetura de interface focado na construção de um **Design System escalável**, partindo de um layout estático para uma implementação estruturada e reutilizável.

O objetivo foi ir além do visual, definindo **tokens, componentes e padrões de código**, garantindo consistência entre design e desenvolvimento.

---

## Problema

Layouts estáticos não escalam.

Sem uma arquitetura clara:
- inconsistências visuais surgem rapidamente  
- o handoff entre design e desenvolvimento se perde  
- a manutenção se torna cara e complexa  

---

## Solução

Foi construída uma arquitetura baseada em **Design Tokens + Componentes**, permitindo:

- consistência visual em toda a interface  
- separação clara entre estilo e implementação  
- escalabilidade para novos componentes e telas  
- integração direta entre Figma e código  

---

## Design System

### 🔹 Tokens

Estruturados em dois níveis:

- **Primitivos:** cores base, tipografia, espaçamento  
- **Semânticos:** aplicação dos tokens em contexto (background, text, border, etc)

Exemplo:

```css
/*Primitivos*/
--color-primary-600: #0084D1;
--color-neutral-primary: #4A5565;

/*Semânticos*/
--bg-primary: var(--color-primary-600);
--button-primary-bg: var(--bg-primary);
--color-text-brand: var(--color-neutral-primary);
```

## 🔹 Componentes

Componentes construídos com foco em reutilização e variação:

- **Button**
  - Variants: primary, secondary, tertiary  
  - States: default, hover, focus, active, disabled  

- **Input**
  - Estados: default, focus, error, success, disabled  
  - Validação com feedback visual  

---

## 💻 Implementação

A interface foi desenvolvida utilizando **HTML5 semântico e CSS moderno**, com foco em escalabilidade.

### Principais decisões:

- **CSS Variables (Design Tokens):**  
  Conexão direta entre Figma e código  

- **Arquitetura modular:**  
  Separação entre base, tokens e componentes  

- **BEM + Data Attributes:**  
  Controle de variantes e estados sem dependência excessiva de classes  

**Exemplo HTML:**

```html
<button class="button" data-variant="primary" data-size="medium">
  Label
</button>
```

**Exemplo CSS:**

```css
.button[data-variant="primary"] {
  background: var(--button-primary-bg);
}
```

<br>

## Estrutura do Projeto
```
src/
├── assets/        
├── css/
│   ├── base/      
│   ├── components/
│   └── layout/    
├── js/            
└── index.html     
```

<br>

## Fluxo Design → Código
```
Figma (Tokens)
   ↓
CSS Variables
   ↓
Componentes reutilizáveis
   ↓
Interface final
```

<br>

## Resultado
### Form de Signup
<img width="1752" height="1560" alt="image" src="https://github.com/user-attachments/assets/db172400-f959-4bfb-9c73-c43fe8060fa3" />
<br>

-  Input com validação (error / success)
-  Botão com estados (disabled → enabled)
-  Uso real dos tokens em contexto 

<br>

## Tecnologias
- **Design**
  - Figma (Tokens, Auto Layout, Components)
- **Front-end**
  - HTML5, CSS3 (Variables, Nesting, BEM, Data Attributes)
- **Versionamento**
  - Git & GitHub

<br>

## Aprendizados
- Estruturação de Design Tokens escaláveis
- Criação de componentes reutilizáveis com estados
- Conexão eficiente entre design e código
- Arquitetura de UI voltada para crescimento

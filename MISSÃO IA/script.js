const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "01 - Como o racismo estrutural se manifesta nas instituições sociais e políticas?",
        alternativas: [
            {
                texto: "A) O racismo estrutural se manifesta através de práticas e políticas institucionais queperpetuam desigualdades raciais, como discriminação no sistema de justiça, no mercadode trabalho e na educação, resultando em oportunidades desiguais para diferentes grupos raciais.",
                afirmacao: "1-a"
            },
            {
                texto: "B) O racismo estrutural se manifesta apenas em comportamentos individuais, sem refletir em políticas ou práticas institucionais.",
                afirmacao: ""
            }           

        ]
    },
    {
        enunciado: "02 - Qual é o impacto do racismo na saúde mental e física das pessoas afetadas?",
        alternativas: [
            {
                texto:"A) O racismo pode ter um impacto significativo na saúde mental e física, contribuindo para estresse crônico, ansiedade, depressão e problemas de saúde devido ao estigma e à exclusão social.",
                afirmacao:" 2-a"
            },
            {
                texto: "B) O racismo tem pouco impacto na saúde das pessoas, uma vez que as desigualdades sociais não afetam diretamente o bem-estar físico ou mental.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "03 - Como as políticas de ação afirmativa visam combater o racismo e promover a igualdade de oportunidades?",
        alternativas: [
            {
                texto:"A) Políticas de ação afirmativa visam corrigir desigualdades históricas e promover a inclusão ao oferecer oportunidades e suporte adicionais para grupos historicamente marginalizados, ajudando a reduzir disparidades raciais.",
                afirmacao:"3-a"
            },
            {
                texto:"B) Políticas de ação afirmativa são ineficazes para combater o racismo e não têm impacto significativo na promoção da igualdade de oportunidades para grupos marginalizados.",
                afirmacao:""
            }

        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Respostas!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
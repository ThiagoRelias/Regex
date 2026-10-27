const email = document.getElementById("email");
const cep = document.getElementById("cep");
const celular = document.getElementById("celular");
const numeros = document.getElementById("numeros");
const nome = document.getElementById("nome");
function validar(input, regex, mensagemErro, mensagemSucesso) {
    const label = document.createElement("label");
    input.insertAdjacentElement("afterend", label);

    input.addEventListener("input", () => {
        if (input.value.trim() === "") {
            label.textContent = "";
            input.style.borderColor = "#ccc";
            input.style.backgroundColor = "#fff";
            return;
        }
        if (regex.test(input.value)) {
            label.textContent = mensagemSucesso;
            label.style.color = "#16a34a";
            input.style.borderColor = "#22c55e";
            input.style.backgroundColor = "#f0fdf4";
        } else {
            label.textContent = mensagemErro;
            label.style.color = "#ff0000";
            input.style.borderColor = "#ff4d4d";
            input.style.backgroundColor = "#fff1f1";
        }
    });
}
validar(
    email,
    /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
    "E-mail inválido (ex: usuario@dominio.com)",
    "E-mail válido!"
);
validar(
    cep,
    /^\d{5}-\d{3}$/,
    "CEP inválido (use o formato 00000-000)",
    "CEP válido!"
);
validar(
    celular,
    /^\(\d{2}\) 9\d{4}-\d{4}$/,
    "Formato esperado: (00) 00000-0000",
    "Celular válido!"
);
validar(
    numeros,
    /^\d+$/,
    "O campo deve conter apenas números inteiros.",
    "Apenas números detectados!"
);
validar(
    nome,
    /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*$/,
    "Apenas letras e espaços são permitidos.",
    "Nome válido!"
);

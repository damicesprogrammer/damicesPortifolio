(function () {
  "use strict";

  // Seleciona o elemento de email
  const infoEmail = document.getElementById("email");
  const iconsHidden = infoEmail.querySelector(".icons"); // Seleciona o container de ícones

  // Adiciona evento de clique para copiar o texto
  infoEmail.addEventListener("click", clickToCopy);

  function clickToCopy() {
    // Obtém o texto do email
    const textToCopy = infoEmail.querySelector("p").textContent.trim();

    if (textToCopy) {
      // Copia o texto para a área de transferência usando a Clipboard API
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log(
            "Texto copiado para a área de transferência:",
            textToCopy
          );
          showCopiedIcon(); // Mostra o ícone de confirmação
        })
        .catch((err) => {
          console.error("Erro ao copiar o texto: ", err);
        });
    } else {
      console.warn("Nenhum texto encontrado para copiar.");
    }
  }

  function showCopiedIcon() {
    // Altera os ícones para mostrar o de confirmação
    if (iconsHidden?.children[0] && iconsHidden?.children[1]) {
      iconsHidden.children[0].classList.add("hidden"); // Esconde o ícone de cópia
      iconsHidden.children[1].classList.remove("hidden"); // Mostra o ícone de confirmação

      // Restaura o ícone original após 2 segundos
      setTimeout(() => {
        iconsHidden.children[0].classList.remove("hidden");
        iconsHidden.children[1].classList.add("hidden");
      }, 2000);
    } else {
      console.warn("Ícones de confirmação não encontrados.");
    }
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const cryptoIds = [
    "bitcoin",
    "ethereum",
    "tether",
    "binance-coin",
    "usd-coin",
    "dogecoin",
    "solana",
  ];
  const apiUrl = "https://api.coincap.io/v2/assets";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        cryptoIds.forEach((cryptoId) => {
          const crypto = data.data.find((item) => item.id === cryptoId);

          if (crypto) {
            const element = document.getElementById(cryptoId);
            if (element) {
              element.textContent = `$${parseFloat(crypto.priceUsd).toFixed(
                2
              )}`;
            }
          }
        });
      }, 2000);
    })
    .catch((error) => console.log("Error al obtener precios:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  const abrirCalculadora = async () => {
    const botonAbrirCalculadora = document.getElementById("btnCalculadora");

    botonAbrirCalculadora.addEventListener("click", () => {
      document.getElementById("calculadoraCripto").style.display = "block";
    });
  };

  const calcularCambio = async () => {
    const valorCambiarElement = document.getElementById("valorCambiar");
    const criptosParaCalcularElement = document.getElementById(
      "criptosParaCalcular"
    );

    const montoEnUSDaCalcular = valorCambiarElement.value;
    const criptoAComprar = criptosParaCalcularElement.value;

    if (montoEnUSDaCalcular !== "" && criptoAComprar !== "") {
      const apiUrl = "https://api.coincap.io/v2/assets";

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const crypto = data.data.find((item) => item.id === criptoAComprar);

        if (crypto) {
          let resultado = document.getElementById("resultadoCalculadora");
          let cantidadDeCripto =
            montoEnUSDaCalcular / parseFloat(crypto.priceUsd);

          resultado.textContent = `Puedes adquirir ${cantidadDeCripto.toFixed(
            4
          )} ${criptoAComprar}`;
          valorCambiarElement.value = "";
          criptosParaCalcularElement.selectedIndex = 0;
        }
      } catch (error) {
        alert("Error al obtener precios:", error);
      }
    }
  };

  abrirCalculadora();
  document
    .getElementById("btnCalcular")
    .addEventListener("click", calcularCambio);
});

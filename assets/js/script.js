/* =====================================================
   Café Aurora - JavaScript com jQuery
   ===================================================== */

$(function () {
    // Atualiza automaticamente o ano exibido no rodapé.
    $(".current-year").text(new Date().getFullYear());

    // Fecha o menu mobile depois que um link é selecionado.
    $(".navbar-nav .nav-link").on("click", function () {
        const navbarCollapse = $("#mainNavbar");

        if (navbarCollapse.hasClass("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarCollapse[0]).hide();
        }
    });

    // Exemplo inicial de validação do formulário de contato.
    // Nesta versão, os dados não são enviados para um servidor.
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        const form = this;

        if (!form.checkValidity()) {
            event.stopPropagation();
            $(form).addClass("was-validated");
            return;
        }

        $("#formAlert")
            .removeClass("d-none alert-danger")
            .addClass("alert-success")
            .text("Mensagem validada com sucesso! Nesta versão demonstrativa, nenhum dado foi enviado.");

        form.reset();
        $(form).removeClass("was-validated");
    });

    /* Próximas ideias para os alunos:
       1. Criar filtro dos produtos por categoria.
       2. Implementar busca no cardápio.
       3. Criar uma galeria com modal.
       4. Consumir uma API para enviar o formulário.
       5. Adicionar modo claro/escuro.
    */
});

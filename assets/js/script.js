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

    /* ---------- Modo claro/escuro ---------- */

    // Chave usada para salvar a escolha do usuário no navegador.
    const THEME_KEY = "cafe-aurora-theme";

    // Usa o tema salvo; se não houver, segue a preferência do sistema.
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let currentTheme = savedTheme || (prefersDark ? "dark" : "light");

    // Cria o botão e adiciona como último item do menu (funciona em todas as páginas).
    const $themeButton = $(`
        <li class="nav-item d-flex align-items-center ms-lg-2">
            <button type="button" class="btn btn-sm btn-outline-light theme-toggle" id="themeToggle"></button>
        </li>
    `).appendTo(".navbar-nav").find("#themeToggle");

    // Aplica o tema na página e atualiza o ícone/texto do botão.
    function applyTheme(theme) {
        // O Bootstrap 5.3 troca as cores dos componentes com o atributo data-bs-theme.
        $("html").attr("data-bs-theme", theme);

        const isDark = theme === "dark";

        // Mostra o sol no modo escuro (para voltar ao claro) e a lua no modo claro.
        $themeButton
            .html(`<i class="bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"}"></i>`)
            .attr("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro")
            .attr("title", isDark ? "Modo claro" : "Modo escuro");
    }

    // Aplica o tema assim que a página carrega.
    applyTheme(currentTheme);

    // Ao clicar, inverte o tema, aplica e salva a escolha.
    $themeButton.on("click", function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(currentTheme);
        localStorage.setItem(THEME_KEY, currentTheme);
    });

    /* Próximas ideias para os alunos:
       1. Criar filtro dos produtos por categoria.
       2. Implementar busca no cardápio.
       3. Criar uma galeria com modal.
       4. Consumir uma API para enviar o formulário.
    */
});

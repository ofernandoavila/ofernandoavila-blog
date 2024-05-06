<?php

namespace ofernandoavila\Core;

class TemplateBuilder {
    public static function adicionarTemplate(string $nome, $args = []) : void {
        ob_start();

        require_once get_template_directory() . '/src/templates/' . $nome . '.php';

        ob_flush();
    }

    public static function incluirFragmentoTemplate(string $nome, $args = []) : void {
        extract($args);
        ob_start();

        include get_template_directory() . '/src/templates/' . $nome . '.php';
        $conteudo = ob_get_clean();
        echo $conteudo;
        ob_flush();
    }

    public static function OpenContainer() {
        include get_template_directory() . '/src/templates/global/open-container.php';
    }

    public static function CloseContainer() {
        include get_template_directory() . '/src/templates/global/close-container.php';
    }
    
    public static function version() {
        echo 'teste 123';
    }
}
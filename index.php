<?php

use ofernandoavila\Core\TemplateBuilder;

get_header();

TemplateBuilder::OpenContainer();

TemplateBuilder::adicionarTemplate('post/grid/PostGrid');

TemplateBuilder::CloseContainer();

get_footer();
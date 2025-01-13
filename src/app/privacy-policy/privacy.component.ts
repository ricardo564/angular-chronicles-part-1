import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "privacy-policy",
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-8 pt-32">
      <!-- Main Privacy Policy Section -->
      <section class="text-gray-700 dark:text-gray-300">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Política Privacidade
        </h1>

        <div class="prose dark:prose-invert max-w-none space-y-6">
          <p>
            A sua privacidade é importante para nós. É política do 🍽️ Food Hut -
            Angular Chronicles - Part 1 respeitar a sua privacidade em relação a
            qualquer informação sua que possamos coletar no site
            <a
              href="https://food-hut-angular-chronicles-1.netlify.app/"
              target="_blank"
            >
              🍽️ Food Hut - Angular Chronicles - Part 1
            </a>
            , e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveisp ara evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas
            <a
              href="https://privacidade.me/"
              target="_BLANK"
              style="color: #576d96;text-decoration: none;"
              >políticas de privacidade</a
            >.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </p>
        </div>
      </section>

      <!-- Security Section -->
      <section class="text-gray-700 dark:text-gray-300">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Segurança e Confiança do site 🍽️ Food Hut - Angular Chronicles - Part 1
        </h2>
        
        <div class="prose dark:prose-invert max-w-none">
          <p>
            O site é confiável e seguro para navegação do usuário conformado
            pela
            <a
            target="_BLANK"
            style="color: #576d96;text-decoration: none;"
            href="https://confiavel.com.br/https://food-hut-angular-chronicles-1.netlify.app/"
            rel="noopener noreferrer"
            >Verificação</a
          >. A página verifica informações do site para identificar possíveis
          problemas de segurança. A navegação verificada pela ferramenta
          <a
            target="_BLANK"
            style="color: #576d96;text-decoration: none;"
            href="https://transparencyreport.google.com/safe-browsing/search?url=https://food-hut-angular-chronicles-1.netlify.app/"
            rel="noopener noreferrer"
            >segurança do Google</a
          >
              mostra que o site é seguro.
          </p>
        </div>
      </section>

      <!-- Cookie Policy Section -->
      <section class="text-gray-700 dark:text-gray-300">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Política de Cookies 🍽️ Food Hut - Angular Chronicles - Part 1
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">O que são cookies?</h3>
            <p>
              Como é prática comum em quase todos os sites profissionais, este
              site usa cookies, que são pequenos arquivos baixados no seu
              computador, para melhorar sua experiência. Esta página descreve
              quais informações eles coletam, como as usamos e por que às vezes
              precisamos armazenar esses cookies. Também compartilharemos como
              você pode impedir que esses cookies sejam armazenados, no entanto,
              isso pode fazer o downgrade ou 'quebrar' certos elementos da
              funcionalidade do site.
          melhorar sua experiência. Esta página descreve quais informações eles
          coletam, como as usamos e por que às vezes precisamos armazenar esses
              cookies. Também compartilharemos como você pode impedir que esses
              cookies sejam armazenados, no entanto, isso pode fazer o downgrade
              ou 'quebrar' certos elementos da funcionalidade do site.
            </p>
          </div>
        </div>
      </section>

      <!-- Cookie Usage Section -->
      <section class="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Cookies que definimos</h3>
        <ul class="space-y-4 list-none pl-0">
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Cookies relacionados à conta</span>
            <p class="mt-2">
              Se você criar uma conta conosco, usaremos cookies para o gerenciamento
              do processo de inscrição e administração geral. Esses cookies
              geralmente serão excluídos quando você sair do sistema, porém, em
              alguns casos, eles poderão permanecer posteriormente para lembrar as
              preferências do seu site ao sair.<br /><br />
            </p>
          </li>
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Cookies relacionados ao login</span>
            <p class="mt-2">
              Utilizamos cookies quando você está logado, para que possamos lembrar
              dessa ação. Isso evita que você precise fazer login sempre que visitar
              uma nova página. Esses cookies são normalmente removidos ou limpos
              quando você efetua logout para garantir que você possa acessar apenas
              a recursos e áreas restritas ao efetuar login.<br /><br />
            </p>
          </li>
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Cookies relacionados a boletins por e-mail</span>
            <p class="mt-2">
              Este site oferece serviços de assinatura de boletim informativo ou
              e-mail e os cookies podem ser usados ​​para lembrar se você já está
              registrado e se deve mostrar determinadas notificações válidas apenas
              para usuários inscritos / não inscritos.<br /><br />
            </p>
          </li>
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Pedidos processando cookies relacionados</span>
            <p class="mt-2">
              Este site oferece facilidades de comércio eletrônico ou pagamento e
              alguns cookies são essenciais para garantir que seu pedido seja
              lembrado entre as páginas, para que possamos processá-lo
              adequadamente.<br /><br />
            </p>
          </li>
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Cookies relacionados a pesquisas</span>
            <p class="mt-2">
              Periodicamente, oferecemos pesquisas e questionários para fornecer
              informações interessantes, ferramentas úteis ou para entender nossa
              base de usuários com mais precisão. Essas pesquisas podem usar cookies
              para lembrar quem já participou numa pesquisa ou para fornecer
              resultados precisos após a alteração das páginas.<br /><br />
            </p>
          </li>
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Cookies relacionados a formulários</span>
            <p class="mt-2">
              Quando você envia dados por meio de um formulário como os encontrados
              nas páginas de contacto ou nos formulários de comentários, os cookies
              podem ser configurados para lembrar os detalhes do usuário para
              correspondência futura.<br /><br />
            </p>
          </li>
          <li class="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <span class="font-medium">Cookies de preferências do site</span>
            <p class="mt-2">
              Para proporcionar uma ótima experiência neste site, fornecemos a
              funcionalidade para definir suas preferências de como esse site é
              executado quando você o usa. Para lembrar suas preferências,
              precisamos definir cookies para que essas informações possam ser
              chamadas sempre que você interagir com uma página for afetada por suas
              preferências.<br />
            </p>
          </li>
        </ul>
      </section>

      <!-- Third Party Cookies Section -->
      <section class="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Cookies de Terceiros</h3>
        <div class="prose dark:prose-invert max-w-none">
          <p>
            Em alguns casos especiais, também usamos cookies fornecidos por
            terceiros confiáveis. A seção a seguir detalha quais cookies de
            terceiros você pode encontrar através deste site.
          </p>
          <ul>
            <li>
              Este site usa o
              <a href="https://analytics.google.com/analytics/web/"
                >Google Analytics</a
              >, que é uma das soluções de análise mais difundidas e confiáveis ​​da
              Web, para nos ajudar a entender como você usa o site e como podemos
              melhorar sua experiência. Esses cookies podem rastrear itens como
              quanto tempo você gasta no site e as páginas visitadas, para que
              possamos continuar produzindo conteúdo atraente.
            </li>
          </ul>
          <p>
            Para mais informações sobre cookies do Google Analytics, consulte a
            página oficial do Google Analytics.
          </p>
          <ul>
            <li>
              As análises de terceiros são usadas para rastrear e medir o uso deste
              site, para que possamos continuar produzindo conteúdo atrativo. Esses
              cookies podem rastrear itens como o tempo que você passa no site ou as
              páginas visitadas, o que nos ajuda a entender como podemos melhorar o
              site para você.
            </li>
            <li>
              Periodicamente, testamos novos recursos e fazemos alterações subtis na
              maneira como o site se apresenta. Quando ainda estamos testando novos
              recursos, esses cookies podem ser usados ​​para garantir que você
              receba uma experiência consistente enquanto estiver no site, enquanto
              entendemos quais otimizações os nossos usuários mais apreciam.
            </li>
            <li>
              À medida que vendemos produtos, é importante entendermos as
              estatísticas sobre quantos visitantes de nosso site realmente compram
              e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso
              é importante para você, pois significa que podemos fazer previsões de
              negócios com precisão que nos permitem analizar nossos custos de
              publicidade e produtos para garantir o melhor preço possível.
            </li>
          </ul>
        </div>
      </section>

      <!-- User Commitment Section -->
      <section class="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Compromisso do Usuário</h3>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o 🍽️ Food Hut - Angular Chronicles - Part 1 oferece no
          site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à boa
            fé a à ordem pública;
          </li>
          <li>
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, ou casas de apostas, jogos de sorte e azar, qualquer tipo
            de pornografia ilegal, de apologia ao terrorismo ou contra os direitos
            humanos;
          </li>
          <li>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do 🍽️ Food Hut - Angular Chronicles - Part 1, de seus
            fornecedores ou terceiros, para introduzir ou disseminar vírus
            informáticos ou quaisquer outros sistemas de hardware ou software que
            sejam capazes de causar danos anteriormente mencionados.
          </li>
        </ul>
      </section>

      <!-- Browser Links Section -->
      <section class="text-gray-700 dark:text-gray-300 space-y-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Bloquear cookies:</h3>
        <p>
          Você pode impedir a configuração de cookies ajustando as configurações
        do seu navegador (consulte a Ajuda do navegador para saber como fazer
        isso). Esteja ciente de que a desativação de cookies afetará a
        funcionalidade deste e de muitos outros sites que você visita. A
        desativação de cookies geralmente resultará na desativação de
        determinadas funcionalidades e recursos deste site. Portanto, é
            recomendável que você não desative os cookies.
        </p>
        <ul class="space-y-2">
          <li>
            <a 
              href="https://support.google.com/accounts/answer/61416?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectlocale=en-US&amp;redirectslug=enable-and-disable-cookies-website-preferences"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Opera
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
              class="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Safari </a
            >.
          </li>
        </ul>
      </section>

      <!-- Final Information Section -->
      <section class="text-gray-700 dark:text-gray-300 space-y-4">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Mais informações</h3>
        <div class="prose dark:prose-invert max-w-none">
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se
            houver algo que você não tem certeza se precisa ou não, geralmente é
            mais seguro deixar os cookies ativados, caso interaja com um dos
            recursos que você usa em nosso site.
          </p>
        </div>
        <p class="text-sm mt-8">
          Esta política é efetiva a partir de
          <strong>Jan</strong>/<strong>2025</strong>.
        </p>
      </section>
    </main>
  `,
})
export class PrivacyComponent {}

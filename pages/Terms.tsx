import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShoppingBag, 
  Store, 
  Scale, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from '../components/Icons';

type TabType = 'customer' | 'merchant' | 'general';

const Terms = () => {
  const [activeTab, setActiveTab] = useState<TabType>('customer');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      
      {/* Header da Página */}
      <section className="bg-dark-900 text-white py-16 sm:py-20 relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
            <Scale size={14} />
            <span>Marco Regulatório & Operacional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 font-sans">
            Termos e Condições de Uso
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Transparência jurídica completa para <strong className="text-white">Consumidores Finais</strong> e para <strong className="text-brand-400">Mercados Parceiros</strong> integrados ao ecossistema Compra Rápida & Gourmetech.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
            <span>Versão 2.4</span>
            <span>•</span>
            <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
          </div>

          {/* Seletor de Abas Principal */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-xl mx-auto p-1.5 rounded-2xl bg-dark-800/90 border border-gray-700/80">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'customer'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <ShoppingBag size={16} />
              <span>Cliente Final (Consumidor)</span>
            </button>

            <button
              onClick={() => setActiveTab('merchant')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'merchant'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Store size={16} />
              <span>Mercado Parceiro (Lojista)</span>
            </button>

            <button
              onClick={() => setActiveTab('general')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'general'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText size={16} />
              <span>Disposições Gerais</span>
            </button>
          </div>

        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Menu Lateral / Sumário de Navegação (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <FileText size={14} className="text-brand-600" />
                <span>Navegação Rápida</span>
              </h4>

              {activeTab === 'customer' && (
                <nav className="space-y-1.5 text-xs font-medium text-gray-600">
                  {[
                    { id: 'c-1', title: '1. Objeto e Natureza da Intermediação' },
                    { id: 'c-2', title: '2. Cadastro e Acesso à Plataforma' },
                    { id: 'c-3', title: '3. Formação do Pedido e Preços' },
                    { id: 'c-4', title: '4. Substituição de Itens e Estorno no PIX' },
                    { id: 'c-5', title: '5. Pagamento via PIX e Asaas' },
                    { id: 'c-6', title: '6. Prazos de Separação e Entrega' },
                    { id: 'c-7', title: '7. Cancelamento e Direito de Arrependimento' },
                    { id: 'c-8', title: '8. Canais de Atendimento e Suporte' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors block truncate"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              )}

              {activeTab === 'merchant' && (
                <nav className="space-y-1.5 text-xs font-medium text-gray-600">
                  {[
                    { id: 'm-1', title: '1. Elegibilidade, CNPJ e Conta Asaas' },
                    { id: 'm-2', title: '2. Licenciamento do Sistema Gourmetech' },
                    { id: 'm-3', title: '3. Responsabilidade sobre Catálogo e Preços' },
                    { id: 'm-4', title: '4. SLA Operacional de Separação (KDS)' },
                    { id: 'm-5', title: '5. Política de Estornos e Falhas de Estoque' },
                    { id: 'm-6', title: '6. Emissão Obrigatória de Cupom Fiscal' },
                    { id: 'm-7', title: '7. Repasses Financeiros e Split Bancário' },
                    { id: 'm-8', title: '8. Logística e Equipe de Entrega' },
                    { id: 'm-9', title: '9. Rescisão e Descredenciamento' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors block truncate"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              )}

              {activeTab === 'general' && (
                <nav className="space-y-1.5 text-xs font-medium text-gray-600">
                  {[
                    { id: 'g-1', title: '1. Propriedade Intelectual e Marcas' },
                    { id: 'g-2', title: '2. Limitação de Responsabilidade' },
                    { id: 'g-3', title: '3. Alterações dos Termos' },
                    { id: 'g-4', title: '4. Lei Aplicável e Foro' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors block truncate"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  to="/privacidade"
                  className="flex items-center justify-between text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  <span>Ver Política de Privacidade (LGPD)</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <main className="lg:col-span-8 bg-white p-7 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm leading-relaxed text-gray-700">
            
            {/* ABA 1: CLIENTE FINAL (CONSUMIDOR) */}
            {activeTab === 'customer' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
                    Seção I — Para o Consumidor Final
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-2">
                    Termos de Uso do Consumidor
                  </h2>
                  <p className="text-sm text-gray-500">
                    Estes termos aplicam-se a qualquer pessoa física que realize pedidos, consulte produtos ou utilize o aplicativo móvel Compra Rápida.
                  </p>
                </div>

                <div id="c-1" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">1. Objeto e Natureza da Intermediação</h3>
                  <p className="text-sm text-gray-600">
                    O <strong>Compra Rápida</strong> é uma plataforma tecnológica de intermediação digital que aproxima consumidores finais de estabelecimentos comerciais locais (supermercados, mercearias, padarias, açougues e hortifrútis) integrados ao ecossistema <strong>Gourmetech</strong>.
                  </p>
                  <p className="text-sm text-gray-600">
                    A plataforma não é fabricante, distribuidora ou proprietária direta dos produtos comercializados pelos estabelecimentos parceiros. Toda a responsabilidade quanto à qualidade, validade, pesagem e faturamento fiscal do produto é do mercado parceiro escolhido pelo consumidor.
                  </p>
                </div>

                <div id="c-2" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">2. Cadastro e Acesso à Plataforma</h3>
                  <p className="text-sm text-gray-600">
                    Para realizar pedidos, o consumidor deve possuir plena capacidade civil (maior de 18 anos) e fornecer informações verídicas, incluindo endereço de entrega com geolocalização e telefone de contato ativo. O cadastro e o acesso ao aplicativo móvel Compra Rápida são realizados exclusivamente via <strong>Google Login (autenticação Google)</strong>, simplificando o processo de entrada e garantindo altos padrões de segurança sem exigência de senhas adicionais na plataforma.
                  </p>
                </div>

                <div id="c-3" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">3. Formação do Pedido e Preços</h3>
                  <p className="text-sm text-gray-600">
                    Os preços exibidos no aplicativo são estipulados diretamente pelos mercados parceiros em seus sistemas de estoque. Ao adicionar produtos ao carrinho e confirmar o pedido, o usuário celebra um contrato de compra e venda com o estabelecimento selecionado.
                  </p>
                </div>

                <div id="c-4" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">4. Substituição de Itens e Estorno Automático no PIX</h3>
                  <div className="bg-brand-50/70 border border-brand-200 p-4 rounded-2xl text-xs sm:text-sm text-brand-900 space-y-2">
                    <p className="font-bold flex items-center gap-1.5 text-brand-800">
                      <CheckCircle2 size={16} className="text-brand-600" />
                      Regra de Ouro do Compra Rápida: Estorno Imediato
                    </p>
                    <p>
                      Se durante a separação física do pedido no estabelecimento for constatada a indisponibilidade de determinado produto:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li><strong>Opção Substituir:</strong> Se houver produto equivalente de valor igual ou menor pré-aprovado pelo cliente, o item é substituído e eventual diferença a menor é estornada na conta do cliente.</li>
                      <li><strong>Opção Cancelar Item:</strong> O produto em falta é removido da comanda e 100% do seu valor é estornado imediatamente na mesma chave PIX do pagamento.</li>
                      <li><strong>Sem Crédito Preso:</strong> A plataforma não retém saldo em "carteiras digitais travadas" sem a expressa solicitação do usuário.</li>
                    </ul>
                  </div>
                </div>

                <div id="c-5" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">5. Pagamentos via PIX e Processamento Asaas</h3>
                  <p className="text-sm text-gray-600">
                    Os pagamentos são processados pela instituição de pagamento parceira <strong>Asaas Gestão Financeira</strong>. O cliente recebe um código PIX Copia e Cola / QR Code com expiração definida. A liberação do pedido para separação ocorre em tempo real assim que a confirmação bancária é homologada pelo webhook oficial.
                  </p>
                </div>

                <div id="c-6" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">6. Prazos de Separação e Entrega</h3>
                  <p className="text-sm text-gray-600">
                    O tempo de entrega informado no app é uma estimativa dinâmica calculada pela distância entre o mercado e o endereço do consumidor, acrescida do tempo médio de picking. O cliente compromete-se a manter pessoa apta no endereço indicado para recebimento das mercadorias.
                  </p>
                </div>

                <div id="c-7" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">7. Cancelamento e Direito de Arrependimento</h3>
                  <p className="text-sm text-gray-600">
                    O cancelamento sem ônus pode ser solicitado pelo cliente enquanto o pedido estiver com status <em>"Aguardando separação"</em>. Uma vez iniciada a separação ou despacho de itens perecíveis, o cancelamento sujeita-se às normas sanitárias vigentes. Em consonância com o Art. 49 do Código de Defesa do Consumidor, produtos inviolados e não perecíveis podem ser devolvidos no prazo legal de 7 (sete) dias.
                  </p>
                </div>

                <div id="c-8" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">8. Canais de Atendimento e Suporte</h3>
                  <p className="text-sm text-gray-600">
                    Em caso de problemas com o pedido (itens trocados, atrasos excessivos ou avarias), o consumidor pode acionar o canal direto de suporte pelo e-mail <strong>appgourmetech@gmail.com</strong> ou pela central de atendimento indicada no histórico do pedido.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ABA 2: MERCADO PARCEIRO (CLIENTE INTERNO) */}
            {activeTab === 'merchant' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
                    Seção II — Para o Estabelecimento Parceiro
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-2">
                    Termos de Adesão do Mercado Parceiro
                  </h2>
                  <p className="text-sm text-gray-500">
                    Regras comerciais, operacionais e financeiras para lojistas, supermercados e estabelecimentos que vendem através do Compra Rápida utilizando o sistema Gourmetech.
                  </p>
                </div>

                <div id="m-1" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">1. Elegibilidade, CNPJ e Conta Asaas</h3>
                  <p className="text-sm text-gray-600">
                    O estabelecimento parceiro deve estar devidamente constituído sob as leis brasileiras, possuir CNPJ ativo com CNAE compatível com comércio de gêneros alimentícios e dispor de alvará sanitário regular. É condição indispensável para a ativação das vendas a homologação de subconta digital no sistema Asaas para recebimento e liquidação dos splits de vendas.
                  </p>
                </div>

                <div id="m-2" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">2. Licenciamento do Sistema Gourmetech</h3>
                  <p className="text-sm text-gray-600">
                    A adesão confere ao lojista uma licença de uso limitada, revogável e não exclusiva dos módulos operacionais do sistema Gourmetech (catálogo, estoque, módulo de cozinha/separação KDS, relatórios e despacho de entregas).
                  </p>
                </div>

                <div id="m-3" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">3. Responsabilidade sobre Catálogo e Preços</h3>
                  <p className="text-sm text-gray-600">
                    O mercado parceiro é o único e exclusivo responsável pela veracidade dos preços, descrições, estoques e fotos dos produtos cadastrados. Compromete-se expressamente a não veicular produtos vencidos, avariados ou fora das normas da Vigilância Sanitária (ANVISA).
                  </p>
                </div>

                <div id="m-4" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">4. SLA Operacional de Separação (KDS)</h3>
                  <p className="text-sm text-gray-600">
                    Ao receber um novo pedido no status <em>"Aguardando separação"</em>, o mercado parceiro deve iniciar a conferência dos itens imediatamente na tela de separação Gourmetech. O picking deve seguir padrões rigorosos de higiene, separando produtos de limpeza de alimentos e mantendo itens refrigerados em câmara fria até a saída com o entregador.
                  </p>
                </div>

                <div id="m-5" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">5. Política de Estornos e Falhas de Estoque</h3>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs sm:text-sm text-amber-900 space-y-2">
                    <p className="font-bold flex items-center gap-1.5 text-amber-800">
                      <AlertCircle size={16} />
                      Consequências Financeiras por Indisponibilidade
                    </p>
                    <p>
                      Caso o lojista confirme a indisponibilidade de um produto e este seja cancelado pelo consumidor, o valor correspondente ao item é estornado integralmente ao cliente final. O cancelamento reiterado de pedidos por falha grave de controle de estoque do lojista poderá ensejar aplicação de advertência e suspensão temporária do estabelecimento na vitrine do app.
                    </p>
                  </div>
                </div>

                <div id="m-6" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">6. Emissão Obrigatória de Cupom Fiscal</h3>
                  <p className="text-sm text-gray-600">
                    É obrigação legal indelegável do mercado parceiro a emissão e inclusão da respectiva Nota Fiscal de Consumidor Eletrônica (NFC-e) ou Cupom Fiscal junto com as sacolas de entrega de cada pedido destinado ao cliente final.
                  </p>
                </div>

                <div id="m-7" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">7. Repasses Financeiros e Split Bancário</h3>
                  <p className="text-sm text-gray-600">
                    Os valores líquidos das vendas, após dedução da taxa de intermediação comercial acordada no contrato de credenciamento, são creditados diretamente na conta digital Asaas do parceiro. O lojista pode transferir os recursos para seu banco domiciliar conforme as regras do Banco Central do Brasil.
                  </p>
                </div>

                <div id="m-8" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">8. Logística e Equipe de Entrega</h3>
                  <p className="text-sm text-gray-600">
                    As entregas dos pedidos realizados pela plataforma são de responsabilidade exclusiva do mercado parceiro, sendo executadas invariavelmente por entregadores próprios ou contratados diretamente pelo próprio estabelecimento. A plataforma Compra Rápida não disponibiliza nem intermedeia entregadores externos avulsos.
                  </p>
                  <p className="text-sm text-gray-600">
                    Para otimizar o fluxo operacional, os entregadores do mercado poderão utilizar o aplicativo móvel <strong>Compra Rápida Entrega</strong>, desenvolvido para organizar roteamentos, facilitar o despacho e gerenciar múltiplos entregadores simultaneamente. O estabelecimento é o único responsável pela conduta e conformidade de seus entregadores, assim como pelo transporte adequado dos produtos com lacres de inviolabilidade.
                  </p>
                </div>

                <div id="m-9" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">9. Rescisão e Descredenciamento</h3>
                  <p className="text-sm text-gray-600">
                    Qualquer das partes poderá rescindir a parceria mediante aviso prévio por escrito de 30 (trinta) dias, desde que liquidadas todas as obrigações financeiras pendentes e atendidos os pedidos em andamento.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ABA 3: DISPOSIÇÕES GERAIS */}
            {activeTab === 'general' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
                    Seção III — Disposições Gerais & Governança
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-2">
                    Governança da Plataforma
                  </h2>
                  <p className="text-sm text-gray-500">
                    Normas aplicáveis conjuntamente a consumidores, parceiros e operadores da tecnologia.
                  </p>
                </div>

                <div id="g-1" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">1. Propriedade Intelectual e Marcas</h3>
                  <p className="text-sm text-gray-600">
                    As marcas <strong>Compra Rápida</strong>, <strong>Gourmetech</strong>, logotipos, layouts, códigos-fonte e algoritmos de recomendação são de titularidade exclusiva da <strong>Kinetic Solutions (KSI)</strong> e seus licenciadores, protegidos pelas Leis nº 9.609/98 e 9.279/96. É proibida qualquer cópia ou reprodução não autorizada.
                  </p>
                </div>

                <div id="g-2" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">2. Limitação de Responsabilidade</h3>
                  <p className="text-sm text-gray-600">
                    A plataforma envidará seus melhores esforços técnicos para manter a disponibilidade ininterrupta do serviço, não respondendo por instabilidades originadas em operadoras de telecomunicação, sistemas bancários do Banco Central (PIX) ou casos fortuitos e de força maior.
                  </p>
                </div>

                <div id="g-3" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">3. Alterações destes Termos</h3>
                  <p className="text-sm text-gray-600">
                    Estes termos poderão ser revisados periodicamente para refletir evoluções tecnológicas ou atualizações regulatórias. Notificações sobre alterações materiais serão publicadas no aplicativo e no website com antecedência mínima razoável.
                  </p>
                </div>

                <div id="g-4" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">4. Lei Aplicável e Foro</h3>
                  <p className="text-sm text-gray-600">
                    Estes Termos são regidos integralmente pelas Leis da República Federativa do Brasil. Fica eleito o Foro da Comarca da sede da empresa operadora para dirimir controvérsias, com expressa renúncia a qualquer outro, ressalvada a competência legal protetiva do Código de Defesa do Consumidor.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Bloco de Ajuda / Contato */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>Dúvidas sobre estes termos? Fale com nosso suporte jurídico.</p>
              <a
                href="mailto:appgourmetech@gmail.com"
                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold transition-colors"
              >
                appgourmetech@gmail.com
              </a>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
};

export default Terms;
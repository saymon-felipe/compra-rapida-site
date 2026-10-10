import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  ShoppingBag, 
  Store, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Info
} from '../components/Icons';

type TabType = 'customer' | 'merchant' | 'security';

const Privacy = () => {
  const [activeTab, setActiveTab] = useState<TabType>('customer');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-dark-900 text-white py-16 sm:py-20 relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
            <ShieldCheck size={14} />
            <span>Privacidade & LGPD (Lei nº 13.709/18)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 font-sans">
            Política de Privacidade
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Seus dados são protegidos com seriedade. Conheça como tratamos informações de <strong className="text-white">Consumidores</strong> e de <strong className="text-brand-400">Mercados Parceiros</strong>.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
            <span>Conformidade com a LGPD</span>
            <span>•</span>
            <span>Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
          </div>

          {/* Abas */}
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
              <span>Dados do Consumidor</span>
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
              <span>Dados do Mercado</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'security'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Lock size={16} />
              <span>Segurança & DPO</span>
            </button>
          </div>

        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Navegação Rápida Lateral */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <FileText size={14} className="text-brand-600" />
                <span>Tópicos de Privacidade</span>
              </h4>

              {activeTab === 'customer' && (
                <nav className="space-y-1.5 text-xs font-medium text-gray-600">
                  {[
                    { id: 'pc-1', title: '1. Quais Dados Coletamos do Consumidor' },
                    { id: 'pc-2', title: '2. Finalidades e Bases Legais da LGPD' },
                    { id: 'pc-3', title: '3. Compartilhamento Mínimo Necessário' },
                    { id: 'pc-4', title: '4. Não Comercialização de Dados' },
                    { id: 'pc-5', title: '5. Seus Direitos como Titular (Art. 18)' },
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
                    { id: 'pm-1', title: '1. Dados Coletados do Mercado e Operadores' },
                    { id: 'pm-2', title: '2. Responsabilidade do Mercado como Co-Controlador' },
                    { id: 'pm-3', title: '3. Sigilo dos Dados dos Clientes na Separação' },
                    { id: 'pm-4', title: '4. Informações Comerciais e Relatórios' },
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

              {activeTab === 'security' && (
                <nav className="space-y-1.5 text-xs font-medium text-gray-600">
                  {[
                    { id: 'ps-1', title: '1. Medidas de Segurança Técnica e Criptografia' },
                    { id: 'ps-2', title: '2. Retenção e Descarte Seguro' },
                    { id: 'ps-3', title: '3. Canal do Encarregado de Dados (DPO)' },
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
                  to="/termos"
                  className="flex items-center justify-between text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  <span>Ver Termos de Uso Completos</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <main className="lg:col-span-8 bg-white p-7 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm leading-relaxed text-gray-700">
            
            {/* ABA 1: PRIVACIDADE DO CONSUMIDOR */}
            {activeTab === 'customer' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
                    Seção I — Consumidor Final
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-2">
                    Privacidade e Proteção de Dados do Usuário
                  </h2>
                  <p className="text-sm text-gray-500">
                    Em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
                  </p>
                </div>

                <div id="pc-1" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">1. Quais Dados Coletamos do Consumidor</h3>
                  <p className="text-sm text-gray-600">
                    Coletamos estritamente os dados necessários para o fornecimento ágil dos serviços de entrega:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 pl-2">
                    <li><strong>Identificação e Contato:</strong> Nome completo, CPF, e-mail e número de telefone celular para confirmação de conta e avisos do pedido.</li>
                    <li><strong>Endereço e Geolocalização:</strong> Coordenadas GPS (com sua permissão) e endereços cadastrados para encontrar mercados próximos e viabilizar o deslocamento do entregador.</li>
                    <li><strong>Dados Transacionais do PIX:</strong> Registros de cobrança e chave PIX de origem para viabilizar eventual estorno automático processado via Asaas. <em>A plataforma não coleta e não armazena números de cartões de crédito.</em></li>
                    <li><strong>Histórico de Pedidos e Preferências:</strong> Registro de itens comprados, preferências de substituição de mercadorias e comunicações com o suporte.</li>
                  </ul>
                </div>

                <div id="pc-2" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">2. Finalidades e Bases Legais da LGPD</h3>
                  <p className="text-sm text-gray-600">
                    O tratamento de seus dados apoia-se nas seguintes bases legais do Art. 7º da LGPD:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-2">
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs">
                      <strong className="text-gray-900 block mb-1">Execução de Contrato (Art. 7º, V)</strong>
                      Processar o pedido, enviar para o mercado, rotear entrega e liquidar pagamentos/estornos.
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs">
                      <strong className="text-gray-900 block mb-1">Obrigação Legal (Art. 7º, II)</strong>
                      Emissão de notas fiscais pelo parceiro e guarda de registros do Marco Civil da Internet.
                    </div>
                  </div>
                </div>

                <div id="pc-3" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">3. Compartilhamento Mínimo Necessário</h3>
                  <p className="text-sm text-gray-600">
                    Seus dados pessoais são compartilhados apenas na medida indispensável para a conclusão da entrega:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-2">
                    <li><strong>Com o Mercado Escolhido:</strong> Apenas o nome, endereço de entrega e os produtos da comanda para a separação.</li>
                    <li><strong>Com o Entregador do Mercado:</strong> Nome, endereço e telefone para contato estritamente durante o deslocamento da entrega.</li>
                    <li><strong>Com a Instituição de Pagamento (Asaas):</strong> Dados estritamente necessários para validação do PIX e liquidação de estornos.</li>
                  </ul>
                </div>

                <div id="pc-4" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">4. Não Comercialização de Dados</h3>
                  <div className="bg-brand-50/80 border border-brand-200 p-4 rounded-2xl text-xs sm:text-sm text-brand-900 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold mb-0.5">Compromisso Ético e Legal:</strong>
                      O Compra Rápida jamais comercializa, aluga ou transfere listas de dados pessoais de consumidores para empresas de telemarketing, corretoras de dados ou anunciantes externos.
                    </div>
                  </div>
                </div>

                <div id="pc-5" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">5. Seus Direitos como Titular (Art. 18)</h3>
                  <p className="text-sm text-gray-600">
                    Você pode, a qualquer momento e de forma gratuita, solicitar: confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou inexatos, anonimização ou eliminação de dados desnecessários e revogação do consentimento, contatando nosso DPO.
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
                    Seção II — Estabelecimento / Lojista
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-2">
                    Privacidade e Governança do Mercado Parceiro
                  </h2>
                  <p className="text-sm text-gray-500">
                    Regras de proteção para dados de operadores, informações empresariais e responsabilidade legal compartilhada.
                  </p>
                </div>

                <div id="pm-1" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">1. Dados Coletados do Mercado e Operadores</h3>
                  <p className="text-sm text-gray-600">
                    Para habilitar o estabelecimento no sistema Gourmetech e na vitrine Compra Rápida, coletamos: Razão Social, CNPJ, Inscrição Estadual, endereço físico, dados de contato institucional, dados de identificação dos sócios/representantes legais e operadores do sistema, além dos dados bancários da subconta Asaas para split de pagamentos.
                  </p>
                </div>

                <div id="pm-2" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">2. Responsabilidade do Mercado como Co-Controlador</h3>
                  <p className="text-sm text-gray-600">
                    Ao receber pedidos contendo nome e endereço dos consumidores para separação e entrega, o estabelecimento assume a posição legal de <strong>Controlador</strong> desses dados nos termos da LGPD, devendo tratá-los exclusivamente para o cumprimento daquele pedido específico.
                  </p>
                </div>

                <div id="pm-3" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">3. Sigilo e Vedação de Desvio de Finalidade</h3>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs sm:text-sm text-amber-900 space-y-2">
                    <p className="font-bold flex items-center gap-1.5 text-amber-800">
                      <Info size={16} />
                      Vedação Expressa de Uso Indevido
                    </p>
                    <p>
                      É terminantemente vedado ao mercado parceiro armazenar os dados de contato do cliente para envio de mensagens promocionais por WhatsApp, malas diretas ou cadastros em programas de fidelidade próprios sem o expresso e prévio consentimento formal do titular, sob pena de descredenciamento imediato e responsabilização civil.
                    </p>
                  </div>
                </div>

                <div id="pm-4" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">4. Informações Comerciais e Relatórios</h3>
                  <p className="text-sm text-gray-600">
                    Os relatórios de vendas, curva de produtos mais vendidos e faturamento gerados no sistema Gourmetech são estritamente confidenciais e acessíveis apenas pelos usuários autorizados do estabelecimento.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ABA 3: SEGURANÇA & DPO */}
            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
                    Seção III — Segurança da Informação
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-2">
                    Protocolos Técnicos e Canal DPO
                  </h2>
                  <p className="text-sm text-gray-500">
                    Salvaguardas de infraestrutura e canal formal para exercício de direitos.
                  </p>
                </div>

                <div id="ps-1" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">1. Medidas de Segurança Técnica e Criptografia</h3>
                  <p className="text-sm text-gray-600">
                    Adotamos padrões modernos de segurança da informação:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-2">
                    <li>Tráfego de rede criptografado via TLS/HTTPS (SSL de 256 bits).</li>
                    <li>Tokens de autenticação JWT com expiração periódica e proteção contra sequestro de sessão.</li>
                    <li>Políticas de mínimo privilégio para operadores e logs de auditoria imutáveis.</li>
                  </ul>
                </div>

                <div id="ps-2" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">2. Retenção e Descarte Seguro</h3>
                  <p className="text-sm text-gray-600">
                    Os registros de conexão e acesso a aplicações são mantidos sob sigilo pelo prazo legal de 6 (seis) meses, conforme o Art. 15 da Lei nº 12.965/14 (Marco Civil da Internet). Após o cumprimento das finalidades contratuais e fiscais, os dados são descartados de forma segura ou anonimizados.
                  </p>
                </div>

                <div id="ps-3" className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">3. Canal do Encarregado de Dados (DPO)</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-sm space-y-3">
                    <p className="font-bold text-gray-900">
                      Encarregado pelo Tratamento de Dados Pessoais (DPO):
                    </p>
                    <p className="text-gray-600">
                      Para exercer seus direitos de titular, esclarecer dúvidas ou relatar qualquer preocupação referente à sua privacidade, envie uma mensagem para nosso Encarregado:
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                      <a
                        href="mailto:appgourmetech@gmail.com"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl hover:bg-brand-700 transition-colors"
                      >
                        <span>appgourmetech@gmail.com</span>
                      </a>
                      <span className="text-xs text-gray-500">Tempo médio de resposta: até 3 dias úteis.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Rodapé Interno */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>Compra Rápida • Segurança e respeito à sua privacidade</p>
              <Link to="/termos" className="font-semibold text-brand-600 hover:text-brand-700">
                Acessar Termos de Uso
              </Link>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
};

export default Privacy;
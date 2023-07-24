/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BookBookmark, ChartPolar, Fire, InstagramLogo, List, PersonSimpleRun, Shapes, ShoppingBag, TiktokLogo, X, YoutubeLogo  } from "@phosphor-icons/react";
import { Footer, Header, Nav, NavMenu, Payment, SectionAbout, SectionResponse, Section_1, Section_2, SlideBase } from "./style";
import { SideBar } from "../../components/SideBar";
import { SectionContainer } from "../../components/SectionContainer";
import { useState, useEffect, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType} from 'swiper/types'
import { FaCreditCard, FaPaypal, FaBitcoin, FaApplePay, FaCcVisa } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductBase } from "../../components/ProductBase";
import { mock } from "../../mock";




export function HomeLayout(){
  const progressCircle = createRef<SVGSVGElement>();
  const progressContent = createRef<HTMLSpanElement>();
  const onAutoplayTimeLeft = (s: HTMLElement | SwiperType, time: number, progress: number) => {
    if (progressCircle.current && progressCircle.current instanceof HTMLElement) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    }
    if (progressContent.current && progressContent.current instanceof HTMLElement) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  
 

  const [isMenu, setIsMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHasBackgroundMenu, setHasBackgroundMenu] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMenu(window.innerWidth <= 900);
      setHasBackgroundMenu(window.innerHeight >= 350 && window.scrollY > 0);

      if (window.innerWidth >= 900) {
        setIsOpen(false);
      }
      
    };

    const handleScroll = () => {
      setHasBackgroundMenu(window.innerHeight >= 350 && window.scrollY > 0);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isHasBackgroundMenu)
  console.log(window.innerWidth)


  return (
    <>
      {isMenu ?
      (
        <NavMenu menuIsOpen={isOpen} isHasBackgroundMenu={isHasBackgroundMenu} >
          <div>
            <ul>
              <li><a href=""><BookBookmark  size={40} weight="fill" /></a></li>
            </ul>
              {isOpen ? 
                (
                  <X onClick={() => setIsOpen(!isOpen)} size={32} alt="list" />
                ):
                (
                  <List onClick={() => setIsOpen(!isOpen)} size={32} alt="list"/>
                )
              }
          </div>
          <SideBar isSideBarOpen={isOpen} />
        </NavMenu>
      ) : 
      ( 
      <Nav isHasBackgroundMenu={isHasBackgroundMenu}>
        <div>
          <ul>
            <li><a href=""><BookBookmark  size={40} weight="fill" /></a></li>
          </ul>
          <ul>
            <li><a href="#em-alta">Em alta</a> </li>
            <li><a href="#promocoes">Promoções</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#perguntas-frequentes">Perguntas Frequentes</a></li>
          </ul>
        </div>
      </Nav>
      )}
     
      <Header>
        <div></div>
        <h2>
          Bem-vindo à Livraria Leitura Inteligente, onde o conhecimento se 
          encontra com a imaginação para impulsionar sua jornada de <strong>crescimento e prosperidade.</strong>
        </h2>
      </Header>

      <SectionContainer background={false} link="em-alta">
        <Section_1>
          <h1>Em alta <Fire size={32} /></h1>
          <ProductBase 
            image_url="https://m.media-amazon.com/images/I/519kRFUvDOL._SX356_BO1,204,203,200_.jpg" 
            title="Pai Rico, Pai Pobre" 
            author="Robert T. Kiyosaki"
            description="
            Este livro é o nosso campeão de vendas, e não é à toa! 
            Em 'Pai Rico, Pai Pobre', Robert Kiyosaki compartilha 
            lições valiosas sobre finanças pessoais e mindset empreendedor. 
            Descubra como a mentalidade financeira pode mudar sua vida e abrir 
            portas para a independência financeira."
            amount={61.50}
            />
       
          
        </Section_1>
      </SectionContainer>

      <SectionContainer background={false} link="promocoes">
        <Section_2>
          <h1>Promoções <ShoppingBag size={32} /></h1>
          <Swiper
          style={{zIndex: 0}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {mock.map((item) => (
            <SwiperSlide>
              <SlideBase>
                <ProductBase 
                  image_url={item.image_url} 
                  title={item.title} 
                  author={item.author}
                  description={item.description}
                  amount={item.amount}
                  />
              </SlideBase>
            </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </Section_2>
      </SectionContainer>

      <SectionContainer background={true} link="sobre">
        <SectionAbout>

        <div className="about a-title">
          <h1>A leitura acelera a evolução nos estudos, impulsionando o aprendizado e crescimento pessoa</h1>
          <h4>A leitura é a janela para o mundo, nos permitindo explorar, aprender, imaginar e compreender, tornando-nos cidadãos mais informados e empáticos</h4>
        </div>

        <div className="about a-grid">
          <div className="a-grid-column">
            <PersonSimpleRun size={95}/>
            <h3>
            Na Livraria Leitura Inteligente, acreditamos que o conhecimento é a chave para o desenvolvimento pessoal e a prosperidade financeira. Com uma equipe apaixonada por literatura e atendimento de qualidade.
            </h3>
          </div>
          <div className="a-grid-column">
            <ChartPolar size={95} />
            <h3>
            Nossa missão é oferecer livros cuidadosamente selecionados, que inspirem, informem e transformem vidas. Buscamos proporcionar a melhor experiência para todos os nossos clientes.
            </h3>
          </div>
          <div className="a-grid-column">
          <Shapes size={95} />
            <h3>
            Compartilhamos o desejo de promover a busca constante por aprendizado, enriquecendo a mente e o espírito de cada indivíduo que entra em nossa livraria. Venha nos visitar e embarque nessa jornada de conhecimento conosco.
            </h3>
          </div>
        </div>
        </SectionAbout>

      </SectionContainer>

      <SectionContainer background={false} link="perguntas-frequentes">
        <SectionResponse>

          <h1>Perguntas frequentes</h1>
          <ul>
            <li>
              <strong>Como faço para realizar uma compra na Livraria Leitura Inteligente?</strong>
              <p>R: É simples! Basta navegar em nosso site, encontrar o livro desejado e adicioná-lo ao carrinho. Depois, siga o processo de pagamento seguro.</p>
            </li>
            <li>
              <strong>Quanto tempo leva para a entrega ser realizada?</strong>
              <p>R: O prazo de entrega varia de acordo com a localidade, mas em geral, nossos pedidos são entregues dentro de 5 a 10 dias úteis.</p>
            </li>
            <li>
              <strong>Vocês oferecem frete grátis?</strong>
              <p>R: Sim! Nas compras acima de R$ 50, o frete é grátis para todo o Brasil.</p>
            </li>
            <li>
              <strong>Posso trocar um livro caso não atenda às minhas expectativas?</strong>
              <p>R: Claro! Você tem até 30 dias após o recebimento para solicitar a troca. Consulte nossa política de trocas para mais detalhes.</p>
            </li>
            <li>
              <strong>Vocês possuem programas de descontos para clientes frequentes?</strong>
              <p>R: Sim! Oferecemos um programa de fidelidade exclusivo para clientes que frequentemente adquirem livros em nossa livraria. Quanto mais comprar, mais descontos acumulará!</p>
            </li>
          </ul>

        </SectionResponse>
      </SectionContainer>

      <SectionContainer background={true}>
        <Payment>
          <div></div>
          <div>
            <h1>Formas de pagamento</h1>
          </div>
          <div className="method-payment">
            <FaCreditCard size={32} />
            <FaPaypal size={32} />
            <FaBitcoin size={32} />
            <FaApplePay size={32} />
            <FaCcVisa size={32} />
          </div>
        </Payment>

      </SectionContainer>

      <SectionContainer background={true} >
        <Footer>
          <h4>Endereço: Rua dos Livros, 123 - Cidade Literária - CEP: 01234-567</h4>
          <h4>Telefone: (XX) XXXX-XXXX</h4>
          <h4>E-mail: contato@livrarialeiturainteligente.com.br</h4>
          <h4>Horário de Atendimento: Segunda a Sexta, das 8h às 18h | Sábado, das 9h às 13h </h4>
          <h4>Conecte-se conosco nas redes sociais
            <span>
            <InstagramLogo size={32} /> 
            <TiktokLogo size={32} />
            <YoutubeLogo size={32} />
            </span>
          </h4>
          <p><i>"Conhecimento é a chave para o sucesso. Venha expandir sua mente conosco!"</i></p>
        </Footer>
      </SectionContainer>

    </>
  )
}
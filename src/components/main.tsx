import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Main() {
  return (
    <main className="main">
      <h2>Bem-vindo ao Nosso Site</h2>
      <p>
        Nossa empresa se dedica a oferecer soluções tecnológicas inovadoras para
        atender às suas necessidades. Estamos sempre comprometidos com a
        qualidade, segurança e eficiência, fornecendo produtos que ajudam nossos
        clientes a alcançar o sucesso.
      </p>
      <br />
      <br />
      <section>
        <h2>Nossos Serviços</h2>
        <p>
          Oferecemos uma variedade de serviços para apoiar seu negócio,
          incluindo:
        </p>
        <ul>
          <li>Desenvolvimento de software sob medida</li>
          <li>Consultoria em tecnologia da informação</li>
          <li>Integração de sistemas de pagamento</li>
          <li>Automação de processos empresariais</li>
        </ul>
        <br /><br />

        {/* Carrossel de Imagens */}
        <div className="carousel">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            stopOnHover={true}
            showStatus={false}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                alt="Serviço 1"
              />
              <p className="legend">Desenvolvimento de Software</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5582873/pexels-photo-5582873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Serviço 2"
              />
              <p className="legend">Consultoria em TI</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Serviço 3"
              />
              <p className="legend">Integração de Pagamentos</p>
            </div>
          </Carousel>
        </div>
        <br />
        <br />
        <button className="btn">Saiba mais sobre nossos serviços</button>
      </section>
    </main>
  );
}

export default Main;

import { Icon } from "@iconify/react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import MenuItem from "../../components/MenuItem";

const RootStyle = styled.div`
  background-image: linear-gradient(253.21deg, #393939 -3.03%, #1c1c1c 40.15%);
  width: 100%;
  padding: 4rem 4px;
  display: flex;
`;

export default function MainFooter() {
  return (
    <div className="w-full relative">
      <RootStyle>
        <div className="w-full flex flex-col items-center gap-16 p-2">
          <Logo direction="vertical" />
          <div className="container ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 mb-8">
              <div className="flex flex-col gap-4">
                <label className="text-2xl">Sobre</label>
                <p className="text-stone-500">
                  FanTicket é uma plataforma de venda e compra de ingressos
                  entre pessoas. Uma referência para fãs prática e segura, que
                  promove encontro de interesses e a melhor experiência em
                  shows, festas, festivais, jogos, teatro e muito mais.
                  FanTicket CNPJ 123.123.123/0001-12
                </p>
                <label className="mb-8 text-stone-500">
                  Atendimento ao cliente <br />
                  contato@fanticket.com.br
                </label>
              </div>
              <div className="flex flex-col gap-4">
                <a className="text-2xl">Acesso Rápido</a>
                <MenuItem href="" color="rgb(120 113 108)" className="text-lg">
                  Início
                </MenuItem>
                <MenuItem href="" color="rgb(120 113 108)" className="text-lg">
                  Como Funciona
                </MenuItem>
                <MenuItem href="" color="rgb(120 113 108)" className="text-lg">
                  Login
                </MenuItem>
                <MenuItem href="" color="rgb(120 113 108)" className="text-lg">
                  Termos de Uso
                </MenuItem>
                <MenuItem href="" color="rgb(120 113 108)" className="text-lg">
                  Política de Privacidade
                </MenuItem>
              </div>
              <div className="flex flex-col gap-4">
                <a className="text-2xl">Redes Sociais</a>
                <div className="flex gap-2 mb-8">
                  <a className="btn btn-circle btn-outline btn-primary">
                    <Icon icon="uit:facebook-f" width={24} />
                  </a>
                  <a className="btn btn-circle btn-outline  btn-primary">
                    <Icon icon="ph:instagram-logo-bold" width={24} />
                  </a>
                  <a className="btn btn-circle btn-outline  btn-primary">
                    <Icon icon="ri:youtube-line" width={24} />
                  </a>
                  <a className="btn btn-circle btn-outline  btn-primary">
                    <Icon icon="ph:twitter-logo-bold" width={24} />
                  </a>
                </div>
                <a className="text-2xl">Formas de Pagamento</a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <label className="text-stone-500">
                  FanTicket - 2022 - Todos os direitos reservados.
                </label>
              </div>
              <div className="md:col-span-2 flex gap-4 flex-col md:flex-row">
                <div className="flex gap-2 items-center">
                  <label>Desenhado por:</label>
                  <img src="/images/footer/designer-logo.png" alt = "desinger"/>
                </div>
                <div className="flex gap-2  items-center">
                  <label>Desenvolvido por:</label>
                  <img src="/images/footer/developer-logo.png" alt = "developr"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootStyle>
      <div
        style={{ backgroundImage: "url(/images/background/footer-bg.png)", backgroundSize:'contain', }}
        className={"w-1/5 h-1/4 absolute right-0 top-40 bg-no-repeat"}
      ></div>
    </div>
  );
}

import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import GradientBorderWrapper, {
  Divider,
} from "../../components/wrappers/GradientBorderWrapper";
import Page from "../../components/Page";
import PageBanner from "../../components/wrappers/PageBanner";
import useAuth from "../../hooks/useAuth";
import ChangeEmailDialog from "../../sections/profile/ChangeEmail";
import OtpVerifyDialog from "../../sections/profile/VerifyCode";
import ChangePhoneDialog from "../../sections/profile/ChangePhone";
import { HOST_API } from "../../config";

export default function BasicProfile() {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <Page title="Profile">
      <PageBanner>
        <div className="container mb-8 ">
          <div className="flex flex-col gap-8 items-center p-2">
            {/* avatar  */}
            <div className="flex flex-col items-center mb-4">
              <div className="avatar w-32 h-32 relative">
                <img
                  src={`${HOST_API}${user?.avatar}`}
                  alt=""
                  className=" rounded-full "
                />
                <label
                  htmlFor="avatar"
                  className="bottom-0 right-0 absolute w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                >
                  <Icon icon="ic:round-edit" className="text-primary" />
                </label>
                <input type="file" className="hidden" id="avatar" />
              </div>
              <label className="text-3xl">{user?.displayName}</label>
            </div>
          </div>
        </div>
      </PageBanner>
      <div className="container">
        <div className="flex flex-col gap-4 items-center p-2">
          <div className="flex flex-col items-center gap-2 w-full max-w-2xl p-2 ">
            <label className="text-xl w-full text-left">Perfil</label>
            <GradientBorderWrapper>
              <div className="flex flex-col gap-2 w-full p-4">
                {/* email  */}
                <div className="flex flex-col">
                  <label className="text-lg">Endereço de Email</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">{user?.email}</label>
                    <Icon
                      icon="ic:baseline-verified-user"
                      className="text-success"
                    />
                  </div>
                  <div className="flex gap-4">
                    <a className="text-primary" href="#">
                      <label
                        htmlFor="email-modal-check"
                        className="cursor-pointer"
                      >
                        {t("action.edit")}
                      </label>
                    </a>

                    <a className="text-primary" href="#">
                      <label
                        htmlFor="email-verify-check"
                        className="cursor-pointer"
                      >
                        {t("action.verify")}
                      </label>
                    </a>
                  </div>

                  <Divider cls="mt-1" />
                </div>
                {/* phone */}
                <div className="flex flex-col">
                  <label className="text-lg">Telefone</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">
                      {user?.phoneNumber}
                    </label>
                    <Icon icon="octicon:unverified-24" className="text-error" />
                  </div>
                  <div className="flex gap-4">
                    <a className="text-primary" href="#">
                      <label
                        htmlFor="phone-modal-check"
                        className="cursor-pointer"
                      >
                        {t("action.edit")}
                      </label>
                    </a>

                    <a className="text-primary" href="#">
                      <label
                        htmlFor="phone-verify-check"
                        className="cursor-pointer"
                      >
                        {t("action.verify")}
                      </label>
                    </a>
                  </div>
                  <Divider cls="mt-1" />
                </div>
                {/* id verification  */}
                <div className="flex flex-col">
                  <label className="text-lg">Verificação de identidade</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">
                      Nenhuma ação necessária
                    </label>
                  </div>
                  <a className="text-primary" href="#">
                    Mostrar
                  </a>
                  <Divider cls="mt-1" />
                </div>
                {/* following  */}
                <div className="flex flex-col">
                  <label className="text-lg">Seguindo</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">
                      Uma visão geral de tudo o que você segue na FanTicket
                    </label>
                  </div>
                  <a className="text-primary" href="#">
                    Mostrar
                  </a>
                  <Divider cls="mt-1" />
                </div>

                {/* social */}
                <div className="flex flex-col gap-1">
                  <label className="text-lg mb-2">Redes Sociais</label>
                  <div className="flex flex-col gap-1 items-center mb-2 w-full">
                    <div className="flex justify-between w-full">
                      <div className="flex gap-1 items-center text-stone-400">
                        <Icon icon="bi:facebook" />
                        <label className="">Facebook</label>
                      </div>
                      <a className="text-primary" href="#">
                        Verificar
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-center mb-2 w-full">
                    <div className="flex justify-between w-full">
                      <div className="flex gap-1 items-center text-stone-400">
                        <Icon icon="mingcute:twitter-line" />
                        <label className="">Twitter</label>
                      </div>
                      <Icon
                        icon="ic:baseline-verified-user"
                        className="text-success"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GradientBorderWrapper>
          </div>
          <div className="flex flex-col items-center gap-2 w-full max-w-2xl p-2">
            <label className="text-xl w-full text-left">Financeiro</label>
            <GradientBorderWrapper>
              <div className="flex flex-col gap-2 w-full p-4">
                {/* Finance  */}
                <div className="flex flex-col">
                  <label className="text-lg">Pagamentos</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">
                      Uma visão geral de todos os seus pagamentos
                    </label>
                  </div>
                  <a className="text-primary" href="#">
                    Mostrar
                  </a>
                </div>
              </div>
            </GradientBorderWrapper>
          </div>
          <div className="flex flex-col items-center gap-2 w-full max-w-2xl p-2">
            <label className="text-xl w-full text-left">Configurações</label>
            <GradientBorderWrapper>
              <div className="flex flex-col gap-2 w-full p-4">
                {/* Email  */}
                <div className="flex flex-col">
                  <label className="text-lg">Preferências de Email</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">
                      Controle quais e-mails você deseja receber
                    </label>
                  </div>
                  <a className="text-primary" href="#">
                    <label htmlFor="email-modal-check">Editar</label>
                  </a>
                  <Divider cls="-mt-0" />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Idioma</label>
                  <div className="flex gap-2 items-center mb-2">
                    <label className="text-stone-400">Português</label>
                  </div>
                  <a className="text-primary" href="#">
                    Editar
                  </a>
                </div>
              </div>
            </GradientBorderWrapper>
          </div>
          <div className="flex justify-center gap-4 w-full max-w-2xl mb-8">
            <a href="#" className="underline text-primary">
              Exportar meus dados
            </a>
            <a href="#" className="underline text-error">
              Remover minha conta
            </a>
          </div>
        </div>
      </div>
      <ChangeEmailDialog user={user} />
      <ChangePhoneDialog user={user} />

      <OtpVerifyDialog
        user={user}
        address={user?.email}
        id={"email-verify-check"}
        method="email"
      />
      <OtpVerifyDialog
        user={user}
        address={user?.phoneNumber}
        id={"phone-verify-check"}
        method="phone"
      />
    </Page>
  );
}

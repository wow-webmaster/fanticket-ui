import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import Page from "../../components/Page";
import PageBanner from "../../components/wrappers/PageBanner";
import { fShortDate } from "../../utils/formatTime";
import { NOTIFICATIONS } from "../../_mocks";

export default function Notifications() {
  const { t } = useTranslation();
  return (
    <Page title={"Notification"}>
      <PageBanner>
        <div className="container mb-8 max-w-2xl p-4">
          <div className="flex gap-2 justify-start text-xl">
            <Link to="/profile">
              <span className="text-primary">{t("title.menu.profile")}</span>
            </Link>
            <label>/</label>
            <label>{t("title.menu.notification")}</label>
          </div>
          <div className="flex flex-col py-4">
            {/* <SimpleBar style={{ maxHeight: "50vh" }}> */}
            {NOTIFICATIONS.map((n, index) => (
              <div
                className={`alert alert-${n.type} shadow-lg mb-2 grayscale-[70%]`}
                key={index}
              >
                <div className="flex w-full justify-between items-start md:items-center flex-col md:flex-row">
                  <div className="flex gap-1 items-center">
                    <Icon
                      icon={`${
                        n.type === "success"
                          ? "clarity:success-standard-line"
                          : n.type === "warning"
                          ? "ic:round-warning-amber"
                          : "fluent:shield-error-16-regular"
                      }`}
                    />
                    <div>
                      <p>{n?.message}</p>
                      <div className="flex gap-1 items-center">
                        {fShortDate(n?.date)}
                        {n.read && <Icon icon="mdi:check-all" />}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-20 flex gap-1">
                    <button className="btn btn-circle btn-outline  btn-sm">
                      <Icon icon="tabler:trash" />
                    </button>
                    {!n.read && (
                      <button className="btn btn-circle btn-outline  btn-sm">
                        <Icon icon="mdi:check-all" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* </SimpleBar> */}
          </div>
        </div>
      </PageBanner>
    </Page>
  );
}

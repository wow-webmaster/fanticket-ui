import Page from "../components/Page";
import ScrollTop from "../components/ScrollTop";

import BannerSection from "../sections/main/BannerSection";
import CategoryListSection from "../sections/main/CategoryListSection";
import CustomerReviews from "../sections/main/CustomerReviews";
import LocationEventSection from "../sections/main/LocationEventSection";
import NextEventSection from "../sections/main/NextEventSection";
import WhyUseSection from "../sections/main/WhyUseSection";

export default function Main() {
  return (
    <Page title={""}>
    
      <div className="flex flex-col p-2">
        <BannerSection />

        <div className="h-24"></div>
        <WhyUseSection />
        <div className="h-24"></div>
        <NextEventSection />
      </div>
      <div className="flex flex-col">
        <CategoryListSection />
        <div className="h-6"></div>
        <LocationEventSection />
        <div className="h-6"></div>
        <CustomerReviews />
      </div>
    </Page>
  );
}

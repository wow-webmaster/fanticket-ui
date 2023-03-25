import Page from "../components/Page";
import ScrollTop from "../components/ScrollTop";
import { BannerSection, CategoryListSection, CustomerReviews, LocationEventSection, NextEventSection, WhyUseSection } from "../sections/main";

 

export default function Main() {
  return (
    <Page title={"Fanticket"}>
    
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

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Logo({
  disableLink = false,
  direction = "horizontal",
}) {
  return (
    <div>
      {(disableLink && <LazyLoadImage alt = "logo-full" width={'100%'} height={'100%'} src="/images/logo/logo-full.png" />) || (
        <Link to="/">
          {direction === "horizontal" && (
            <LazyLoadImage src="/images/logo/logo-full.png" alt="logo-horizontal" width={'100%'} height={'100%'}/>
          )}
          {direction === "vertical" && (
            <LazyLoadImage src="/images/logo/logo-full-vertical.png" alt="logo-vertical" width={'100%'} height={'100%'}/>
          )}
          {direction === "logoOnly" && (
            <LazyLoadImage src="/images/logo/logo-image.png" alt="logo-only"  width={'100%'} height={'100%'}/>
          )}
        </Link>
      )}
    </div>
  );
}

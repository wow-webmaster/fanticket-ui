import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Logo({
  disableLink = false,
  direction = "horizontal",
}) {
  return (
    <div>
      {(disableLink && <LazyLoadImage src="/images/logo/logo-full.png" />) || (
        <Link to="/">
          {direction === "horizontal" && (
            <LazyLoadImage src="/images/logo/logo-full.png" alt="logo-horizontal"/>
          )}
          {direction === "vertical" && (
            <LazyLoadImage src="/images/logo/logo-full-vertical.png" alt="logo-vertical"/>
          )}
          {direction === "logoOnly" && (
            <LazyLoadImage src="/images/logo/logo-image.png" alt="logo-only" />
          )}
        </Link>
      )}
    </div>
  );
}

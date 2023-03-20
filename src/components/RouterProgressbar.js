import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useMemo } from 'react';

export default function RouterProgressBar() {
    NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    // console.log("heere.. load progress");
    NProgress.done();
  }, []);

  return null;
}

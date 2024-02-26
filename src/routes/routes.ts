import { LazyExoticComponent, lazy } from "react";
import NoLazyLoad from "../lazyload/pages/NoLazyLoad";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazy1 = lazy(() => import("../lazyload/pages/LeazyPage1"));
// const lazy2 = lazy(() => import("../lazyload/pages/LeazyPage2"));
// const lazy3 = lazy(() => import("../lazyload/pages/LeazyPage3"));
const lazyLayout = lazy(()=> import("../lazyload/layout/LazyLayout")); 


export const routes: Route[] = [
  {
    to: "/lazylayout/",
    path: "/lazylayout/*",
    Component: lazyLayout,
    name: "lazyLayout",
  },
  // {
  //   to: "/lazy2",
  //   path: "lazy2",
  //   Component: lazy2,
  //   name: "lazy-2",
  // },
  // {
  //   to: "/lazy3",
  //   path: "lazy3",
  //   Component: lazy3,
  //   name: "lazy-3",
  // },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazyLoad,
    name: "No lazy",
  },
];

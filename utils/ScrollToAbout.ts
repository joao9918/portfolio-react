import { ScrollSmoother } from "gsap/ScrollSmoother";

export function scrollToAbout(id: string) {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(`#${id}`, true);
  }
}

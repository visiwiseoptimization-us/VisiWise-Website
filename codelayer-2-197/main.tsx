import { useActiveBreakpoint } from "figma:react";
import { useActiveBreakpoint } from "figma:react";
import imgImage from "./5dc5b89d5bb6610e0c3299ca165a3fdf4a1f104d.png";

function ImageMobile() {
  return (
    <div className="relative size-full" data-name="Image">
      <img alt="UI card displaying Active Client Projects data, projects-12.4%↑ 4 this month, on a light fabric background" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function ImageTablet() {
  return (
    <div className="relative size-full" data-name="Image">
      <img alt="UI card displaying Active Client Projects data, projects-12.4%↑ 4 this month, on a light fabric background" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function ImageDesktop() {
  return (
    <div className="relative size-full" data-name="Image">
      <img alt="UI card displaying Active Client Projects data, projects-12.4%↑ 4 this month, on a light fabric background" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <ImageMobile />;
  }
  if (width < 1280) {
    return <ImageTablet />;
  }
  return <ImageDesktop />;
}

export default Image;
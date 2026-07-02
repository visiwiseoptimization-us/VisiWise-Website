import { useActiveBreakpoint } from "figma:react";

function HeaderMobile() {
  return (
    <div className="content-stretch flex flex-col items-center leading-none relative shrink-0 text-[56px] w-full" data-name="Header">
      <h1 className="block font-['Source_Serif_Pro:Regular',sans-serif] not-italic relative shrink-0 tracking-[-2.24px] w-full">Digital operations,</h1>
      <h2 className="block font-['Radio_Canada_Big:Regular',sans-serif] font-normal relative shrink-0 tracking-[-2.8px] w-full">built for business</h2>
    </div>
  );
}

function HeaderTextMobile() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-[#104101] text-center w-full" data-name="Header text">
      <HeaderMobile />
      <p className="font-['Source_Serif_Pro:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[18px] tracking-[-0.6px] w-full px-[16px]">{`Websites, software & strategy unified under one roof.`}</p>
    </div>
  );
}

function ButtonRowMobile() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[12px] items-center relative shrink-0" data-name="Button row">
      <a className="bg-[#104101] relative shrink-0" href="https://figma.com/sites" target="_blank" data-name="Button primary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
            <div className="bg-white relative shrink-0 size-[4px]" data-name="Bullet" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Request a Free Audit →</p>
          </div>
        </div>
      </a>
      <button className="bg-[#104101] relative shrink-0" data-name="Button primary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
            <div className="bg-white relative shrink-0 size-[4px]" data-name="Bullet" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Explore Services</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function IntroContentMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative size-full pt-[60px]" data-name="Intro content">
      <HeaderTextMobile />
      <ButtonRowMobile />
    </div>
  );
}

function HeaderTablet() {
  return (
    <div className="content-stretch flex flex-col items-center leading-none relative shrink-0 text-[80px] w-full" data-name="Header">
      <h1 className="block font-['Source_Serif_Pro:Regular',sans-serif] mb-[-4px] not-italic relative shrink-0 tracking-[-3.2px] w-full">Digital operations,</h1>
      <h2 className="block font-['Radio_Canada_Big:Regular',sans-serif] font-normal relative shrink-0 tracking-[-4px] w-full">built for business</h2>
    </div>
  );
}

function HeaderTextTablet() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-[#104101] text-center w-full" data-name="Header text">
      <HeaderTablet />
      <p className="font-['Source_Serif_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[20px] tracking-[-0.8px] w-full">{`Websites, software & strategy unified under one roof.`}</p>
    </div>
  );
}

function ButtonRowTablet() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-center relative shrink-0" data-name="Button row">
      <a className="bg-[#104101] relative shrink-0" href="https://figma.com/sites" target="_blank" data-name="Button primary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
            <div className="bg-white relative shrink-0 size-[4px]" data-name="Bullet" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Request a Free Audit →</p>
          </div>
        </div>
      </a>
      <button className="bg-[#104101] relative shrink-0" data-name="Button primary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
            <div className="bg-white relative shrink-0 size-[4px]" data-name="Bullet" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Explore Services</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function IntroContentTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative size-full pt-[60px]" data-name="Intro content">
      <HeaderTextTablet />
      <ButtonRowTablet />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="content-stretch flex flex-col items-center leading-none relative shrink-0 text-[80px] w-full" data-name="Header">
      <h1 className="block font-['Source_Serif_Pro:Regular',sans-serif] mb-[-8px] not-italic relative shrink-0 tracking-[-3.2px] w-full">Digital operations,</h1>
      <h2 className="block font-['Radio_Canada_Big:Regular',sans-serif] font-normal relative shrink-0 tracking-[-4px] w-full">built for business</h2>
    </div>
  );
}

function HeaderTextDesktop() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-[#104101] text-center w-full" data-name="Header text">
      <HeaderDesktop />
      <p className="font-['Source_Serif_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[20px] tracking-[-0.8px] w-full">{`Websites, software & strategy unified under one roof.`}</p>
    </div>
  );
}

function ButtonRowDesktop() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-center relative shrink-0" data-name="Button row">
      <a className="bg-[#104101] relative shrink-0" href="https://figma.com/sites" target="_blank" data-name="Button primary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
            <div className="bg-white relative shrink-0 size-[4px]" data-name="Bullet" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Request a Free Audit →</p>
          </div>
        </div>
      </a>
      <button className="bg-[#104101] relative shrink-0" data-name="Button primary">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[16px] relative size-full">
            <div className="bg-white relative shrink-0 size-[4px]" data-name="Bullet" />
            <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Explore Services</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function IntroContentDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative size-full pt-[60px]" data-name="Intro content">
      <HeaderTextDesktop />
      <ButtonRowDesktop />
    </div>
  );
}

function IntroContent() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <IntroContentMobile />;
  }
  if (width < 1280) {
    return <IntroContentTablet />;
  }
  return <IntroContentDesktop />;
}

export default IntroContent;
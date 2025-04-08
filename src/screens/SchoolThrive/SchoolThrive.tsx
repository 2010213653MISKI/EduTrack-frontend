import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const SchoolThrive = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "Product", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <div className="flex flex-col items-start bg-white">
      <div className="relative w-full h-[777px] bg-faded-secondary-color-1">
        {/* Header/Navigation */}
        <header className="w-full px-[59px] py-[17px]">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <h1 className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-2xl tracking-[0.10px] leading-8">
                Brandname
              </h1>
            </div>

            {/* Navigation Links */}
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex items-center gap-[21px]">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className="font-link font-[number:var(--link-font-weight)] text-second-text-color text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] [font-style:var(--link-font-style)]"
                      href={link.href}
                    >
                      {link.text}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Buttons */}
            <div className="flex items-center gap-[45px]">
              <Button
                variant="link"
                className="font-btn-text font-[number:var(--btn-text-font-weight)] text-primary-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] [font-style:var(--btn-text-font-style)] p-0"
              >
                Login
              </Button>
              <Button className="bg-primary-color rounded-[5px] px-[25px] py-[15px] flex items-center gap-[15px]">
                <span className="text-light-text-color font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] [font-style:var(--btn-text-font-style)]">
                  JOIN US
                </span>
                <img
                  className="w-3 h-2.5"
                  alt="Arrow right icon"
                  src="/icn-arrow-right--icn-xs.svg"
                />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="w-full h-[682px] mt-[95px]">
          <div className="flex items-center justify-end gap-[30px] px-[59px]">
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center gap-[30px] w-[573px]">
              <h5 className="font-h-5 font-[number:var(--h-5-font-weight)] text-primary-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                Best dental surgeons
              </h5>
              <h1 className="w-[542px] font-h-1 font-[number:var(--h-1-font-weight)] text-text-color text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
                25K+ STUDENTS TRUST US
              </h1>
              <p className="w-[458px] font-h-4 font-[number:var(--h-4-font-weight)] text-second-text-color text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                Our goal is to make online education work for everyone
              </p>
              <div className="flex items-start gap-2.5">
                <Button className="px-10 py-[15px] bg-primary-color rounded-[5px]">
                  <span className="text-light-text-color text-center font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] [font-style:var(--btn-text-font-style)]">
                    Get Quote Now
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="px-10 py-[15px] rounded-[5px] border border-solid border-[#96bb7c]"
                >
                  <span className="text-primary-color text-center font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] [font-style:var(--btn-text-font-style)]">
                    Learn More
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative w-[704px] h-[682px]">
              <div className="h-[682px] overflow-hidden">
                <div className="relative w-[768px] h-[654px] top-16 -left-8">
                  <div className="relative w-[670px] h-[618px] left-[66px]">
                    <div className="absolute w-[496px] h-[496px] top-28 left-[81px] rounded-[247.84px] border-[79.18px] border-solid border-[#b8f0d7]" />
                    <img
                      className="absolute w-[532px] h-[618px] top-0 left-[62px] object-cover"
                      alt="Student with backpack"
                      src="/technology-1.png"
                    />
                    <img
                      className="w-[219px] h-[135px] top-[483px] left-9 absolute object-cover"
                      alt="Educational statistics"
                      src="/image-5.png"
                    />
                    <img
                      className="w-48 h-[184px] top-[278px] left-[478px] absolute object-cover"
                      alt="Learning metrics"
                      src="/image-2.png"
                    />
                    <img
                      className="w-[162px] h-[82px] top-[237px] left-0 absolute object-cover"
                      alt="Educational chart"
                      src="/image-10.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Hero } from "../../components/Hero";
import { LimitedOffer } from "../../components/SpecialCat";
import { RecentlyAdded } from "../../components/RecentlyAdded";
import { SpecialOffer } from "@/components/SpecialOffer";
import { BestSellers } from "@/components/BestSellers";
import { NormalProduct } from "@/components/NormalProduct";
import { MarqueeComponent } from "@/components/Marquee";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
    <Hero />
    <MarqueeComponent />
    <LimitedOffer />
    <SpecialOffer />
    <RecentlyAdded />
    <BestSellers />
    <NormalProduct />
    <CallToAction />
    </>
  );
}

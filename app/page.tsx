import { Hero } from "../components/Hero";
import { LimitedOffer } from "../components/SpecialCat";
import { RecentlyAdded } from "../components/RecentlyAdded";
import { SpecialOffer } from "@/components/SpecialOffer";
import { BestSellers } from "@/components/BestSellers";
import { NormalProduct } from "@/components/NormalProduct";

export default function Home() {
  return (
    <>
    <Hero />
    <LimitedOffer />
    <SpecialOffer />
    <RecentlyAdded />
    <BestSellers />
    <NormalProduct />
    </>
  );
}

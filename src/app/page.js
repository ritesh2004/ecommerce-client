import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Carousel } from "@/components/Carousel";
import { TodaySales } from "@/components/TodaySales";
import { Categories } from "@/components/Categories";
import { BestSelling } from "@/components/BestSelling";
import { Allproducts } from "@/components/Allproducts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{"fontFamily":"Ubuntu"}}>
      <Navbar/>
      <Carousel/>
      <TodaySales/>
      <Categories/>
      <BestSelling/>
      <Allproducts/>
      <Footer/>
    </div>
  );
}

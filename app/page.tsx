import Image from "next/image";
import Homee from "./components/home";
import About from "./components/about";
import Timeline from "./components/timeline";
import Judges from "./components/judges";
import Prizes from "./components/prizes";
import Sponsors from "./components/sponsors";
import Organiser from "./components/organiser";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Team from "./components/organizer";
import Headeri from "./nav/header";
import Footeri from "./nav/footer";

export default function Home() {
  return (
   <>
   <div>
    <header><Headeri></Headeri></header>
    <div><Homee/></div>
    <div><About></About></div>
    <div><Timeline></Timeline></div>
    <div><Judges></Judges></div>
    <div><Prizes></Prizes></div>
    <div><Sponsors></Sponsors></div>
    <div><Organiser></Organiser></div>
    <div><Faq></Faq></div>
    <div><Contact></Contact></div>
    <div><Team></Team></div>
    <footer><Footeri></Footeri></footer>
   </div>
   </>
  );
}

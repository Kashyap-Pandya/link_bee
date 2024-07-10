import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-bold sm:leading-relaxed sm:tracking-wider ">
        Quick, Easy, Effective Link Shortening 🔗🐝
        <span className="text-teal-400">.</span>
      </h2>
      <form
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
        onSubmit={handleShorten}
      >
        <Input
          type="url"
          placeholder="Enter your long URL, watch Bee do it's magic ✨!"
          className="h-full flex-1 py-4 px-4"
          onChange={(e) => setLongUrl(e.target.value)}
          value={longUrl}
        />
        <Button className="bg-teal-400 h-full">Shorten ! </Button>
      </form>
      <Accordion
        type="multiple"
        collapsible="true"
        className="w-full md:px-11 mt-14"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Can I customize my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! We offer the option to customize your shortened URLs
            with custom aliases. This makes your links more memorable and aligns
            them with your brand.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Is your URL shortener free to use?
          </AccordionTrigger>
          <AccordionContent>
            Yes, our URL shortening service is completely free to use.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I track the clicks on my shortened URLs
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can! Our service includes a robust analytics feature that
            allows you to track the number of clicks, geographic location of
            clicks, and referral sources for all your shortened URLs. Stay
            informed and optimize your link performance with our detailed
            insights.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default LandingPage;

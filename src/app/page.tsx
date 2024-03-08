import { FeaturedCourses } from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeaturedWebinarsSection } from "@/components/FeaturedWebinarsSection";
import { InstructorSection } from "@/components/InstructorSection";

export default function Home() {
  return (
        <div>
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs/>
            <TestimonialsSection/>
            <FeaturedWebinarsSection/>
            <InstructorSection/>
        </div>
  );
}

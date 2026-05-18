"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Birrieria Iturbidense"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Authentic Birria Experience in Indianapolis"
      description="Experience the bold, savory flavors of our authentic birria tacos, chorizo sausage, and signature loaded fries. Serving authentic tradition on wheels."
      testimonials={[
        {
          name: "Sarah Johnson",
          handle: "@sarahj",
          testimonial: "The best birria tacos I have ever had, hands down!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-hands-holds-two-burgers-blurred-background_169016-43765.jpg",
        },
        {
          name: "Michael Chen",
          handle: "@indyfoodie",
          testimonial: "Authentic, flavorful, and incredibly fast service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-with-pizza-slices_23-2149525555.jpg",
        },
        {
          name: "Emily R.",
          handle: "@emilyindy",
          testimonial: "The loaded fries were a game changer. Will be back!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg",
        },
        {
          name: "David K.",
          handle: "@davidk",
          testimonial: "Finally, real Mexican street food in the heart of Indy.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/women-eating-traditional-italian-pizza-together_52683-110888.jpg",
        },
        {
          name: "Maria G.",
          handle: "@maria.g",
          testimonial: "The consommé was rich and absolutely delicious.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-transgender-holding-coffee-cup_23-2149105417.jpg",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-tortilla-with-meat-vegetables_23-2148750443.jpg"
      imageAlt="authentic mexican birria tacos"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-tortilla-with-meat-vegetables_23-2148750443.jpg",
          alt: "happy customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/delicious-tacos-arrangement_23-2150878147.jpg",
          alt: "happy customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tacos-with-meat-filler-plate_23-2148181613.jpg",
          alt: "happy customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/guacamole-bowl-with-mexican-nachos-wooden-cutting-board_23-2148042458.jpg",
          alt: "happy customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hand-holding-delicious-tacos_23-2150878357.jpg",
          alt: "happy customer portrait",
        },
      ]}
      avatarText="Join 500+ happy eaters"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Tradition in ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/delicious-tacos-arrangement_23-2150878147.jpg",
          alt: "fresh authentic mexican tacos ingredients",
        },
        {
          type: "text",
          content: " Every Bite",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Birria Tacos",
          price: "$12",
          rating: 5,
          reviewCount: "120",
          brand: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/tacos-with-meat-filler-plate_23-2148181613.jpg",
        },
        {
          id: "2",
          name: "Tacos-Chorizo",
          price: "$10",
          rating: 4,
          reviewCount: "95",
          brand: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-chicken-burrito-served-with-fries-mayonnaise-ketchup_141793-2314.jpg",
        },
        {
          id: "3",
          name: "Birria Pizza",
          price: "$18",
          rating: 5,
          reviewCount: "80",
          brand: "Signature",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-tacos-arrangement-plate_23-2148629351.jpg",
        },
        {
          id: "4",
          name: "Steak Burrito",
          price: "$14",
          rating: 4,
          reviewCount: "65",
          brand: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-table-green-color_58702-1317.jpg",
        },
        {
          id: "5",
          name: "D-Waffle Pops",
          price: "$8",
          rating: 5,
          reviewCount: "50",
          brand: "Dessert",
          imageSrc: "http://img.b2bpic.net/free-photo/guacamole-bowl-with-mexican-nachos-wooden-cutting-board_23-2148042458.jpg",
        },
        {
          id: "6",
          name: "Elotes",
          price: "$6",
          rating: 5,
          reviewCount: "40",
          brand: "Side",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-fruity-cakes-with-cream-chocolate-inside-white-plate-pink-desk-cake-biscuit-sweet-bake_140725-22680.jpg",
        },
      ]}
      title="Popular Menu Items"
      description="Our most beloved dishes, prepared fresh daily."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Diner",
          company: "Foodie",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mature-woman-smiling_1149-601.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Diner",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-hipster-dressed-leather-jacket-eating-vegan-burger_613910-16391.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Diner",
          company: "Tourist",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-working-with-food_23-2148896947.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Diner",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-doctors-by-ambulance-paramedics-by-ambulance-smiling_657921-1437.jpg",
        },
        {
          id: "5",
          name: "Maria G.",
          role: "Diner",
          company: "Foodie",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-trendy-clothes_482257-78860.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.5",
          label: "Rating",
        },
        {
          value: "226+",
          label: "Reviews",
        },
        {
          value: "Local",
          label: "Favorite",
        },
      ]}
      title="Customer Stories"
      description="What our hungry customers are saying."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Indianapolis Food Guide",
        "Downtown Eats",
        "Street Food Weekly",
        "Indy Tastebuds",
        "City Culinary",
        "Trucks & Tacos",
        "Best Of Indy",
      ]}
      title="Recommended In"
      description="Recognized by local food enthusiasts and guides."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Where are you located?",
          content: "Find us at 6302 W Washington St, Indianapolis, IN.",
        },
        {
          id: "2",
          title: "What are your hours?",
          content: "We operate Wed-Sun, check our social media for updates.",
        },
        {
          id: "3",
          title: "Do you accept orders online?",
          content: "Yes, order directly through our official clover link.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516965.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about your next visit."
      faqsAnimation="slide-up"
      imageAlt="mexican food truck interior"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in touch"
      title="Follow Our Journey"
      description="Subscribe for daily location updates and special menu reveals."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Tacos",
              href: "#menu",
            },
            {
              label: "Desserts",
              href: "#menu",
            },
            {
              label: "Drinks",
              href: "#menu",
            },
          ],
        },
        {
          title: "Location",
          items: [
            {
              label: "Indianapolis, IN",
              href: "#",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Birrieria Iturbidense"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

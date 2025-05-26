import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
            
function Glassprinting() {
  return (
    <section className="py-4 md:py-32">
     
      <div  id="Glass Printing"className="mx-auto max-w-5xl py-22 space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Showcase your brand with premium glass
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/glassprint.png"
                className=" rounded-[15px] dark:block"
                alt="glassprint"
                width={1207}
                height={929}
              />
             
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
             ultra-high-resolution UV digital printing directly on glass,
                  paired with advanced laser cutting and finishing
                  techniques—giving your visuals a {" "}
              <span className="text-accent-foreground font-bold">
               sleek, modern look that truly
                  stands out.
              </span>{" "}
              
            </p>
            

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Known across Pune and PAN India, AG Production
                  specializes in elegant, customized glass print designs that
                  elevate your brand with sophistication and precision. We use
                  
                </p>

                
              </blockquote>
            </div><Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="https://wa.me/919370548470">
                              <span>contact on whatsapp</span>
                              <ChevronRight className="size-2" />
                            </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Glassprinting;

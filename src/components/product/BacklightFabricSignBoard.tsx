import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function BacklightFabricSignBoard() {
  return (
    <section className="py-16 md:py-32">
     
      <div id="Backlight Fabric Signboard" className="py-18 mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Put your brand in the spotlight with Backlit Fabric
          Signboards.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/backlightfabric.png"
                className=" rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
               these signs offer a{" "}
              <span className="text-accent-foreground font-bold">
               premium look
              with long-lasting durability.
              </span>{" "}
             rafted using eco-friendly fabric and mounted on slim,
            </p>
            

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Sleek, vibrant, and sustainable—our fabric signboards are designed
              to make your message stand out with elegance and clarity.
                </p>
              </blockquote>
              
            </div>
            <Button
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

export default BacklightFabricSignBoard;

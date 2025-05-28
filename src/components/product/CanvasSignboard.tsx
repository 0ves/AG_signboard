import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
            
function CanvasSignboard() {
  return (
    <section id="Canvas Signboard"className="py-16 md:py-32">
     
      <div  className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Add a touch of elegance to your space with AG Production’s Canvas
          Signboards.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/canvassignboard.png"
                className=" rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Printed on high-quality cotton canvas using ultra-high resolution
              UV digital printing, these signboards offer{" "}
              <span className="text-accent-foreground font-bold">
                a rich, textured finish that looks just like real artwork
              </span>{" "}
              —mounted on a sturdy 1 to 1.5 inch wooden or aluminium frame.
            </p>
            <p className="text-muted-foreground">
              Whether you&rsquo;re setting up at an event or decorating a business
              space, our canvas signboards help keep your brand consistent and
              professional. They&rsquo;re an affordable way to make a lasting
              impression and turn heads—perfect for showcasing your message or
              adding artistic flair with class and confidence.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Stand out with style! AG Production’s cotton canvas signboards
                  bring your brand to life with rich textures, bold prints, and
                  elegant framing—perfect for events or spaces.
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

export default CanvasSignboard;

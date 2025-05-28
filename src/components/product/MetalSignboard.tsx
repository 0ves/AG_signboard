import react from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function MetalSignboard() {
  return (
    <>
      <section className="py-16 md:py-32">
        <div id="Metal Signboard" className=" py-20 mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xxl text-4xl font-medium lg:text-5xl">
            Timeless style and lasting impact, choose AG Production’s Metal
            Signboards.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <Image
                  src="/metalsign.png"
                  className="hidden rounded-[15px] dark:block"
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src="/metalsign.png"
                  className="rounded-[15px] shadow dark:hidden"
                  alt="metal sign board"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                Perfect for both indoor and outdoor use, our metal signboards
                bring elegance and class to any project .signboards bring {" "}
                <span className="text-accent-foreground font-bold">
                  elegance and class to any
                project—whether it's a sleek nameplate on your door or a bold
                
                </span>{" "}
                 branding element for your business.
              </p>
              <p className="text-muted-foreground">
                Durability & Product warranty: The Metal signboards have a life
                span of around 4 – 5 years with a 1-year warranty against
                manufacturing defects.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <p>
                   Crafted from premium
                materials like stainless steel and CRCA, each sign is
                precision-cut using advanced laser technology and finished with
                high-quality coatings that ensure durability and a standout
                look.
                  </p>

                  <div className="mt-6 space-y-3">
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
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

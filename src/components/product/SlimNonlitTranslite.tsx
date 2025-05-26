import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SlimNonlitTranslite() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <img
          className="rounded-(--radius)"
          src="/slimnonlit1.png"
          alt="slim non lit display"
          height="100px"
          width="400px"
          loading="lazy"
          id="Slim Non-lit Translite"
        />

        <div  className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">Slim Non Lit Signboard</h2>
          <div className="space-y-6">
            <p>
              slim non-lit signboards offer a clean, modern look—perfect for
              making announcements that stand out, without the flash.
            </p>
            <p>
              The life span of this signboard is around 3 – 4 years for up to 8
              feet width signages with a 1-year warranty against manufacturing
              defects.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="https://wa.me/919370548470?text=Hello,tell%20me%20more%20Slim%20Non%20lit%20Translite%20signbord">
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

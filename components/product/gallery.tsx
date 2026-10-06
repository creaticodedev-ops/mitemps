"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GridTileImage } from "components/grid/tile";
import { useRouter, useSearchParams } from "next/navigation";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requested = searchParams.has("image")
    ? parseInt(searchParams.get("image") || "0", 10)
    : 0;
  const imageIndex =
    Number.isFinite(requested) && requested >= 0 && requested < images.length
      ? requested
      : 0;

  const updateImage = (index: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", index);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex =
    imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    "flex h-full items-center justify-center px-6 text-neutral-500 transition-all ease-in-out hover:scale-110 hover:text-white";

  const active = images[imageIndex];

  return (
    <form>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {active ? (
          // Demo and future admin images can come from any host.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="mt-product absolute inset-0 h-full w-full object-contain"
            alt={active.altText}
            src={active.src}
          />
        ) : null}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white/20 bg-neutral-900/80 text-neutral-400 backdrop-blur-sm">
              <button
                formAction={() => updateImage(previousImageIndex.toString())}
                aria-label="Image précédente"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500" />
              <button
                formAction={() => updateImage(nextImageIndex.toString())}
                aria-label="Image suivante"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex flex-wrap items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={`${image.src}-${index}`} className="h-20 w-20">
                <button
                  formAction={() => updateImage(index.toString())}
                  aria-label="Choisir cette image"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}

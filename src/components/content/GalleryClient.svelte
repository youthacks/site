<script lang="ts">
  import { onMount } from "svelte";
  import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";
  import type { SanityImageAssetReference } from "sanity.types";
  import { getSanityImage } from "~/lib/assets/sanity";

  const { images }: { images: { asset: SanityImageAssetReference }[] } =
    $props();

  let emblaNode: HTMLElement;
  let embla: EmblaCarouselType | null = null;

  let index = $state(0);

  onMount(() => {
    const instance = EmblaCarousel(emblaNode, {
      loop: true,
      slides: emblaNode.querySelectorAll("[data-slide]"),
    });
    embla = instance;

    instance.on("select", () => {
      index = instance.selectedScrollSnap();
    });

    return () => {
      instance.destroy();
    };
  });
</script>

<div
  bind:this={emblaNode}
  class="relative w-full p-6 md:p-10 pb-20! overflow-clip border border-neutral-300 bg-white bg-noise text-base select-none"
>
  <div class="flex w-full aspect-video max-md:aspect-3/2 max-md:max-h-80">
    {#each images as image}
      {@const { attributes } = getSanityImage({
        src: image.asset,
      })}

      <div
        class="h-full @container flex justify-center mr-16 group flex-[0_0_100%] relative isolate"
        data-slide
      >
        <div
          class="rotate-1 group-even:-rotate-1 h-full w-max max-w-[100cqw] p-3 md:p-4 shadow-md bg-white border border-neutral-300"
        >
          <img
            {...attributes}
            alt=""
            class="h-full w-max max-w-full object-cover"
          />
        </div>
      </div>
    {/each}
  </div>
  <div class="absolute inset-0 flex flex-col items-center p-3">
    <div class="flex-1 min-h-0"></div>
    <div class="flex gap-3 items-center">
      <button
        onclick={() => embla?.scrollPrev()}
        class="grid size-10 border border-neutral-300 place-items-center rounded-full transition hover:bg-neutral-200 bg-neutral-100"
      >
        <span class="text-lg font-semibold">←</span>
        <span class="sr-only">Previous</span>
      </button>
      <p class="tabular-nums">
        <span class="font-semibold">
          {index + 1}
        </span>
        <span class="">
          of {images.length}
        </span>
      </p>
      <button
        onclick={() => embla?.scrollNext()}
        class="grid size-10 border border-neutral-300 place-items-center rounded-full transition hover:bg-neutral-200 bg-neutral-100"
      >
        <span class="text-lg font-semibold">→</span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</div>

<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";

  const {
    images,
    children,
  }: { images: { caption?: string }[]; children?: Snippet } = $props();

  let emblaNode: HTMLElement;
  let embla: EmblaCarouselType | null = null;

  let index = $state(0);

  onMount(() => {
    const instance = EmblaCarousel(emblaNode, {
      loop: true,
      slides: emblaNode.querySelectorAll("img"),
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
  class="relative aspect-video overflow-clip rounded-xl bg-neutral-950 text-base shadow-sm select-none"
>
  <div class="flex h-full">
    {@render children?.()}
  </div>
  <div
    class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-neutral-950/50 via-transparent p-6 text-white"
  >
    <div class="flex items-end gap-4">
      <div
        class="flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-1 backdrop-blur-sm"
      >
        <button
          onclick={() => embla?.scrollPrev()}
          class="grid size-10 place-items-center rounded-full transition hover:bg-white/20"
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
          class="grid size-10 place-items-center rounded-full transition hover:bg-white/20"
        >
          <span class="text-lg font-semibold">→</span>
          <span class="sr-only">Next</span>
        </button>
      </div>
      <div class="flex-1"></div>
      <p class="-mb-1 text-right text-sm text-current/80">
        {images[index].caption}
      </p>
    </div>
  </div>
</div>

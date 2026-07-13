<script lang="ts">
  import { expoIn, expoOut, linear } from "svelte/easing";
  import { fade, type TransitionConfig } from "svelte/transition";
  import LuMenu from "~/assets/icons/LuMenu.svelte";
  import LuX from "~/assets/icons/LuX.svelte";
  import { getSanityImage, type SanityImageSource } from "~/lib/assets/sanity";

  const {
    logo,
    links,
  }: {
    logo?: SanityImageSource;
    links: { label: string | null; slug: string | null }[];
  } = $props();

  let scrollY = $state(0);
  let navOpen = $derived(scrollY >= 32);

  let innerWidth = $state(0);
  let mobileMenuOpenUser = $state(false);
  let mobileMenuOpen = $derived(innerWidth < 768 && mobileMenuOpenUser);

  function wipe(
    node: HTMLElement,
    params: {
      delay?: number;
      duration?: number;
      easing?: (t: number) => number;
    } = {},
  ): TransitionConfig {
    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || linear,
      css: (t, u) => `clip-path: inset(0 0 ${u * 100}% 0)`,
    };
  }
</script>

<header id="header" class="group fixed inset-x-0 top-0 isolate z-20">
  <div
    class={[
      "absolute inset-0 -z-10 bg-white transition-[height,box-shadow]",
      navOpen ? "h-full shadow-lg" : "h-0",
    ]}
  ></div>
  <div
    class="mx-auto flex h-20 max-w-7xl items-center px-8 md:px-12 transition-[height]"
  >
    {#if logo}
      {@const { attributes } = getSanityImage({
        src: logo,
        height: 32,
        priority: true,
      })}
      <a href="/" data-part="logo">
        <img {...attributes} class="h-8" />
        <span class="sr-only">Home</span>
      </a>
    {/if}
    <div class="flex-1"></div>
    <button
      data-part="links"
      onclick={() => (mobileMenuOpenUser = true)}
      class="border border-transparent transition md:hidden"
    >
      <LuMenu class="size-6" />
      <span class="sr-only">Open navigation</span>
    </button>
    <nav data-part="links" class="flex items-center gap-3 max-md:hidden">
      {#each links as link, idx}
        {#if idx > 0}
          <span role="separator" class="text-current/50">/</span>
        {/if}
        <a
          href={"/" + (link.slug || "")}
          class="text-lg font-semibold underline-offset-2 hover:underline"
        >
          {link.label}
        </a>
      {/each}
    </nav>
  </div>
</header>

{#if mobileMenuOpen}
  <div
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200, delay: 200 }}
    class="fixed inset-0 z-20 bg-black/40"
    onclick={() => (mobileMenuOpenUser = false)}
  ></div>
  <div
    in:wipe={{ easing: expoOut }}
    out:wipe={{ easing: expoIn }}
    class="fixed top-0 inset-x-0 h-auto z-20 max-h-full bg-white"
  >
    <div class="h-20 flex px-8 items-center">
      {#if logo}
        {@const { attributes } = getSanityImage({
          src: logo,
          height: 32,
          priority: true,
        })}
        <a href="/">
          <img {...attributes} class="h-8" />
          <span class="sr-only">Home</span>
        </a>
      {/if}
      <div class="flex-1"></div>
      <button
        onclick={() => (mobileMenuOpenUser = false)}
        disabled={!mobileMenuOpen}
        class="border border-transparent transition hover:bg-neutral-100 hover:border-neutral-300"
      >
        <LuX class="size-6" />
        <span class="sr-only">Close navigation</span>
      </button>
    </div>
    <nav class="p-8 pt-0">
      <hr class="mb-8 border-neutral-200" />
      <div class="space-y-2">
        {#each links as link}
          <a
            href={"/" + (link.slug || "")}
            class="text-3xl font-heading block max-w-fit font-semibold underline-offset-2 hover:underline"
          >
            {link.label}
          </a>
        {/each}
      </div>
    </nav>
  </div>
{/if}

<svelte:window bind:scrollY bind:innerWidth />

<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-part="logo"] {
      animation: logo 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms both;
    }
    @keyframes logo {
      0% {
        translate: 16px 0;
        opacity: 0;
      }
      100% {
        translate: 0 0;
        opacity: 1;
      }
    }

    [data-part="links"] {
      animation: links 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms both;
    }
    @keyframes links {
      0% {
        translate: -16px 0;
        opacity: 0;
      }
      100% {
        translate: 0 0;
        opacity: 1;
      }
    }
  }
</style>

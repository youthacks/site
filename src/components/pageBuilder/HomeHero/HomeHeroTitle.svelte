<script lang="ts">
  import { onMount } from "svelte";
  import { expoInOut } from "svelte/easing";
  import { type TransitionConfig } from "svelte/transition";

  const words = ["makers", "builders", "dreamers", "innovators"];
  let offsetWidths = $state<number[]>([]);
  let index = $state(0);

  function wipe(
    node: HTMLElement,
    params: {
      delay?: number;
      duration?: number;
      easing?: (t: number) => number;
    } = {},
    options: { direction: 'in' | 'out' | 'both' }
  ): TransitionConfig {
    if(options.direction === "both") throw new Error("Direction not specified");

    return {
      delay: params.delay || 0,
      duration: params.duration || 500,
      easing: params.easing || expoInOut,
      css: (t, u) => options.direction === "in" ? `clip-path: inset(0 ${u * 100}% 0 0)` : `clip-path: inset(0 0 0 ${u * 100}%)`,
    };
  }

  onMount(() => {
    let delta = 0;
    let lastTime = 0;
    let active = true;

    function callback(time: number) {
      if (!active) return;
      lastTime ||= time;
      delta += time - lastTime;

      if (delta > 5000) {
        index = (index + 1) % words.length;
        delta = 0;
      }

      lastTime = time;
      requestAnimationFrame(callback);
    }

    requestAnimationFrame(callback);

    return () => {
      active = false;
    };
  });
</script>

<h1 class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold">
  We create the
  <br />
  <span
    class="text-rose-700 inline-grid items-center justify-items-start transition-[width] ease-in-out-expo duration-750 delay-250"
    style:width={offsetWidths[index] + "px"}
  >
    {#key index}
      <span
        in:wipe={{ delay: 500 }}
        out:wipe
        class="col-start-1 text-left row-start-1"
      >
        {words[index]}
      </span>
    {/key}
  </span>
  of <br class="sm:hidden" />
  the future_

  <span class="absolute top-0 left-0 size-0 overflow-clip invisible">
    {#each words as word, idx}
      <span
        aria-hidden="true"
        class="w-max block"
        bind:offsetWidth={offsetWidths[idx]}
      >
        {word}
      </span>
    {/each}
  </span>
</h1>

<script lang="ts">
  import type { Team } from "sanity.types";
  import LuCameraOff from "~/assets/icons/LuCameraOff.svelte";
  import LuChevronDown from "~/assets/icons/LuChevronDown.svelte";
  import LuGlobe from "~/assets/icons/LuGlobe.svelte";
  import SiGithub from "~/assets/icons/SiGithub.svelte";
  import { getSanityImage } from "~/lib/assets/sanity";

  type Member = NonNullable<Team["members"]>[number];

  const {
    members,
    color,
  }: {
    members: Member[];
    color: Team["color"];
  } = $props();

  const linkColor = $derived(
    {
      red: "text-red-700 hover:text-red-900",
      yellow: "text-yellow-700 hover:text-yellow-900",
      blue: "text-cyan-700 hover:text-cyan-900",
      grey: "text-neutral-600 hover:text-neutral-800",
    }[color || "red"],
  );

  let selected = $state<string | null>(null);

  let innerWidth = $state(0);
  let columns = $derived(innerWidth < 768 ? 1 : innerWidth < 1280 ? 2 : 3);
  let [first, second, third] = $derived.by(() => {
    if (columns === 1) {
      return [members, null, null];
    } else if (columns === 2) {
      return [
        members.filter((_, i) => i % 2 === 0),
        members.filter((_, i) => i % 2 === 1),
        null,
      ];
    } else {
      return [
        members.filter((_, i) => i % 3 === 0),
        members.filter((_, i) => i % 3 === 1),
        members.filter((_, i) => i % 3 === 2),
      ];
    }
  });
</script>

{#if innerWidth === 0}
  <!-- Not hydrated yet -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    {#each members as member (member._key)}
      {@render memberCard(member)}
    {/each}
  </div>
{:else}
  <div class="flex gap-4">
    <div class="flex-1 min-w-0 space-y-4">
      {#each first as member (member._key)}
        {@render memberCard(member)}
      {/each}
    </div>
    {#if second}
      <div class="flex-1 min-w-0 space-y-4">
        {#each second as member (member._key)}
          {@render memberCard(member)}
        {/each}
      </div>
    {/if}
    {#if third}
      <div class="flex-1 min-w-0 space-y-4">
        {#each third as member (member._key)}
          {@render memberCard(member)}
        {/each}
      </div>
    {/if}
  </div>
{/if}

<svelte:window bind:innerWidth />

{#snippet memberCard(member: Member)}
  <div class="bg-white shadow-md">
    <button
      onclick={() => {
        if (selected === member._key) {
          selected = null;
        } else {
          selected = member._key;
        }
      }}
      class="flex text-left w-full items-center p-6 gap-4"
    >
      {#if member.photo}
        {@const { attributes } = getSanityImage({
          src: member.photo,
          width: 96,
          height: 96,
        })}
        <img {...attributes} class="size-12 rounded-full" />
      {:else}
        <div
          class="size-12 rounded-full grid place-items-center bg-neutral-200 border border-neutral-300"
        >
          <LuCameraOff class="size-4 text-neutral-400" />
        </div>
      {/if}
      <div class="flex-1 min-w-0">
        <p class="text-xl font-semibold">{member.name}</p>
        <p class="text-neutral-600">{member.role}</p>
      </div>
      <LuChevronDown
        class={[
          "size-5 transition-transform",
          member._key === selected && "rotate-180",
        ]}
      />
    </button>
    <div
      class={[
        "overflow-clip transition-[height] [interpolate-size:allow-keywords] ",
        member._key === selected ? "h-auto" : "h-0",
      ]}
    >
      <div class="p-6 pt-0">
        <hr class="mb-6 border-neutral-200" />
        <div class="space-y-2">
          {#if member.bio}
            <p class="text-neutral-900">
              {member.bio}
            </p>
          {/if}
          {#if member.github}
            <a
              href={`https://github.com/${member.github.trim()}`}
              target="_blank"
              rel="noopener"
              class={[
                "group flex max-w-fit items-center gap-1.5 transition font-semibold",
                linkColor,
              ]}
            >
              <SiGithub class="size-4" />
              <span class="group-hover:underline underline-offset-2">
                {member.github}
              </span>
              ↗
            </a>
          {/if}
          {#if member.website}
            <a
              href={member.website}
              target="_blank"
              rel="noopener"
              class={[
                "group flex max-w-fit items-center gap-1.5 transition font-semibold",
                linkColor,
              ]}
            >
              <LuGlobe class="size-4" />
              <span class="group-hover:underline underline-offset-2">
                {new URL(member.website).hostname.replace(/^www\./, "")}
              </span>
              ↗
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/snippet}

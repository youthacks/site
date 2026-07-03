<script lang="ts">
  import type { Team } from "sanity.types";
  import LuCameraOff from "~/assets/icons/LuCameraOff.svelte";
  import { getSanityImage } from "~/lib/assets/sanity";

  const { members }: { members: Exclude<Team["members"], undefined> } =
    $props();
</script>

<div class="grid grid-cols-3 gap-4">
  {#each members as member}
    <div class="bg-white shadow-md">
      <div class="flex items-center p-6 gap-4">
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
        <div>
          <p class="text-xl font-semibold">{member.name}</p>
          <p class="text-neutral-600">{member.role}</p>
        </div>
      </div>
    </div>
  {/each}
</div>

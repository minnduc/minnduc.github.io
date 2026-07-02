---
title: 'Projects'
---

<script>
  import { projects as allProjects } from '$lib/config/projects';
  import ProjectComponent from '$lib/components/extra/projects.svelte';

  let items = [...allProjects, { id: 'footer' }];
</script>

{#each items as item}
  <ProjectComponent {item} />
{/each}
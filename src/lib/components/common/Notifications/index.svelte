<script lang="ts">
	import { notifications } from '$stores';
	import Notification from './Notification.svelte';
</script>

<div
	aria-live="assertive"
	class="pointer-events-none fixed inset-0 z-30 flex items-end px-4 py-6 sm:items-start sm:p-6"
>
	<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
		{#each $notifications as data}
			<Notification {data} />
		{/each}
	</div>
</div>

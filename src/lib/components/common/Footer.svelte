<script lang="ts">
	import { goto } from '$app/navigation';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
	import { user } from '$stores';
	import { signInWithGoogle } from '$utils/auth';
	import CtaButton from './CtaButton.svelte';
</script>

<footer class="mx-auto mt-32 flex max-w-[1200px] items-center justify-between py-8 px-6">
	<a href="/">
		<div class="flex items-center justify-center gap-4">
			<Logo className="w-10 md:w-12" />
			<h2 class="hidden text-lg font-bold md:block">Menyū</h2>
		</div>
	</a>

	<div class="flex items-center justify-center gap-4 md:gap-8">
		<a
			href="https://github.com/Devang47/Menyu"
			class="rounded p-1"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="sr-only">Github</div>
			<GithubIcon className="w-5 md:w-6" />
		</a>
		<a
			href="https://twitter.com/DevangSaklani"
			class="rounded p-1"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="sr-only">Twitter</div>
			<TwitterIcon className="w-5 md:w-6" />
		</a>

		{#if !$user}
			<CtaButton className="!mix-blend-normal w-20" whiteBg on:click={signInWithGoogle}
				>Sign in</CtaButton
			>
		{:else}
			<CtaButton className="!mix-blend-normal w-20" whiteBg on:click={() => goto('/dashboard')}
				>Dashboard</CtaButton
			>
		{/if}
	</div>
</footer>

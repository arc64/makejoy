<script lang="ts">
	import { onMount } from 'svelte'
	import type { Panel } from '$lib/types/zine'
	import { escapeHtml } from '$lib/utils/sanitize'

	let panels: Panel[] = []
	let loading = true
	let error: string | null = null

	async function fetchPanels() {
		try {
			const response = await fetch('/api/zine/panels')
			if (!response.ok) {
				throw new Error('Failed to fetch panels')
			}
			const apiResponse = await response.json()
			panels = apiResponse.data
		} catch (e) {
			error = e instanceof Error ? e.message : 'An unknown error occurred'
		} finally {
			loading = false
		}
	}

	onMount(fetchPanels)
</script>

<main class="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		{#if loading}
			<div class="py-12 text-center">
				<p class="text-lg">Loading zine content...</p>
			</div>
		{:else if error}
			<div
				class="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
				role="alert"
			>
				<strong class="font-bold">Error!</strong>
				<span class="block sm:inline"> {error}</span>
				<button
					class="mt-2 rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
					on:click={fetchPanels}
				>
					Retry
				</button>
			</div>
		{:else}
			<div class="grid gap-8">
				{#each panels as panel (panel.id)}
					<div class="overflow-hidden rounded-xl bg-white p-6 shadow-md {panel.width}">
						<div class="relative min-h-[200px] {panel.height}">
							{#if panel['background-img'] && panel['background-img'].src}
								<img
									src={panel['background-img'].src}
									alt={panel['background-img'].alt || ''}
									class="absolute inset-0 h-full w-full object-cover"
								/>
							{/if}

							{#each panel.texts as text, index (index)}
								<div class="absolute {text.text_position} p-4">
									{#if text.type === 'normal'}
										<p class="text-gray-800">{escapeHtml(text.text)}</p>
									{:else if text.type === 'explosive'}
										<p class="text-xl font-bold text-red-600">{escapeHtml(text.text)}</p>
									{:else if text.type === 'shout'}
										<p class="text-2xl font-bold text-blue-600">{escapeHtml(text.text)}</p>
									{:else if text.type === 'whisper'}
										<p class="text-gray-500 italic">{escapeHtml(text.text)}</p>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>

<style>
	.width-full {
		width: 100%;
	}
	.width-half {
		width: 50%;
	}
	.half {
		height: 50vh;
	}
	.top-outer-left {
		top: 0;
		left: 0;
	}
	.top-outer-right {
		top: 0;
		right: 0;
	}
	.bottom-outer-left {
		bottom: 0;
		left: 0;
	}
	.bottom-outer-right {
		bottom: 0;
		right: 0;
	}
	.bottom-inner-right {
		bottom: 0;
		right: 0;
		transform: translateY(-50%);
	}
	.speech {
		position: relative;
		background: white;
		border-radius: 10px;
		padding: 10px;
		margin: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.speech:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0;
		border: 20px solid transparent;
		border-top-color: white;
		border-bottom: 0;
		margin-left: -20px;
		margin-bottom: -20px;
	}
</style>

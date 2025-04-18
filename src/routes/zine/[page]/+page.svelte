<script lang="ts">
	import { onMount } from 'svelte'
	import type { ZineContent } from '$lib/types/api'

	export let data: { page: string }

	let content: ZineContent | null = null
	let loading = true
	let error: string | null = null

	async function fetchContent() {
		try {
			loading = true
			error = null

			const response = await fetch(`/api/zine/${data.page}`)
			if (!response.ok) {
				throw new Error('Failed to fetch zine content')
			}

			const result = await response.json()
			content = result.data
		} catch (e) {
			error = e instanceof Error ? e.message : 'An unknown error occurred'
		} finally {
			loading = false
		}
	}

	onMount(fetchContent)
</script>

<div class="zine-page">
	{#if loading}
		<div class="loading">Loading...</div>
	{:else if error}
		<div class="error">
			<p>Error: {error}</p>
			<button on:click={fetchContent}>Retry</button>
		</div>
	{:else if content}
		<article>
			<h1>{content.title}</h1>
			<div class="content">
				{content.content}
			</div>
			{#if content.images && content.images.length > 0}
				<div class="images">
					{#each content.images as image, index (index)}
						<img src={image} alt="Zine illustration" />
					{/each}
				</div>
			{/if}
		</article>
	{/if}
</div>

<style>
	.zine-page {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.loading {
		text-align: center;
		padding: 2rem;
	}

	.error {
		color: red;
		text-align: center;
		padding: 2rem;
	}

	.error button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 4px;
		cursor: pointer;
	}

	.content {
		margin: 2rem 0;
		line-height: 1.6;
	}

	.images {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}

	.images img {
		width: 100%;
		height: auto;
		border-radius: 4px;
	}
</style>

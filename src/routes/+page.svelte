<script lang="ts">
	let count = 0
</script>

<main class="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white p-8 shadow-md md:max-w-2xl">
		<h1 class="mb-6 text-3xl font-bold text-gray-900">Tailwind Test</h1>

		<div class="space-y-4">
			<button
				class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				on:click={() => count++}
			>
				Click me! ({count})
			</button>

			<div class="rounded-lg bg-gray-50 p-4">
				<p class="text-gray-700">This is a test of various Tailwind classes:</p>
				<ul class="mt-2 space-y-2">
					<li class="text-red-500">Red text</li>
					<li class="text-green-500">Green text</li>
					<li class="text-blue-500">Blue text</li>
				</ul>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="rounded bg-purple-100 p-4">Grid item 1</div>
				<div class="rounded bg-purple-100 p-4">Grid item 2</div>
			</div>
		</div>
	</div>
</main>

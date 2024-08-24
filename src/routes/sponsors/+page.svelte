<svelte:options immutable={true} />

<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import { base } from '$app/paths';

	const sponsorsDesc=[
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
		"hello",
	]
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="NIT Calicut's Automotive club" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
		rel="stylesheet"
		media="screen"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
		rel="stylesheet"
		media="screen"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=New+Amsterdam&display=swap"
		rel="stylesheet"
		media="screen"
	/>
	<title>Team Unwired - Sponsors</title>
</svelte:head>

<Header />
<main class="text-primary-200">
	<div
		class="passion flex h-32 w-full items-center justify-center bg-secondary-50 text-center text-4xl font-extrabold text-primary-600"
	>
		Sponsors
	</div>
	<p class="flex h-48 flex-col justify-center bg-black text-center text-xl text-tertiary-500">
		<span class="font-light">Heartfelt thanks to all our sponsors who trusted and stood by us, helping us reach our dreams</span>
	</p>

	<div class="grid grid-cols-2 md:grid-cols-3 ml-[5vw] mr-[5vw] gap-[5vh] mt-[5vh] mb-[5vh] justify-items-center items-center">
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp1.jpg" alt="Kennametal"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp2.png" alt="ONGC"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp3.png" alt="SOLIDWORKS"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp4.jpg" alt="SUVIRE"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp5.png" alt="HPL"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp6.png" alt="GASOTECH"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp7.jpg" alt="HELLA"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp8.png" alt="Kalkitech"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp9.png" alt="motoram"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp10.png" alt="Scolarian Racing"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp11.jpeg" alt="RS Group"/>
	<img class="max-w-[25vw] max-h-[25vh]" src="{base}/img/sp12.jpeg" alt="NITCAA"/>
	</div>
	<div class="fixed bottom-0 w-full h-[20vh] text-center bg-secondary-50 hidden">hello</div>
</main>
<Footer />

<style>
    :global(body) {
        background-color: black !important;
    }
</style>

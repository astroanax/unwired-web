<svelte:options immutable={true} />

<script>
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  import { base } from '$app/paths';
  import { sponsorsDescriptions } from '$lib/sponsorsDesc.js';

	let sponsorDesc;
	let sponsorDescContainer;

  function showSponsorDesc(index) {
		index-=1;
		sponsorDesc.innerHTML = sponsorsDescriptions[index];
		console.log(sponsorsDescriptions[index]);
		sponsorDescContainer.style.display = 'flex';
  }

	function hideDesc(){
		sponsorDescContainer.style.display = 'none';
	}
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
    <span class="font-light"
      >Heartfelt thanks to all our sponsors who trusted and stood by us, helping us reach our dreams</span
    >
  </p>

  <div
    class="mb-[5vh] ml-[5vw] mr-[5vw] mt-[5vh] grid grid-cols-2 items-center justify-items-center gap-[5vh] md:grid-cols-3"
  >
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
      on:click={() => showSponsorDesc(1)}
      src="{base}/img/sp1.jpg"
      alt="Kennametal"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(2)}
      src="{base}/img/sp2.png"
      alt="ONGC"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(3)}
      src="{base}/img/sp3.png"
      alt="SOLIDWORKS"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(4)}
      src="{base}/img/sp4.jpg"
      alt="SUVIRE"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(5)}
      src="{base}/img/sp5.png"
      alt="HPL"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(6)}
      src="{base}/img/sp6.png"
      alt="GASOTECH"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(7)}
      src="{base}/img/sp7.jpg"
      alt="HELLA"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(8)}
      src="{base}/img/sp8.png"
      alt="Kalkitech"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(9)}
      src="{base}/img/sp9.png"
      alt="motoram"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(10)}
      src="{base}/img/sp10.png"
      alt="Scolarian Racing"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(11)}
      src="{base}/img/sp11.jpeg"
      alt="RS Group"
    />
    <input
      type="image"
      class="max-h-[25vh] max-w-[25vw]"
			on:click={() => showSponsorDesc(12)}
      src="{base}/img/sp12.jpeg"
      alt="NITCAA"
    />
  </div>
  <div bind:this={sponsorDescContainer} class="hidden flex-col justify-between items-center bottom-0 max-h-[25vh] w-full bg-secondary-50 text-center fixed text-primary-600">
		<div class="flex flex-row-reverse items-end h-[5vh] w-full">
			<button class="bg-black mr-[1vw] w-[5vw] font-extrabold text-tertiary-500" on:click={hideDesc}>hide</button>
		</div>
		<div bind:this={sponsorDesc} class="sponsorDesc w-full max-h-[15vh] flex justify-center items-center   ">hello</div>
	</div>
</main>
<Footer />

<style>
  :global(body) {
    background-color: black !important;
  }
  .sponsorDesc {
      font-family: 'Anek Devanagari', monospace;
  }
</style>

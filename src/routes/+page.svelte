<svelte:options immutable={true} />

<script>
	import '../slidy.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { Slidy } from '@slidy/svelte';
	import { flip } from '@slidy/animation';
	import { getPhotos } from '../lib/photos.js';
	import { blur, slide } from 'svelte/transition';

	let index = 2,
		position = 0;

	const projectDescriptions = [
		[
			'SENNA \n',
			'SUPRA SAE India 2023',
			'Overall AIR 27',
			'Bajaj Dominar 400 engine\r\n' +
			'Suspension: Front - Pull rod, Rear-Push rod\r\n' +
			'Hanging Chassis\r\n' +
			'ASI 4130 Chromoly Chassis\r\n' +
			'7th in design\r\n' +
			'10th in acceleration\r\n'
		],

		[
			'TUW E-KART\n',
			'GKDC GO-KART',
			'Overall AIR 3',
			'5KW, 48V PMSM MOTOR,\r\n' +
			'IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY\r\n' +
			'SKF bearings\r\n' +
			'1st in Brakes\r\n' +
			'2nd in Acceleration\r\n' +
			'2nd in Business Plan\r\n'
		],

		[
			'MINNAL\r\n',
			'SAE SUPRA 2022',
			'Overall AIR 24',
			'Baja Dominar 400 engine\r\n' +
			'ASI 4130 Chromoly\r\n' +
			'Suspension: Front and Rear Pushrod suspension\r\n'
		],

		[
			'ZEUS E-27\r\n',
			'SAE E-BAJA 2020',
			'Overall AIR 24',
			'4.5 kW BLDC motor\r\n' +
			'Battery 110 AH\r\n' +
			'AISI 4130 chromoly chassis\r\n' +
			'9th in cost\r\n' +
			'7th in design\r\n' +
			'10th in acceleration\r\n'
		],

		[
			'UNLEASHED 5.0\r\n',
			'SUPRA SAE India 2019',
			'Overall AIR 24',
			'KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM,\r\n' +
			'Torsen T-1 Limited Slip Differential\r\n' +
			'AISI 4130 chromoly chassis\r\n' +
			'9th in cost\r\n' +
			'7th in design\r\n' +
			'10th in acceleration\r\n'
		],

		[
			'TEQUIP GASOTECH UNLEASHED 5.0\r\n',
			'SUPRA SAE INDIA 2017',
			'25th OUT OF 60',
			'KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM,\r\n' +
			'Torsen T-1 Limited Slip Differential\r\n' +
			'AISI 4130 chromoly chassis\r\n' +
			'Double wishbone, rear rocker arm suspension\r\n' +
			'3D Printed air intake unit and remapped ECU\r\n'
		],
		[
			"TEQUIP GASOTECH UNWIND 5.0",
			"BAJA SAE INDIA 2017", "22nd OUT OF 150 TEAMS",
			"10HP Briggs & Stratton OHV engine\r\n" +
			"Chromoly AISI 4130\r\n" +
			"Front A arm, rear multi-link Suspension\r\n" +
			"Open differential\r\n" +
			"Custom made transmission\r\n" +
			"12th IN ENDURANCE\r\n"
		],
		[
			"GASOTECH UNWIND 3.0",
			"BAJA SAE INDIA 2017", "22nd OUT OF 150 TEAMS",
			"10HP Briggs & Stratton OHV engine\r\n" +
			"Chromoly AISI 4130\r\n" +
			"Double Wishbone Suspension\r\n" +
			"Open differential\r\n" +
			"Mahindra GIO transmission\r\n"
		]
	];
</script>

<svelte:head>
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
	<title>Team Unwired - Projects</title>
</svelte:head>

<Header />
<div class="h-1 w-full bg-primary-600"></div>
<h1 class="mb-5 mt-5 w-full bg-secondary-50 text-center text-3xl font-extrabold text-primary-600 passion">
	Projects of Passion
</h1>
<main class="text-primary-200">
	<div class="text-center">
		<p class="text-xl text-tertiary-500">
			<span class="dedication font-bold">WITH HOURS OF HARDWORK AND DEDICATION<br /></span>
			<span class="font-light">we've created automotive engineering marvels over and over</span>
		</p>
	</div>
	<div class="slidy-container mt-3">
		{#await getPhotos() then slides}
			<Slidy
				{slides}
				bind:index
				bind:position
				snap="center"
				animation={flip}
				thumbnail
				--slidy-thumbnail-size="5em"
			/>
		{/await}
	</div>
	{#key index}
		<h1 transition:slide class="bg-secondary-50 text-center text-5xl text-primary-600">
			<span class="project-name w-full">{projectDescriptions[index][0]}</span>
		</h1>
	{/key}
	<div class="project-desc">
		{#key index}
			<span transition:blur class="acheivements">
				<span class="mr-1 text-2xl font-bold text-tertiary-500"
				>{projectDescriptions[index][1]}</span
				>
				<span class="rank">{projectDescriptions[index][2]}</span>
			</span>
		{/key}
		<h4 class="font-bold text-primary-300">Specifications</h4>
		<div class="specs">
			{#each projectDescriptions[index][3].split('\r\n') as line}
				<p>{line}</p>
			{/each}
		</div>
	</div>
</main>
<div class="h-1 w-full bg-primary-600"></div>
<Footer />

<style>
    :global(body) {
        background-color: rgba(var(--color-secondary-50) / 1) !important;
    }

    main {
        margin-bottom: auto;
        flex-grow: 1;
        width: 100%;
        background-color: rgba(var(--color-secondary-700) / 1) !important;
    }

    .passion {
        font-family: "Anek Devanagari", monospace;
    }

    .slidy-container {
        height: 25em;
        max-height: 25em;
        overflow: hidden;
    }

    .project-desc {
        text-align: center;
        max-width: 95%;
        width: 95%;
        margin-left: 2.5%;
        display: flex;
        flex-direction: column;
        justify-items: center;
        height: 100%;
    }

    .project-desc > h4 {
        line-height: 150%;
        font-size: 2em;
        font-family: 'Anek Devanagari', monospace;
    }

    .project-name {
        font-family: 'New Amsterdam', sans-serif;
        line-height: 200%;
    }

    .acheivements {
        color: #a85a5a;
        line-height: 500%;
    }

    .specs {
        font-family: 'Anek Devanagari', monospace;
        font-size: 1.25em;
        margin-bottom: 5%;
    }

    .rank {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 1.5em;
    }

    .dedication {
        font-family: 'Anek Devanagari', monospace;
    }
</style>

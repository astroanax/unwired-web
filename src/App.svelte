<svelte:options immutable={true}/>

<script>

import Header from './lib/header.svelte';
	import Footer from './lib/footer.svelte';
	import {Slidy} from '@slidy/svelte'
	import {flip} from "@slidy/animation";
	import {getPhotos} from './lib/photos.js'
	import {blur, slide} from 'svelte/transition';

	let index = 4, position = 0;

	const projectDescriptions = [
		["SENNA \n",
			"SUPRA SAE India 2023", "Overall AIR 27",
			"Bajaj Dominar 400 engine\r\n" +
			"Suspension: Front - Pull rod, Rear-Push rod\r\n" +
			"Hanging Chassis\r\n" +
			"ASI 4130 Chromoly Chassis\r\n" +
			"7th in design\r\n" +
			"10th in acceleration\r\n",
		],

		["TUW E-KART\n",
			"GKDC GO-KART", "Overall AIR 3",
			"5KW, 48V PMSM MOTOR,\r\n" +
			"IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY\r\n" +
			"SKF bearings\r\n" +
			"1st in Brakes\r\n" +
			"2nd in Acceleration\r\n" +
			"2nd in Business Plan\r\n",
		],

		["MINNAL\r\n",
			"SAE SUPRA 2022", "Overall AIR 24",
			"Baja Dominar 400 engine\r\n" +
			"ASI 4130 Chromoly\r\n" +
			"Suspension: Front and Rear Pushrod suspension\r\n"
		],

		["ZEUS E-27\r\n",
			"SAE E-BAJA 2020", "Overall AIR 24",
			"4.5 kW BLDC motor\r\n" +
			"Battery 110 AH\r\n" +
			"AISI 4130 chromoly chassis\r\n" +
			"9th in cost\r\n" +
			"7th in design\r\n" +
			"10th in acceleration\r\n",
		],

		["UNLEASHED 5.0\r\n",
			"SUPRA SAE India 2019", "Overall AIR 24",
			"KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM,\r\n" +
			"Torsen T-1 Limited Slip Differential\r\n" +
			"AISI 4130 chromoly chassis\r\n" +
			"9th in cost\r\n" +
			"7th in design\r\n" +
			"10th in acceleration\r\n",
		],

		["TEQUIP GASOTECH UNLEASHED 5.0\r\n",
			"SUPRA SAE INDIA 2017", "25th OUT OF 60",
			"KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM,\r\n" +
			"Torsen T-1 Limited Slip Differential\r\n" +
			"AISI 4130 chromoly chassis\r\n" +
			"Double wishbone, rear rocker arm suspension\r\n" +
			"3D Printed air intake unit and remapped ECU\r\n"
		]
	]
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@100..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
		  rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=New+Amsterdam&display=swap" rel="stylesheet">
	<title>
		Team Unwired - Projects
	</title>
</svelte:head>

<Header />
<main>
	<h2> Team Unwired's Project over the years</h2>
	{#await getPhotos() then slides}
		<Slidy
				{slides}
				bind:index
				bind:position
				snap="center"
				animation={flip}
				thumbnail
		/>
	{/await}
	<div class="project-desc">
		{#key index}
			<h3 transition:slide><span class="project-name">{projectDescriptions[index][0]}</span></h3>
		{/key}
		{#key index}
		<span transition:blur class="acheivements">
			{projectDescriptions[index][1]}
			<span class="rank">{projectDescriptions[index][2]}</span>
		</span>
		{/key}
		<h4>Specifications</h4>
		<div class="specs">{projectDescriptions[index][3]}</div>
	</div>
</main>
<Footer/>

<style>
	@import url('https://unpkg.com/@slidy/svelte/dist/slidy.css');
	h2{
		text-align: center;
	}
	main{
		margin-bottom: auto;
		flex-grow: 1;
		width: 100%;
	}

	.project-desc {
		text-align: center;
	}

	.project-desc > h3 {
		font-size: 3em;
	}

	.project-desc > h4 {
		line-height: 150%;
		font-size: 1.75em;
		font-family: 'Anek Devanagari', monospace;
	}

	.project-name {
		font-family: "New Amsterdam", sans-serif;
		line-height: 200%;
	}

	.acheivements {
		color: #a85a5a;
		line-height: 500%;
	}

	.specs {
		font-family: 'Anek Devanagari', monospace;
		font-size: 1.25em;
		white-space: pre;
	}

	.rank {
		font-family: "Bebas Neue", sans-serif;
		font-size: 1.5em;
	}
</style>
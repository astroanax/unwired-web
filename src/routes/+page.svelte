<script>
</script>

<svelte:head>
	<title>
		Team Unwired - Projects
	</title>
</svelte:head>

<div class="container">

	<header class="bg-primary-500">
		<img src="/img/tuw-logo.png" alt="Team Unwired Logo" class="ml-3 w-30">
		<img src="/img/burger.svg" alt="Menu" id="menu" class="mr-3 w-10 filter-white">
	</header>

	<main class="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
	</main>

	<footer class="bg-primary-500">
		<span class="font-bold">For Enquiries Contact<br/></span>
		<div class="enquiries">
			Dr. V Sajith, Associate Professor(MED) & Faculty Advisor<br/>
			Team Unwired, NIT Calicut<br/>
			+91 9446361125, sajith@nitc.ac.in
		</div>
		<br/><span class="font-bold">For More Information<br/></span>
		<div class="info">
			Dr. Shijo Thomas, Associate Professor(MED) & Faculty Advisor<br/>
			Team Unwired, NIT Calicut<br/>
			+91 9446276409, shijo@nitc.ac.in
		</div>
		<br/><span class="font-bold">Contact Address<br/></span>
		<div class="address">
			Team Unwired<br/>
			C/o Dr.V Sajith / Dr.Shijo Thomas<br/>
			Department of Materials Science and Engineering<br/>
			National Institute of Technology, Calicut<br/>
			Kattangal, Kerala, India<br/>
		</div>
	</footer>
</div>

<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
		.container{
				font-family: "Roboto Flex", sans-serif;
		}
	footer{
			margin-bottom: 0;
			color: white;
	}
	footer > div {
			margin-left: 1.5em;
	}
	.font-bold{
			margin-left: 1em;
	}
  .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
	header {
		display: flex;
  }
	#menu{
			margin-left: auto;
	}
	.enquiries, .info, .address {
			max-width: 80%;
	}
	.filter-white{
      filter: invert(97%) sepia(28%) saturate(12%) hue-rotate(260deg) brightness(104%) contrast(103%);
	}
</style>
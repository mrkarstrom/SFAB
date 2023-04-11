<script>
	import Footer from '$lib/components/Footer.svelte';
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
</script>

<TopbarPlain />
<section
	id="wrapper"
	class="container flex flex-col items-center justify-center min-h-[calc(90vh-10px)] px-8"
>
	<div id="title" class="w-full flex flex-col py-20 items-center justify-center">
		<h1 id="main-header" class="text-xl whitespace-normal text-center">
			MANGOPAY FRAMEWORK CONTRACT FOR ISSUING, MANAGING, MAKING ELECTRONIC MONEY AVAILABLE
		</h1>
		<h3 class="py-1 text-lg">General Conditions of Use of Electronic Money</h3>
		<h5 class="italic">(version for France)</h5>
		<h5 class="text-right italic py-4">Version of 27/11/2020</h5>
	</div>

	<section id="main" class="w-full">
		<h5 class="text-left my-2">Entered into between:</h5>
		<h6>
			The client of the Site, a legal or physical person registered in the Business and Companies
			Registry (or a national business registry or any other equivalent professional organisation)
			in a Member State of the European Union or in a State that is part of the European Economic
			Area, or in a third-party country imposing equivalent obligations in terms of the fight
			against money laundering and the financing of terrorism, acting exclusively on their own
			behalf for professional purposes (commercial, industrial, artisanal or independent),
		</h6>
		<h6 class="py-3 text-right">
			hereinafter, referred to as the <strong>“User”</strong> or
			<strong>“Professional User”</strong>, or
		</h6>
		<h6>
			The client of the Site, a legal or physical person resigning in a Member State of the European
			Union or in a State that is part of the European Economic Area, or in a third-party country
			imposing equivalent obligations in terms of the fight against money laundering and the
			financing of terrorism, acting exclusively on their own behalf for non-professional purposes,
		</h6>
		<h6 class="py-3 text-right">
			hereinafter, referred to as the <strong>“User”</strong> or <strong>“Consumer User”</strong>,
			party of the first part, and
		</h6>
		<h6>
			<strong>MANGOPAY SA</strong>, a limited liability company under Luxembourg law, having its
			registered office at 2, Avenue Amélie, L-1125 Luxembourg and registered with the Luxembourg
			Commerce and Companies Registry under number B173459 (the amount of the share capital can be
			consulted here :
			<a class="underline" href="https://www.mangopay.com/legal-notice/"
				>https://www.mangopay.com/legal-notice/</a
			>), authorised to carry out business within the European Economic Area, as an electronic money
			institution approved by the Commission de Surveillance du Secteur Financier, 283 route d’Arlon
			L-1150 Luxembourg, <a href="http://www.cssf.lu">www.cssf.lu</a>,
		</h6>
		<h6 class="py-3 text-right">
			hereinafter, referred to as the <strong>“Issuer”</strong>, party of the second part,
			hereinafter, referred to separately as a <strong>“Party”</strong> and together as the
			<strong>“Parties”</strong>.
		</h6>
	</section>

	<section id="note" class="border border-black bg-cyan-400 p-2">
		<h6 class="underline pb-4">Note</h6>
		<h6>
			The User is asked to carefully read this Framework Contract provided to them by the
			Distributor before 2 accepting it. They are asked to download a Hard Copy of it, according to
			the procedure offered by the Distributor. By default, communication with the Issuer is always
			carried out via the Distributor, according to the terms established in the General Conditions
			of the Site, except when a distinct communication method is established in the Contract.
		</h6>
	</section>
</section>
<Footer />

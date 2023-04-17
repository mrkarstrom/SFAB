<script>
	import Footer from '$lib/components/Footer.svelte';
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
</script>

<TopbarPlain />
<section
	id="document-wrapper"
	class="container flex flex-col items-center justify-center min-h-[calc(90vh-10px)] px-8"
>
	<div id="header" class="w-full flex flex-col py-20 items-center justify-center">
		<h1 id="main-header" class="text-xl whitespace-normal text-center">
			MANGOPAY FRAMEWORK CONTRACT FOR ISSUING, MANAGING, MAKING ELECTRONIC MONEY AVAILABLE
		</h1>
		<h3 class="py-1 text-lg">General Conditions of Use of Electronic Money</h3>
		<h5 class="italic">(version for France)</h5>
		<h6 class="w-full text-right italic py-4">Version of 27/11/2020</h6>
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
		<h6 class="py-3 text-center">
			hereinafter, referred to as the <strong>“User”</strong> or
			<strong>“Professional User”</strong>, or
		</h6>
		<h6>
			The client of the Site, a legal or physical person resigning in a Member State of the European
			Union or in a State that is part of the European Economic Area, or in a third-party country
			imposing equivalent obligations in terms of the fight against money laundering and the
			financing of terrorism, acting exclusively on their own behalf for non-professional purposes,
		</h6>
		<h6 class="py-3 text-center">
			hereinafter, referred to as the <strong>“User”</strong> or <strong>“Consumer User”</strong>,
			party of the first part, and
		</h6>
		<h6>
			<strong>MANGOPAY SA</strong>, a limited liability company under Luxembourg law, having its
			registered office at 2, Avenue Amélie, L-1125 Luxembourg and registered with the Luxembourg
			Commerce and Companies Registry under number B173459 (the amount of the share capital can be
			consulted here :
			<a class="underline text-blue-600" href="https://www.mangopay.com/legal-notice/"
				>https://www.mangopay.com/legal-notice/</a
			>), authorised to carry out business within the European Economic Area, as an electronic money
			institution approved by the Commission de Surveillance du Secteur Financier, 283 route d’Arlon
			L-1150 Luxembourg, <a href="http://www.cssf.lu">www.cssf.lu</a>,
		</h6>
		<h6 class="py-3 text-center">
			hereinafter, referred to as the <strong>“Issuer”</strong>, party of the second part,
			hereinafter, referred to separately as a <strong>“Party”</strong> and together as the
			<strong>“Parties”</strong>.
		</h6>
	</section>

	<section id="note" class="border border-black bg-blue-100 p-2">
		<h6 class="underline pb-4">Note</h6>
		<h6>
			The User is asked to carefully read this Framework Contract provided to them by the
			Distributor before 2 accepting it. They are asked to download a Hard Copy of it, according to
			the procedure offered by the Distributor. By default, communication with the Issuer is always
			carried out via the Distributor, according to the terms established in the General Conditions
			of the Site, except when a distinct communication method is established in the Contract.
		</h6>
	</section>
	<section id="definitions" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">1. Definitions</h5>
		<h6>For the purposes hereof, the terms hereinbelow are defined as follows:</h6>
		<h6>
			<br /><strong>“Authentication”</strong>: indicates the procedures defined by the Distributor
			in order to identify the User or the validity of a Payment Order. These procedures include
			using the Personalised Security Data and the Identification Data.
			<br /><strong>“Strong Authentication”</strong>: indicates the Authentication procedures
			defined by the Distributor and that respond to the requirements of European Directive
			2015/2366 of 25 November 2015. This Strong Authentication specifically includes elements that
			allow for establishing a dynamic link between the Operation, the amount and the Beneficiary.
			<br /><strong>“Banks”</strong>: indicate credit institutions in charge of holding funds
			collected by the Issuer on behalf of the corresponding to the Electronic Money in circulation.
			The institutions today are Crédit Mutuel Arkéa and ING Luxembourg. The Issuer has the
			possibility of selecting any other authorised credit institution in a Member State of the
			European Union or a party under the European Economic Area agreement.
			<br /><strong>“Beneficiary”</strong>: indicates the legal or physical person acing on their
			behalf, designated by the User from among the clients of the Site, for the benefit of which
			Electronic Money is transferred in the framework of a Payment Operation. Any Beneficiary may
			become a User under the meanings hereof upon acceptance of the Framework Contract, subject to
			the Issuer's acceptance. In certain cases, the Beneficiary may become a Distributor pursuant
			to Specific Conditions.
			<br /><strong>“Card”</strong>: indicates the debit card, payment card or credit card used by
			the User to transfer the funds to the Issuer in return for the issuance of Electronic money.
			This card must be within one of the following networks: Visa, MasterCard, CB, AmEx.
			<br /><strong>“Account”</strong>: indicates an internal reference allowing the Issuer to
			identify in its books the different operations of acquiring, using and reimbursing Electronic
			Money carried out in the name of this User and to determine, at any time, the amount in euros
			of the Electronic Money available held by this latter. The Account may in no way be associated
			with a deposit account, a current account or a payment account.
			<br /><strong>“General Conditions of the Site”</strong>: indicates the general conditions of
			use of the Site entered into between the User acting in the capacity of client of the Site and
			the Distributor, specifically governing access to the Site.
			<br /><strong>“Framework Contract”</strong>: indicates these General Conditions of Use of the
			Electronic Money, including the Registration Form and the Price Conditions, governing the use
			of the Services as well as managing the Account by the Issuer.
			<br /><strong>“Price Conditions”</strong>: indicates the financial terms agreed to between the
			User and the Distributor, including the fees under this Framework Contract. This document
			includes all the fees paid for acquiring, using and managing the Electronic Money as
			established in the General Conditions of the Site.
			<br /><strong>“Distributor”</strong>: indicates the entity, duly authorised by the Issuer, who
			uses the site, whose contact information is indicated in the General Conditions of the Site.
			The Distributor prepares, facilitates and advises clients, for the purposes of the Framework
			Contract through the use of its Site. It accompanies clients during their entire relationship
			with the Issuer in the framework of carrying out their Payment and Reimbursement Operations.
			For this purpose, the Distributor makes customer service available to all clients dedicated to
			Payment Operations carried out an application hereof. The Distributor does not collect funds
			with the exception of the fees agreed to in the Price Conditions.
			<br /><strong>“Personalised Security Data”</strong>: indicates the personal data provided by
			the Distributor to the User for the purposes of Authentication. It includes the Identification
			Data, as well as potentially any other data related to the Authentication procedure or Strong
			Authentication.
			<br /><strong>“Identification Data”</strong>: indicates the unique identifier and the password
			of the User, that allows them to access their Personal Online Area.
			<br /><strong>“Personal Data”</strong>: indicates any information related to the physical
			person who is the User, or a physical person related to the legal person who is the User
			(specifically a corporate executive, a beneficial owner, or an Authorised Person), under the
			meaning in European Regulation 2016/679 related to protecting personal data.
			<br /><strong>“Issuer”</strong>: indicates MANGOPAY SA, issuer of Electronic Money, authorised
			in Luxembourg by the Commission de Surveillance du Secteur Financier under reference number
			3812 and authorised to carry out its activity in all Member States of the European Union. The
			Issuer appears on the list of electronic money institutions available at
			<a
				class="underline text-blue-600"
				href="http://supervisedentities.cssf.lu/index.html?language=fr#Home"
				>http://supervisedentities.cssf.lu/index.html?language=fr#Home</a
			>
			<br /><strong>“Personal Online Area”</strong>: indicates the environment dedicated to the
			User, accessible on the Distributor’s Site, allowing them to use the Services
			<br /><strong>“Registration Form”</strong>: indicates the form to be filled out by anyone
			wishing to register for Services, accessible on the Site at registration or made available by
			the Distributor.
			<br /><strong>“Identifier”</strong>: indicates the data necessary to identify the User by the
			Issuer for carrying out a Payment Operation including a user login (valid email address)
			<br /><strong>“Business Day”</strong>: indicates a calendar day with the exception of
			Saturdays, Sundays, and public holidays in mainland France and Luxembourg and any other day
			designated as such by the Issuer.
			<br /><strong>“Electronic Money”</strong>: indicates the monetary value available representing
			an amount due the User from the Issuer. Electronic Money is issued by the Issuer in exchange
			for the User providing corresponding funds in euros (€) and constituting a Payment Method
			accepted exclusively by the Beneficiaries. The Issuer keeps it in electronic form on their
			server by registering it in the Account open for this purpose.
			<br /><strong>“Payment Method”</strong>: indicates the payment methods other than the Card,
			listed on the Site, the option of which is offered by the Issuer that allows the User to
			provide them the funds in exchange for the issuance of Electronic Money.
			<br /><strong>“Payment Operation”</strong>: indicates the transfer of Electronic Money to the
			Beneficiary indicated on the Site by a User.
			<br /><strong>“Order”</strong>: indicates the instructions given by the User to the Issuer in
			compliance with the procedure established in the Framework Contract to carry out a Payment
			Operation and/or a Reimbursement.
			<br /><strong>“Payment Page”</strong>: indicates the page secured by Payline, the monetary
			provider of the Issuer. Only this address is to be considered valid by the User. The User is
			asked to systematically verify the address at the top of the page.
			<br /><strong>“Person in Question”</strong>: indicates the physical person who is the User or
			any person related to the User (specifically a corporate executive or a beneficial owner),
			whose Personal Data is processed in the framework of the performance of this Framework
			Contract.
			<br /><strong>“Reimbursement”</strong>: indicates the transfer by the Issuer upon the User’s
			Order, of non-cash funds corresponding to all or part of the Electronic Money available held
			by them less the potential fees due.
			<br /><strong>“Services”</strong>: Indicates the services of issuing, managing and making
			Electronic Money available, provided by the Issuer to the User as described in Article 5
			herein.
			<br /><strong>“Distributor Customer Service”</strong>: indicates the customer service whose
			contact information is indicated on the Site, from which the User may obtain information
			regarding the Framework Contract.
			<br /><strong>“Site”</strong>: indicates the website used by the Distributor whose purpose is
			to sell goods or services to Users or to collect funds from them, or to put Beneficiaries in
			contact with Users. The Site included the API with the Brand's colours to allow the User to
			have a payment method available issued and managed by the Issuer to transfer the funds to the
			indicated Beneficiary.
			<br /><strong>“Hard Copy”</strong>: indicates any instrument allowing the User to store
			information addressed to them personally in order to be able to refer to it later during a
			time period adapted for the purposes for which the information is provided and allowing them
			to identically reproduce the information stored. It is generally offered in the form of a PDF
			file.
			<br /><strong>“User”</strong>: indicates any physical or legal person acting on their behalf
			holding Electronic Money recorded in an Account opened in their name, in order to carry out
			Payment Operations.
		</h6>
	</section>
	<section id="purpose" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">2. Purpose</h5>
		<h6>
			The Framework Contract has the purpose of defining the conditions in which the Issuer provides
			to the User a payment method exclusively accepted by the Beneficiaries in the framework of
			their relationship established via the Site, in return for the fees described in Article 9
			hereof.<br />
			The Payment Method proposed must be systematically prepaid by the User and is not subject to any
			advance, credit or discount. It is based on Electronic Money issued by the Issuer.<br />
			The Issuer authorises the Distributor to propose to clients of the Site this payment method, to
			facilitate entering into this contract and to accompany the Users during their entire relationship
			with the Issuer. Only the Framework Contract is valid between the Parties in the event of a dispute.<br
			/>
		</h6>
	</section>
	<section id="registration-for-the-services" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">3. Registration for the Services</h5>
		<h5 class="pl-6 pb-2 font-bold">3.1 Registration Methods</h5>
		<h6>
			The Framework Contract is entered into remotely, according to the terms established by the
			Distributor under the General Conditions of the Site. To enter into the Framework Contract
			Online, the client must have the necessary equipment (materials and software), for which they
			alone are responsible, compatible with this method of entering into a contract. <br />
			By default, acceptance of the Framework Contract is carried out remotely via the Site and is entered
			into by electronic signature. The client has the possibility of requesting to sign the Contract
			by hand. For this purpose, they must print this Contract, sign it, and return it by electronic
			or postal mail to the Distributor Customer Service, the contact information of which is indicated
			in the General Conditions of the Site. <br />
			In the event of a handwritten signature, the date of entering into the Framework Contract is the
			date indicated on it and if there is no date, it will be the date that the Framework Contract is
			received by the Distributor. <br />
			Electronic signing of the Framework Contract is carried out via the Site. The date of entering
			into the Framework Contract corresponds to the date on which the client has finalised the e-signing
			process as indicated on the Site. <br />
			The Framework Contract entered into with the Parties electronically has the same legal status as
			a Framework Contract on paper.
		</h6>
	</section>
	<section id="contractual-documents" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">3.2 Contractual Documents</h5>
		<h6>
			The Framework Contract includes:<br />
			<ul class="list-disc ml-10 pb-2">
				<li class="pl-4">the General Conditions of Use of Electronic Money</li>
				<li class="pl-4">the Registration Form available on the Site</li>
				<li class="pl-4">the Price Conditions indicated by the Distributor</li>
			</ul>
			These General Conditions of Use of Electronic Money, as well as the Price Conditions, are made
			available to the User on the Site and downloadable as a Hard Copy according to the methods indicated
			on the Site. At any time during the contractual relationship, the User may, upon request, receive
			these documents in paper format.<br />
			The Issuer will maintain access to the contractual documents for a term of five (5) years from
			the end of the contractual relationship. The Issuer will end this service at the end of the above-mentioned
			five- (5) year period.
		</h6>
	</section>
	<section id="opening-an-account" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">4. Opening an Account</h5>
		<h5 class="pl-6 pb-2 font-bold">4.1 Necessary and Prior Conditions for User Registration</h5>
		<h6>
			Any legally capable physical person at least eighteen (18) years of age and any legal person,
			residing and/or registered in a Member States of the European Union or in a State that is part
			of the European Economic Area agreement or in a third-party country imposing equivalent
			obligations in terms of the fight against money laundering and the financing of terrorism, may
			send a request to open an Account subject to the physical person being referenced on the Site
			in the capacity of consumer or in the capacity of professional. A legal person may only be
			referenced as a professional.<br />
			The User acknowledges from the time of issuing their registration request to the Distributor and
			during the entire term of the Framework Contract:<br />
			<ul id="framework-contract" class="list-disc ml-10 pb-2">
				<li class="pl-4">that they are at least 18 (eighteen) years of age and legally capable</li>
				<li class="pl-4">that they are acting on their own behalf</li>
				<li class="pl-4">
					that all the information provided upon their registration are true, exact and up-to-date
				</li>
			</ul>
		</h6>
	</section>
	<section id="registration-procedure" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">4.2 Registration Procedure and Opening an Account</h5>
		<h5 class="pl-6 pb-2 font-normal">4.2.1 Information and Proof</h5>
		<h6>
			Any interested party must provide to the Distributor the information and documents listed
			hereinbelow, for the Registration Form, in the event that this information and these documents
			are not already in possession of the Distributor. <br />The interested party undertakes to
			provide the information and documents corresponding to their status either as a professional
			or as a consumer. For the User, who is a physical person and consumer: <br />
			<ul id="proof-for-user" class="list-[circle] ml-20">
				<li class="pl-4">
					their last name, first name, email address, date and place of birth, nationality and
					country of residence;
				</li>
				<li class="pl-4">
					a copy of the User's valid official identity document (e.g., identity card, driver’s
					license, and for citizens of countries outside of the European Union, a passport).
				</li>
			</ul>
			<br />
			For the Professional User:
			<ul id="proof-for-user" class="list-[circle] ml-10 pt-2">
				<li class="list-['-'] pl-4">for physical persons:</li>
				<li class="ml-10 pl-4">
					their last name, first name, email address, date of birth, nationality and country of
					residence.
				</li>
				<li class="ml-10 pl-4">
					an original or a copy of the official registration extract dated within three months that
					indicates registration as a retailer or in the national business registry or any other
					professional organisation that the User is a member of.
				</li>
				<li class="ml-10 pl-4">
					a copy of the User's valid official identity document (e.g., identity card, driver’s
					license, and for citizens of countries outside of the European Union, a passport).
				</li>
				<li class="list-['-'] pl-4 pt-2">for legal persons:</li>
				<li class="ml-10 pl-4">
					their business name, business form, capital, address of the registered office, description
					of the activity, the identity of the business associates and officers, as well as the list
					of the beneficial owners such as defined by regulation;
				</li>
				<li class="ml-10 pl-4">
					a Kbis extract or equivalent document dated within three months proving their registration
					at the Business and Companies Registry of a Member States of the European Union or a State
					that is part of the European Economic Area agreement or a third-party country imposing
					equivalent obligations in terms of the fight against money laundering and the financing of
					terrorism and their bylaws. This document must include the business name, legal form,
					address of the registered office and the identity of the business associates and officers
					mentioned in Sections 1° and 2° of Article R.123-54 of the Code of Commerce or their
					equivalent in foreign law;
				</li>
				<li class="ml-10 pl-4">
					a copy of the bylaws and potential decisions specifically certified true legal copy from
					the legal representative; o a copy of the identity card or passport of the legal
					representative and, as the case may be, the beneficial owner(s);
				</li>
				<li class="ml-10 pl-4 pb-2">
					The statement from the beneficial owners of the legal person holding more than 25% of
					rights in the event that the interested party has not declared their beneficial owners in
					the national registry, or if it is not subject to this obligation.
				</li>
				The User may also be requested to provide the bank details from an open account in the name of
				the person mentioned in Sections 1° to 6° bis of Article L.561-2 of the Monetary and Financial
				Code in a Member State of the European Union or a State that is part of the European Economic
				Area agreement or a third-party country imposing equivalent obligations in terms of the fight
				against money laundering and the financing of terrorism<br /> It is expressly established that
				the Issuer maintains the possibility of requesting before opening an account and at any time
				during the term of the Framework Contract, additional documents related to the User, the beneficial
				owners, or a specific Payment Operation.
			</ul>
		</h6>
		<h5 class="pl-6 py-2 font-normal">4.2.2 Restriction of the Account</h5>
		<h6>
			By the Issuer’s free assessment, use of an Account may be restricted without the Issuer having
			to justify their decision to the User in question. The functioning of the Account will
			specifically be restricted when the User has not provided all of the information and documents
			required by the Issuer, such as listed hereinabove. These restrictions are indicated to the
			User by the Distributor.
		</h6>
		<h5 class="pl-6 py-2 font-normal">4.2.3 Finalisation of Registration</h5>
		<h6>
			After entering into the Framework Contract, the User must provide all of the information and
			proof that are requested by the Distributor. By giving their consent to the terms of the
			Framework Contract, the User accepts that the Distributor will transfer to the Issuer their
			request for registration as a User and all the proof documents received by it.<br />
			The Issuer alone has the power to accept the registration of an interested party as a User for
			an Account in their name. This acceptance will be indicated to the User by the Distributor by any
			means under the terms established on the Site. <br />
			The Issuer, without motivation, or right to an indemnity in favour of the User, may refuse a request
			to open an Account. This refusal will be indicated to the User by the Distributor by any means
			under the terms established on the Site.
		</h6>
	</section>
	<section id="functioning-of-the-account" class="w-full flex flex-col">
		<h5 class="pl-6 py-2 font-bold">5. Functioning of the Account</h5>
		<h5 class="pl-6 pb-2 font-bold">5.1 Purchasing Electronic Money</h5>
		<h6>
			Acquiring Electronic Money may be done, by Card (or any other Payment Method accepted by the
			Issuer), once or several times.<br />
			When such an operation is requested, the User will be identified on the Site by indicating their
			username (valid email address) and their password or via their Facebook account. <br />
			The funds transfer request will be indicated on the Payment Page dedicated for this purpose. The
			Issuer may request using a one-time code sent to the User’s mobile telephone by the institution
			that issued the Card. If this is the case, it is the Issuer’s right to refuse any payment following
			their free assessment without this decision giving rise to any indemnification. The funds transfer
			operation is carried out by the institution that issued the Card. Any dispute for such a transfer
			must be indicated to this institution. The Issuer is not authorised to cancel such a transfer.
			Notwithstanding the foregoing, the User may obtain Reimbursement for the Electronic Money Pursuant
			to Article 5.4.<br />
			Electronic Money arriving in the User’s name may be based on the effective receipt of the funds
			collected less the fees agreed to under the Price Conditions. <br />
			In the event that the transfer of funds is cancelled by the Card issuer following it being contested,
			no matter the reason stated, the Issuer upon receiving information may suspend or cancel any Payment
			Operation, close the Account in question, debit at any time the Account of the amount of Electronic
			Money corresponding to the funds of the cancelled transfer and proceed to recovery of the amounts
			due by the User by any means. <br />

			<h5 class="pl-6 py-2 font-bold">5.2. Functioning of the Account</h5>
			Electronic Money is stored for an indeterminate term in the User’s Account by the Issuer under
			the agreed-to Price Conditions.<br />
			The Account is credited by acquiring Electronic Money in exchange for funds ordered by the User
			directly from the Issuer via their Card (or any other Payment Method accepted by the Issuer) less
			the corresponding fees is established in the Price Conditions. This Account is debited on the Order
			of the Electronic Money User in the amount of the Payment or Reimbursement Operation carried out
			including the related fees as established in the Price Conditions. The Issuer is authorised at
			any time to debit this Account in the amount of the Electronic Money corresponding to the fees
			due and payable established in the Price Conditions.<br />
			The amount of Electronic Money available in the Account is immediately adjusted based on:
			<ul id="the-amount-of-electronic-money" class="list-['-'] ml-10 pt-2">
				<li class="pl-4">
					the fees due and payable, by the Account User, the payment of which is carried out in
					Electronic Money;
				</li>
				<li class="pl-4">
					the Orders transmitted (or being transmitted) to the Issuer regarding Electronic Money
					stored in the Account;
				</li>
				<li class="pl-4">
					funds received by the Issuer in payment for acquiring Electronic Money in the Account;
				</li>
				<li class="pl-4">
					and any cancellation regarding any of the above-mentioned operations in application
					hereof.
				</li>
			</ul>
		</h6>
	</section>
</section>
<Footer />

<style>
	br {
		content: '';
		margin: 1em;
		display: block;
		font-size: 44%;
	}
</style>

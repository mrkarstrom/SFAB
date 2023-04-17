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
		<h5 class="pl-6 py-2 font-bold">
			5.3. Use of Electronic Money to Carry Out a Payment Operation
		</h5>
		<h6>
			Before issuing an Order, the User must ensure that they have a sufficient amount of Electronic
			Money available to cover the amount of the Payment Operation and the related fees as
			established in the Price Conditions. <br />
			If necessary, they must acquire sufficient Electronic Money in compliance with Article 5.1 before
			the Order may be validly transferred to the Issuer to carry it out. Electronic Money may only be
			held by the User subject to the effective issuance of corresponding funds. Electronic Money in
			no way may be issued for credit. Additionally, when the amount of Electronic Money available on
			the date the Order is carried out by the Issuer is below the amount of the Payment Operation (including
			fees), the Order will automatically be refused by the Issuer. The information about this refusal
			will be made available to the User on the Site. This Refusal may give rise to additional fees according
			to the Price Conditions.<br />
			The methods for transmitting an Order by the User are the following:<br />
			When the User wishes to carry out a Payment Operation, they will indicate their identification
			in their Personal Online Area by indicating their Identification Data and, if need be, by following
			a Strong Authentication procedure if indicated to them. They will fill out the proper form on the
			Payment Page and, if need be, indicate the proof documents requested by the Issuer. The form must
			indicate the following elements: the amount in euros (€) of the Payment Operation, the elements
			allowing for identification of the Beneficiary, the date the Order is executed and any other required
			information. <br />
			The User irrevocably consents to the Payment Order by clicking on the “validation” button (“Date
			of Receipt”). The receipt of the Payment Order is confirmed in the User’s Personal Online Area
			or by email. No Order may be withdrawn by the User after the date upon which it is deemed to irrevocably
			have been received, which is from the Date of Receipt. <br />
			In certain cases, the User may fill out a single form containing an order to transfer funds such
			as established in Article 5.1 and an Order allowing Payment Operations to be carried out in line
			with the preceding paragraph.<br />
			Carrying Out the Order:<br />
			The amount of the Payment Operation will be deducted from the Electronic Money available in the
			Account to be credited in favour of the Beneficiary following the User’s instructions. Additionally,
			the Beneficiary may open an Account pursuant to Article 4.2 to receive the Electronic Money if
			they are not already a User. The funds corresponding to the Electronic Money used, if it be the
			case, may be directly transferred to a bank account or payment account open in the name of the
			Beneficiary upon receiving the information of this account by the Issuer. For this purpose, the
			Beneficiary must provide the IBAN number and the SWIFT code of their bank account or payment account
			as well as the address. This account must be open in a banking or payment institution established
			in a Member State of the European Union or a State that is part of the European Economic Area agreement
			or a third-party country imposing equivalent obligations in terms of the fight against money laundering
			and the financing of terrorism.<br />
			It is expressly agreed that the Orders are executed at the latest at the end of the Business Day
			following the Date of Receipt of the Order by the Issuer (and on the agreed-to execution date for
			standing or timely transfers) if the Beneficiary has an Account. If necessary, the Date of Receipt
			may be delayed until an Account is opened or until the day the Issuer has gathered the information
			of the bank account or payment account of the Beneficiary receiving the funds.<br />
			Any Payment Order received after 4:00 p.m. by the Service Provider will be deemed to have been
			received the following Business Day. If the Date of Receipt is not a Business Day, the Order will
			be deemed to have been received the following Business Day.
		</h6>
		<h5 class="pl-6 py-2 font-bold">5.4. Transmission and Execution of a Reimbursement Order</h5>
		<h6>
			When a Reimbursement Order is requested, the User will be identified on the Site by indicating
			their Identification Data or connecting via their Facebook account. They will fill out the
			proper form on the Payment Page and, if need be, indicate the proof documents requested by the
			Issuer. The User must indicate on the form the following elements: the amount of the
			Reimbursement, the date the Order is to be executed and any other required information.<br />
			The User irrevocably consents to the Payment Order by clicking on the “validation” button (“Date
			of Receipt”). The receipt of the Payment Order is confirmed in the User’s Personal Online Area
			or by email. No Order may be withdrawn by the User after the date upon which it is deemed to irrevocably
			have been received, which is from the Date of Receipt. <br />
			Reimbursement will be carried out by crediting the Card (or Payment Method) that the User used
			to acquire the Electronic Money. If it be the case, it will be carried out by funds transfer to
			the bank account or payment account of the Beneficiary the information of which has been provided
			to the Issuer (“Notification Date”). It is agreed to between the Parties that the Reimbursement
			will be carried out at the latest at the end of the Business Day following the receipt or notification
			depending on the case.<br />
			Any Reimbursement Order received after 4:00 p.m. by the Service Provider will be deemed to have
			been received the following Business Day. If the Date of Receipt is not a Business Day, the Order
			will be deemed to have been received the following Business Day.
		</h6>
		<h5 class="pl-6 py-2 font-bold">5.5. Withdrawing an Order</h5>
		<h6>
			No Order may be withdrawn by the User after the date upon which it is deemed to irrevocably
			have been received as indicated above.
		</h6>
		<h5 class="pl-6 py-2 font-bold">6. Reporting</h5>
		<h6>
			The User, in their Personal Online Area, has a statement of the Operations carried out
			available to them. They are asked to attentively acknowledge the list of these operations. The
			User recognises that only the statement of the Payment Operation validated by the Issuer is
			deemed as recognition by the latter of the Electronic Money available in the Account on the
			day indicated on the statement. The User may, at any time on their personal page accessible on
			the Site, access an indication of the amount of Electronic Money available in the Account. <br
			/>
			It is specified that for each Operation carried out on the Account, the User has the following
			information available to them: the reference number of the Operation, the identification of the
			Beneficiary, the amount of the Operation, the date the Order is received, and if it be the case,
			the fees related to executing this Operation. <br />
			The Issuer will provide the User upon request the monthly statements of the Account for the previous
			thirteen (13) months.
		</h6>
		<h5 class="pl-6 py-2 font-bold">7. Objection Regarding Personalised Security Data</h5>
		<h6>
			The User must inform the Distributor of the loss or theft of their Personalised Security Data,
			of any misuse or unauthorised use of their Personal Online Area or their data as soon as they
			become aware of this and request that it be blocked. This declaration must be carried out:
			<ul id="the-amount-of-electronic-money" class="list-['-'] ml-10 pt-2">
				<li class="pl-4">
					by making a telephone call to the Distributor Customer Service at the number indicated in
					the General Conditions of the Site; or
				</li>
				<li class="pl-4">
					directly by electronic message through the contact form accessible on the Site.
				</li>
			</ul>
			The Issuer, through the Distributor, shall immediately execute the request for blocking the identifier
			in question. The event will be recorded and date/time stamped. An objection number with date/time
			stamp will be provided to the User. Written confirmation of this objection will be sent by the
			Distributor to the User in question by electronic message. The Issuer will take administrative
			responsibility of the file and keep all proof relating to it for 18 (eighteen) months. Upon written
			request of the User and before this time frame expires, the Issuer will provide a copy of this
			objection.<br />
			Any request for objection must be confirmed immediately by the User in question, by a letter signed
			by the latter, provided or sent by registered mail, or email, to the Issuer at the postal address
			indicated hereinabove. The Issuer and the Distributor will not be held responsible for the consequences
			of an objection sent by fax or email that does not come from the User.<br />
			A request for objection is deemed to be made on the date and time of the effective receipt of the
			request by the Distributor. In the event of theft or fraudulent use of the Identifier, the Issuer
			is authorised to request from the Distributor, a statement or copy of the complaint of the User
			and undertakes to respond to it as quickly as possible.
		</h6>
		<h5 class="pl-6 py-2 font-bold">8. Contesting an Operation</h5>
		<h5 class="pl-6 pb-2 font-bold">8.1. Provisions Common to All Users</h5>
		<h6>
			For any claim relating to Payment or Reimbursement Operations carried out by the Issuer in the
			framework hereof, the User is asked to address the Distributor Customer Service at the address
			indicated for this purpose in the General Conditions of the Site. <br />
			If an Order is executed by the Issuer with errors attributed to this latter, this should be contested
			as soon as possible to the Service Provider, the Order will then be cancelled and the Account returned
			to the situation that it was in before receiving the Payment Order. Following that, the Order will
			be correctly reissued.<br />
			The fees indicated in the Price Conditions may be due in the event an Operation is unjustifiably
			contested.
		</h6>
		<h5 class="pl-6 py-2 font-bold">8.2. Provisions Applicable to the Professional User</h5>
		<h6>
			The Professional User wishing to contest a Transfer Operation unauthorised by them or
			improperly executed must contact the Distributor Customer Service by telephone as soon as
			possible after they become aware of the anomaly and at the latest within eight (8) weeks
			following the transaction of the operation, it being their responsibility to contest it to the
			Issuer as soon as possible. Unless there are good reasons to suspect the User of fraud, the
			Issuer will reimburse the User in the amount of the Operation immediately following receiving
			the request to contest it, and in any case at the latest at the end of the next Business Day.
			The Issuer will return the Account to the state it was in before the unauthorised Payment
			Operation took place <br />
			In the event of the loss or theft of Personalised Security Data, unauthorised Operations carried
			out before they are contested are the User’s responsibility. Operations carried out after they
			are contested are borne by the Issuer unless in the event of fraud by the User.
		</h6>
		<h5 class="pl-6 py-2 font-bold">8.3. Provisions Applicable to the Consumer User</h5>
		<h6>
			The Consumer User wishing to contest a Transfer Operation unauthorised by them or improperly
			executed must contact the Distributor Customer Service by telephone as soon as possible after
			they become aware of the anomaly and at the latest within thirteen (13) months following the
			date it is debited, it being their responsibility to contest it to the Issuer as soon as
			possible. Unless there are good reasons to suspect the User of fraud, the Issuer will
			reimburse the User in the amount of the Operation immediately following receiving the request
			to contest it, and in any case at the latest at the end of the next Business Day. The Issuer
			will return the Account to the state it was in before the unauthorised Payment Operation took
			place<br />
			In the event it is contested, responsibility for proof that the Operation was identified, duly
			recorded and accounted for, and that it was not affected by technical or other deficiencies is
			the responsibility of the Issuer.<br />
			In the event of an unauthorised Payment Operation following the loss or theft of Personalised Security
			Data, the User is responsible for the losses related to the use of Personalised Security Data before
			it is contested, up to a threshold of fifty (50) euros. Operations carried out after they are contested
			are borne by the Issuer unless in the event of fraud by the User. However, the User is not held
			responsible in the event:
			<ul id="the-amount-of-electronic-money" class="list-['-'] ml-10 py-2">
				<li class="pl-4">
					Of an unauthorised Payment Operation carried out without using Personalised Security Data;
				</li>
				<li class="pl-4">
					Of the loss or theft of Personalised Security Data that could not be detected by the User
					before the payment was made;
				</li>
				<li class="pl-4">
					Of losses due to actions or failures of an employee, agent or subsidiary of a PSP or an
					entity to which these activities were externalised.
				</li>
			</ul>
			The User is also not held responsible:
			<ul id="the-amount-of-electronic-money" class="list-['-'] ml-10 pt-2">
				<li class="pl-4">
					if the unauthorised Payment Operation is carried out by diverting the Personalised
					Security Data, without the User’s knowledge;
				</li>
				<li class="pl-4">
					in the event of counterfeiting the Personalised Security Data, if, at the time of the
					unauthorised Payment Operation, the User is in possession of this Data.
				</li>
			</ul>
			The User will bear all the losses arising from unauthorised Operations if these losses result from
			fraudulent activity by them or if they intentionally seriously neglected the obligations to keep
			their Personalised Security Data secured and to contest operations in the event of loss, theft
			or diversion of their Data.<br />
			Barring fraudulent activities on behalf of the User, the latter will not bear any financial consequences
			if the unauthorised Operation was carried out without the Issuer requiring Strong Authentication
			of the User, in the event that regulations require it.
			<h5 class="pl-6 py-2 font-bold">9. Financial Conditions</h5>
			The services offered herein are invoiced by the Distributor in the name and on behalf of the Issuer
			in compliance with the Price Conditions.<br /> Any commissions due by the User are automatically
			deducted from the Electronic Money Account by the Issuer. The User authorises the Issuer to compensate
			at any time, even after the Account is closed, any irrefutable credit, liquid and collectible that
			remains owed, of any nature whatsoever. Funds in the Electronic Money Account may be compensated
			for any amount due, collectible and unpaid of the User to the Issuer.
		</h6>
		<h5 class="pl-6 py-2 font-bold">10. Term and Termination</h5>
		<h6>
			The Framework Contract is entered into for an indeterminate period. It enters into force from
			the time it is accepted by the User.<br />
			The User may at any time and by respecting an advance notice of thirty (30) calendar days, terminate
			the Framework Contract. The Issuer may at any time terminate the Framework Contract, by respecting
			an advance notice of two (2) months provided in Hard Copy format. In this case, the fees irrefutably
			owed for the Services are due by the User on a pro rata basis for the period elapsed at the termination
			date. <br />
			Beyond six (6) months, the Framework Contract may be terminated without costs. In other cases,
			termination costs may apply, in compliance with the Price Conditions.<br />
			For these purposes, each Party must notify the termination hereof to the other Party, by registered
			letter with acknowledgment of receipt, to the postal or email address indicated in the General
			Conditions of the Site.<br />
			The User must indicate in the termination message their banking or payment account information
			allowing the Issuer to reimburse them the Electronic Money available. In the absence of this indication,
			it is the Issuer’s responsibility to follow the Reimbursement instructions involving reimbursement
			by crediting the Card that was used to acquire Electronic Money. The Issuer is released from any
			obligation upon confirmation to the User of the transfer to the account indicated or crediting
			the Card in the amount of Electronic Money available. <br />
			In the event of serious breach, fraud, or lack of payment on the part of the User, the Issuer reserves
			the right to suspend or terminate this Contract by sending an email along with a registered letter
			with acknowledgment of receipt.<br />
			In the event a successor to the Issuer is nominated to issue Electronic Money distributed on the
			Site, it is the Distributor’s responsibility to gather the express written agreement of the User
			of this change, regarding the amount of Electronic Money available and to indicate to the Issuer
			the terms for transferring the funds corresponding to the Electronic Money available.
		</h6>
		<h5 class="pl-6 py-2 font-bold">11. Modification of the Framework Contract</h5>
		<h6>
			The Issuer reserves the right, at any time, to modify the Framework Contract. Any draft
			modification of the Framework Contract is to be provided to the User by the Distributor in
			Hard Copy format, at the latest two (2) months before the date proposed for its entry into
			force. Any new service proposed by the Issuer is subject to a modification of the Framework
			Contract.<br />
			Any User may refuse the proposed modifications and must notify their refusal to the Distributor
			Customer Service by registered letter with acknowledgment of receipt 2 months before the proposed
			modifications enter into force (post office stamp being proof thereof) to the address indicated
			in the General Conditions of the Site.<br />
			Lacking notification of refusal before the indicated date that they enter into force, the User
			will be deemed to have accepted the proposed modifications. <br />
			The relationship between the Parties after the date of entry into force will then be governed by
			the new version of the Framework Contract.<br />
			In the event the User refuses, this refusal will give rise, without fees, to the termination of
			the Framework Contract, as well as the Reimbursement of the units of Electronic Money belonging
			to them in a time frame of thirteen (13) months following the date the termination takes effect
			in order to cover anything contested in the future. <br />
			Any legislative or regulatory provisions that make modifications necessary to any part of the Framework
			Contract will be applicable from the date they enter into force, without advance notice. However,
			the User will be informed thereof.
		</h6>
		<h5 class="pl-6 py-2 font-bold">12. Security</h5>
		<h6>
			The Issuer undertakes to ensure that the services are provided with respect to the applicable
			laws and regulations and best practices. Specifically, the Issuer shall do what is necessary
			to ensure the security and confidentiality of the User’s data, in compliance with the
			regulation in force.<br />
			The Issuer reserves the right to temporarily suspend access to the online Account for technical,
			security or maintenance reasons without these operations invoking any right to an indemnity of
			any kind. It undertakes to limit these types of interruptions to those that are strictly necessary.<br
			/>
			However, the Issuer shall not be held responsible to the User for potential errors, omissions,
			interruptions or delays of operations carried out via the Site that result from unauthorised access
			by the latter. The Issuer shall not be held responsible for the theft, destruction or unauthorised
			disclosure of data that results from unauthorised access to the Site. Furthermore, the Issuer remains
			outside of the scope of the legal relationship between the User and the Beneficiary of the Payment
			Operation or between the User and the Site. The Issuer will not be held responsible for defaults,
			breaches or negligence between a User and a Beneficiary, or the Site and a User. <br />
			If the unique identifier or any other information necessary to carry out a Payment Operation provided
			by the User is inexact, the Issuer cannot be held responsible for the improper execution of said
			Service.<br />
			The Distributor alone is responsible for the security and confidentiality of the data exchanged
			in the framework of using the Site in compliance with the General Conditions of the Site, the Issuer
			being responsible for the security and confidentiality of the data that it exchanges with the User
			in the framework hereof for creating and managing their Account, as well as Payment Operations
			related to the Account.
		</h6>
		<h5 class="pl-6 py-2 font-bold">13. Limits to the Issuer’s Liability</h5>
		<h6>
			The Issuer is in no way involved in the legal and commercial relationships and potential
			disputes arising between the Beneficiary and the User or between the User and the Distributor.
			The Issuer exercises no oversight over the conformity, security, legality, characteristics and
			the appropriate character of the products subject to a Payment Operation. In this regard, it
			is the User’s responsibility to gather all useful information in order to carry out the
			purchase of a product or service, the collections of funds or any other operation required.
			Every operation carried out by the User gives rise to a contract created directly between
			themselves and the Beneficiary(ies) who are strangers to the Issuer. Consequently, the latter
			cannot be held responsible for the non-performance or improper performance of the obligations
			arising from it, or any potential damages caused to the User in this regard.<br />
			Notwithstanding any contrary provision in this Contract, the Issuer’s liability in terms of a User
			is limited to reparations for direct damages as established by regulation.
		</h6>
		<h5 class="pl-6 py-2 font-bold">14. Commitments of the User</h5>
		<h6>
			The User acknowledges that the elements in their Personal Online Area on the Site do not
			infringe on the rights of a third party and are not contrary to the law, public order, or
			proper ethics. The User attests to the conformity, legality and appropriate character of the
			amount granted to the Beneficial Owner, of the purchase of the good by the Beneficial. <br />
			They undertake to not perform the Framework Contract in an illegal manner or under conditions that
			may damage, deactivate, overload or alter the Site; They undertake to not usurp the identity of
			another person or entity, falsify or divulge their identity, their age or create a false identity;<br
			/>
			In the event of a breach of these obligations the Issuer reserves the right to take all appropriate
			measures to bring an end to these actions. It also has the right to suspend, erase and/or block
			access to the Account. Without prejudice to legal actions undertaken by third parties, the Issuer
			has the right to personally bring any legal action that seeks to repair the damages that it has
			personally been subject to due to the User’s breach of their obligations under this Contract.
		</h6>
		<h5 class="pl-6 py-2 font-bold">15. Withdrawal Right</h5>
		<h5 class="pl-6 pb-2 font-bold">15.1. Provisions Applicable to All Users</h5>
		<h6>
			The User having been initiated under the meaning of Articles L.341-1 et seq. of the Monetary
			and Financial Code has a time frame of fourteen (14) calendar days to exercise their right of
			withdrawal, as the case may be subject to responding to the conditions of Article D. 341-1 of
			this Code, without having to justify the reason or bear the penalty. <br />
			This time frame for withdrawal begins from the day of their registration as a User.
		</h6>
		<h5 class="pl-6 py-2 font-bold">15.2. Provisions Applicable to the Consumer User</h5>
		<h6>
			Under Article L. 222-7 of the Consumer Code, the consumer User has a right of withdrawal that
			may be exercised in a time frame of fourteen (14) days without having to justify the reason or
			bear the penalty. This withdrawal time frame begins either from the day of entering into the
			Framework Contract, or from the receipt of the contractual conditions and information, if this
			date is after that of the date the Framework Contract is entered into. <br />
			The Framework Contract may only be put into effect before the withdrawal deadline has expired upon
			the approval of the consumer User. The consumer User recognises that the use of Services after
			entering into the Framework Contract constitutes an express request on its part to begin performing
			the Framework Contract before the above-mentioned deadline has expired. <br />
			Exercising the right of withdrawal involves the Framework Contract coming to an end, and in the
			event performance thereof has begun, takes the form of termination and does not bring into question
			the services previously provided. In this event, the consumer User will only be responsible for
			a payment proportional to the Services effectively provided.
		</h6>
		<h5 class="pl-6 py-2 font-bold">15.3. Exercising the Withdrawal Right</h5>
		<h6>
			The User must notify the Distributor Customer Service of their withdrawal request within the
			indicated time frame by telephone or by email and by sending confirmation to the address of
			the Distributor Customer Service. For this purpose, it may use the withdrawal slip made
			available to them by the Platform.
		</h6>
		<h5 class="pl-6 py-2 font-bold">
			16. Rules Regarding the Fight Against Money Laundering and the Financing of Terrorism
		</h5>
		<h6>
			The Issuer is subject to all of the Luxembourg regulations regarding the fight against money
			laundering and the financing of terrorism.<br />
			Pursuant to the provisions of Luxembourg law, relating to financial organisations participating
			in the fight against money laundering and the financing of terrorist activities, the Issuer must
			obtain information from all Users regarding any operation or original business relationship, the
			subject and the destination of the operation or the opening of the Account. Furthermore, it must
			carry out all due diligence for identifying the User and, if it be the case, the beneficial owner
			of the Account and/or the Payment Operations related to them.<br />
			The User recognises that the Issuer may bring an end or postpone at any time the use of Personalised
			Security Data, access to an Account or the execution of an Operation or a Reimbursement in the
			absence of sufficient elements regarding their purpose or nature. They are informed that an operation
			carried out in the framework hereof may be subject to exercising the right of communication to
			the national financial intelligence unit. The User, pursuant to regulations, may access all information
			thus communicated subject to this right of access not jeopardising the purpose regarding the fight
			against money laundering and the financing of terrorism if this data relates to the individual
			making the request.<br />
			No proceedings or civil liability action may be brought and no professional sanctions issued against
			the Issuer, their officers or agents if they have made declarations regarding suspicions in good
			faith to their national authority.
		</h6>
		<h5 class="pl-6 py-2 font-bold">17. Protection of Personal Data</h5>
		<h6>
			The Issuer collects and processes all Personal Data in compliance with the regulations in
			force applicable to the protection of this Data.<br />
			The Personal Data required during registration is necessary in the framework of the services provided
			in compliance herewith. If the obligatory Personal Data is not provided, the interested party may
			be refused access to the services. <br />
			The Person in Question is informed that the Personal Data is specifically collected for the following
			purposes: providing the services such as described herein; the fight against money laundering and
			the financing of terrorism; managing requests for information and claims; carrying out statistics.
			This data processing is specifically necessary for the performance of the Framework Contract as
			well as respecting the legal obligations that the data processor is subject to. The Issuer and
			the Distributor act as joint processors of this data. <br />
			The Personal Data shall not be transferred to any third party without the express consent of the
			Persons in Question. However, the Person in Question is informed that the Personal Data is transferred
			to the Issuer’s subcontractors for the above-stated purposes. Said subcontractors only act on instructions
			from the Issuer and exclusively on behalf of the latter. <br />
			The Person in Question may access the list of subcontractors by sending their request to the Distributor
			Customer Service. They are informed that the Issuer ensures that their subcontractors take all
			necessary measures in order to maintain the security and confidentiality of the Personal Data.
			In the event the Personal Data is violated (loss, breach, destruction, etc.) involving increased
			risk to the Person in Question, the latter will be informed thereof. <br />
			The Issuer reserves the right to disclose Personal Data at the request of a legal authority to
			be in compliance with any law or regulation in force, to protect or defend the rights of the Account
			Holder or the Person in Question, if circumstances require it or to protect the security of the
			Service Provider, the Services or the public.<br />
			Personal Data processed by the Issuer in the framework of the services provided in compliance herewith
			is kept for the period of time that is strictly necessary to attain the purposes mentioned hereinabove.
			Barring legal and regulatory provisions to the contrary, the Personal Data will not be kept beyond
			the effective date of termination of the Contract. It is specifically indicated that the Personal
			Data relating to identification is kept for a term of five years from the end of the contractual
			relationship, subject to applicable regulation in terms of the fight against money laundering and
			the financing of terrorism. <br />
			The Persons in Question have the following rights pertaining to their Personal Data, according
			to the conditions established by regulations: the right of access, right of rectification, the
			right of objection, the right of erasure, the right to restrict its processing and the right of
			portability. The Person in Question may at any time exercise these rights by addressing the Distributor
			Customer Service. The request must indicate their last name, first name, identifier, and include
			a photocopy of an identity document bearing their signature. <br />
			A response will be sent to the Person in Question in a time frame of one (1) month following receipt
			of the request. This deadline may be extended to two (2) months, given the complexity and the number
			of requests. In this case, the Person in Question will be informed of this extension and the reasons
			for postponement within a deadline of one (1) month from the receipt of the request. <br />
			The Person in Question will be informed if they have the right to file a claim with the competent
			authority for any request related to their Personal Data. <br />
			If the Person in Question provides the request in electronic format, the response will be provided
			in electronic format, unless they expressly request otherwise.<br />
			When the Personal Data relate to a Person in Question who is not a party to the Framework Contract
			has been transferred by the User, the latter will be responsible for communicating to the Person
			in Question the information of this Article. <br />
			Additional Information on the processing of Personal Data carried out in the framework hereof,
			the time frame that it is kept and the rights of the Person in Question are available in the Issuer’s
			confidentiality policy (accessible at the site
			<a href="http://www.mangopay.com">www.mangopay.com</a>).
		</h6>
		<h5 class="pl-6 py-2 font-bold">18. Professional Secrecy</h5>
		<h6>
			The Issuer is bound by professional secrecy. However, the secrecy may be lifted, in compliance
			with the legislation in force, based on a legal, regulatory and prudential obligation,
			specifically at the request of supervisory authorities, the tax or customs administration, as
			well as those of a criminal judge or in the event of a legal request indicated to the
			Distributor. Notwithstanding the foregoing, the User has the right to release the Distributor
			from professional secrecy by expressly indicating the authorities receiving the confidential
			information that relates to the User. <br />It is specified that professional secrecy may be
			lifted by regulation benefiting companies providing the Distributor important operational
			tasks within the framework hereof.
		</h6>
		<h5 class="pl-6 py-2 font-bold">19. Intellectual Property</h5>
		<h6>
			The Issuer retains all intellectual property rights that pertain to them for the Services
			offered to the User. None of these intellectual property rights will be transferred to the
			User under this Contract.
		</h6>
		<h5 class="pl-6 py-2 font-bold">20. Death of the User and Inactive Accounts</h5>
		<h5 class="pl-6 pb-2 font-bold">20.1. Death of the User</h5>
		<h6>
			The death of the User will bring an end to the Framework Contract, once this is made aware to
			the Issuer. Operations occurring from the time of death, except with the agreement of the
			individual who has rights or the attorney in charge of the estate, will be considered not
			having been authorised.<br />
			The Electronic Money Account will remain open for the time necessary to settle the estate and the
			Distributor/Issuer will ensure the transfer of the balance upon the agreement of the individual
			who has rights or the attorney in charge of the estate.
		</h6>
		<h5 class="pl-6 py-2 font-bold">20.2 Inactive Accounts</h5>
		<h6>
			Any inactive Electronic Money Account may be the subject to an inactivity notification by
			email on behalf of the Distributor followed by a follow-up notification one (1) month later.
			The User’s Account is considered inactive if, at the end of a period of twelve (12) months,
			there have been no operations (with the exception of management fees being taken out) at the
			initiative of the User (or any representative) and that has not been specifically indicated to
			the Distributor in any form whatsoever. <br />
			In the absence of a response or use of the Electronic Money available in this time frame, the Account
			will be closed and maintained only for the purposes of carrying out Reimbursement of the Electronic
			Money. Management fees may be collected by the Issuer.<br />
			The Account will no longer give rise to any further use of the Electronic Money.
		</h6>
		<h5 class="pl-6 py-2 font-bold">21. Force Majeure</h5>
		<h6>
			The Parties shall not be held responsible, or considered as being in breach hereof, in the
			event of a delay or non-performance, when the cause of which is related to an event of force
			majeure as defined by Article 1218 of the Civil Code.
		</h6>
		<h5 class="pl-6 py-2 font-bold">22. Independence of the Contractual Stipulations</h5>
		<h6>
			If one of the stipulations hereof is nullified or not applicable, it shall be deemed not
			having been written and it shall not lead to nullification of the other stipulations.<br />
			If one or more stipulations hereof becomes invalid or is declared as such pursuant to a law, regulation
			or following a definitive decision handed down by a competent jurisdiction, the other stipulations
			retain their force of obligation and their scope. The stipulations declared null and void will
			then be replaced by stipulations that are as close as possible to the meaning and the scope of
			the stipulations initially agreed to.
		</h6>
		<h5 class="pl-6 py-2 font-bold">23. Protection of Funds Collected</h5>
		<h6>
			The User’s funds are deposited at the end of each Business Day in an account opened in a Bank
			and are held by the latter.<br />
			Under the terms of Article 24-10 (1) a) of the Law of 20 May 2011, published in Mémorial A n° 104
			of 24 May 2011 of the Grand Duchy of Luxembourg and Article 14 of the Law of 10 November 2009 published
			in Mémorial A n° 215 of 11 November 2009 of the Grand Duchy of Luxembourg, transposing the Directive
			2009/110/EC of the European Parliament and the Council of 16 September 2009, concerning access
			to the activity of electronic money institutions, the funds collected are protected and are not
			included in the pool of assets of the electronic money institution in the event of liquidation,
			bankruptcy or any other competitive situation that may arise for this latter.
		</h6>
		<h5 class="pl-6 py-2 font-bold">24. Lack of Transferability</h5>
		<h6>
			The Framework Contract may not be subject to a total or partial transfer by the User in return
			for payment or free of charge. Thus, they are prohibited from transferring to any third party
			whatsoever the rights or obligations that it holds hereunder. In the event of breach of this
			prohibition, in addition to the immediate termination hereof, they may be held responsible by
			the Issuer.
		</h6>
		<h5 class="pl-6 py-2 font-bold">25. Agreement in Relation to Proof</h5>
		<h6>
			All data will be included in unalterable, true and secured form on the technology database of
			the Issuer specifically relative to Payment Orders and confirmation received from the User,
			notifications sent, access, Withdrawal, Reimbursement so as to constitute proof between the
			Parties unless there is proof to the contrary.
		</h6>
		<h5 class="pl-6 py-2 font-bold">26. Claims and Mediation</h5>
		<h6>
			The User is asked to address the Distributor Customer Service, as indicated on the Site
			regarding any claim. Any claim other than that established in Article 8 relating to entering
			into, performing or terminating the Framework Contract and the services of issuing and
			managing Electronic Money must be indicated by email to the following address: <a
				class="text-blue-600"
				href="mailto:legal@mangopay.com">legal@mangopay.com</a
			>.<br />
			The User accepts that the Issuer will respond to their claims on Hard Copy format. The response
			will be issued as quickly as possible and at the latest within a time frame of fifteen (15) Business
			Days following the receipt of the claim by the Issuer. However, for reasons outside of its control,
			the Issuer may not be able to respond in this time frame of fifteen (15) days. <br />
			In this event, it will provide the User with the response specifying the reasons for this additional
			time period as well as the date on which it will send the definitive response. In any case, the
			User shall receive a definitive response at the latest in a time frame of thirty-five (35) Business
			Days following the receipt of the claim. <br />
			The User is informed that the CSSF (Commission de Surveillance du Secteur financier) [Oversight
			Commission of the Financial Sector] is competent to settle disputes on an extrajudicial basis related
			to the performance of this Framework Contract. For more information on the CSSF and the conditions
			of such recourse, you may address the Distributor Customer Service or consult the website of the
			CSSF (<a href="http://www.cssf.lu">http://www.cssf.lu</a>). Mediation requests must be
			addressed to the Mediator of the Commission de Surveillance du Secteur Financier (CSSF), 283
			route d’Arlon, L-1150 Luxembourg, (direction@cssf.lu) and this, without prejudice to other
			legal actions. However, the mediator may not be approached if the request is manifestly
			unfounded or abusive, if the dispute has previously been settled or is in the process of being
			settled by another mediator or by a court, if the request to the mediator is provided within a
			time frame of longer than one year from the time of the written claim to the professional, or
			if the dispute does not fall within the mediator’s scope of competence.
		</h6>
		<h5 class="pl-6 py-2 font-bold">27. Language - Applicable Law and Competent Jurisdiction</h5>
		<h6>
			With the exception of applying a law related to public order (which only applies in the strict
			limits of its purpose), is expressly stipulated that English is the language chosen and used
			by the Parties in their pre-contractual and contractual relationships and that the Framework
			Contract is subject to French law and any dispute between the Parties regarding the latter
			shall be submitted to the jurisdiction of the competent French courts.
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

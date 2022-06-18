import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import styles from '../../styles/Make.module.css';

const making = () => {
	return (
		<div>
			<Head>
				<title>Over pa'ella</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<Banner imgUrl='/images/ellas.jpg' />
			<div className={styles.container}>
				<h1 className={styles.title}>
					Syntra eindproef: &nbsp;
					<i>
						<b>'Recepten website'</b>
					</i>
				</h1>
				<h2>1. De opdracht</h2>
				<p>
					Maak een dynamische receptenapplicatie met React.js als framework.
				</p>
				<h2>2. Naar keuze te verwerken </h2>
				<div>
					<table>
						<tbody>
							<tr>
								<th className={styles.table__title}>Onderdeel</th>
								<th className={styles.table__title}>
									Opgenomen in de applicatie
								</th>
							</tr>
							<tr>
								<td className={styles.table__cell}>Gebruik spraakherkenning</td>
								<td className={styles.table__cell}>niet gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>Gebruik useReducer</td>
								<td className={styles.table__cell}>
									gebruikt voor authenticatie
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>Gebruik useContext</td>
								<td className={styles.table__cell}>
									gebruikt voor authenticatie
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Gebruik localStorage om data te bewaren
								</td>
								<td className={styles.table__cell}>
									gebruikt om recepten op te slaan in de weekplanner dropzone
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Gebruik Firebase als hosting voor de database
								</td>
								<td className={styles.table__cell}>
									gebruikt voor recepten en gebruikers via Firestore
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Gebruik Firebase Storage om foto's en video's te bewaren
								</td>
								<td className={styles.table__cell}>
									gebruikt voor profielfoto's en receptenfoto's
								</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Sla gebruikervoorkeuren op
								</td>
								<td className={styles.table__cell}>niet gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>Bewaar het type maaltijd</td>
								<td className={styles.table__cell}>
									gebruikt door categorieën toe te voegen
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Gebruik stap-voor-stap instructies voor de gebruiker
								</td>
								<td className={styles.table__cell}>
									gebruikt door de form in verschillende stappen te laten
									opbouwen
								</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Maak een boodschappenlijst
								</td>
								<td className={styles.table__cell}>nog niet gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Maak searching en filtering
								</td>
								<td className={styles.table__cell}>
									gebruikt in (week)planner
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Laat rating of commentaren toe op recepten
								</td>
								<td className={styles.table__cell}>
									Favorieten (harten) aanduiden + commentaren in subcollectie
									van recept
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Geef een overzicht van alle recepten
								</td>
								<td className={styles.table__cell}>
									gebruikt op de homepage volgens het concept van Netflix
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>Maak gebruik van routing</td>
								<td className={styles.table__cell}>
									gebruikt volgens de de modaliteiten van next.js
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Maak een (week)planning voor verschillende recepten
								</td>
								<td className={styles.table__cell}>
									{' '}
									gebruikt met react-dnd naar globale dropzone (niet per dag)
								</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Pas dynamisch hoeveelheden ingredienten aan naargelang het
									aantal personen
								</td>
								<td className={styles.table__cell}>niet gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Maak een detailpagina voor het recept
								</td>
								<td className={styles.table__cell}>gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Deploy de app voor publicatie
								</td>
								<td className={styles.table__cell}>gebruikt met Vercel</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Maak het mogelijk om recepten te creëren, up te daten en te
									deleten
								</td>
								<td className={styles.table__cell}>gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>Maak een custom hook</td>
								<td className={styles.table__cell}>
									gebruikt voor de verschillende functionaliteiten van
									authenticatie
								</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Bereken de kost per gerecht
								</td>
								<td className={styles.table__cell}>niet gebruikt</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Maak een express api bovenop het Firebaseplatform
								</td>
								<td className={styles.table__cell}>
									niet gebruikt, maar wel gebruik gemaakt van
									serversiderendering (SSR) via Next.js
								</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Toon verschillende recepten naargelang het moment,
									bijvoorbeeld 's morgens 'ontbijt'
								</td>
								<td className={styles.table__cell}>niet gebruikt</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Voeg video's toe</td>
								<td className={styles.table__cell}>niet gebruikt</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Voeg een ingrediëntlijst toe
								</td>
								<td className={styles.table__cell}>
									gebruikt in het creëren van een recept
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>Voeg foto's toe</td>
								<td className={styles.table__cell}>
									gebruikt via Firebase Storage voor profielfoto's en
									receptenfoto's
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Gebruik authentificatie van Firebase
								</td>
								<td className={styles.table__cell}>
									gebruikt met de funtionaliteiten gelijkaardig aan Youtube
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Voeg een allergenlijst toe
								</td>
								<td className={styles.table__cell}>
									gebruikt in het creëren van een recept
								</td>
							</tr>
						</tbody>
					</table>
					<h2>3. Eigen toevoegingen</h2>
					<p>
						Deze app werd ontwikkeld in
						<span className={styles.table__used}> Next.js</span>, een framework
						op het framework van React. Het blijft React.js. Het blijft
						Javascript. Het is enkel een kers op de React-taart, die op haar
						beurt al verder bouwt op de blader-deeg-bodem van Javascript. De
						voordelen van next.js zijn dat het (serverside) prerendering
						toelaat, zodat een pagina veel sneller in de browser komt, bijzonder
						aangenaam qua <i>user experience</i>. Dit laat bovendien toe de
						pagina's als html op te laden met de mogelijkheid om gericht SEO
						door te voeren en aldus gemakkelijker vindbaar te zijn voor{' '}
						<i>search engines</i> als Google.
					</p>
					<h2>4. Het concept van de website</h2>
					<p>
						De website dient enerzijds te inspireren om een antwoord te geven op
						de vraag: 'Wat eten we vandaag?'. Anderzijds dient de website
						functioneel te zijn om vlug terug te vinden wat men zoekt. De meeste
						sociale media (Facebook, Instagram, LinkedIn, ...) zijn opgebouwd
						volgens een verticale lijn waarbij het eerdere bericht niet
						noodzakelijk iets te maken heeft met het volgende bericht. Het
						nodigt uit om verder te scrollen. Hier wordt de verticale lijn benut
						om structuur aan te brengen, zoals dit gebruikt wordt door websites
						als <span className={styles.table__used}>Netflix</span>. De
						horizontale lijn is erop gericht te scollen en zich te laten
						inspireren door recepten binnen dezelfde categorie.
					</p>
					<p>
						Een tweede concept is gebaseerd op het principe van{' '}
						<span className={styles.table__used}>Youtube</span>. Iedere bezoeker
						van de website ziet alle <i>content</i> en kan er gebruik van maken.
						Wie een account aanmaakt en zich aanmeldt, kan ook eigen recepten
						uploaden, wijzigen of verwijderen, en een score geven op recepten
						van anderen.
					</p>
					<h2>5. De databasestructuur</h2>
					<div className={styles.imageContainer}>
						<Image
							src='/images/recipeDB.png'
							alt='Database recepten app'
							width={900}
							height={500}
						/>
					</div>
					<h2>6. Planning, budget en tijdsbesteding</h2>
					Link: &nbsp;
					<a
						className={styles.link}
						target='_blank'
						href='https://mermaid.live/edit?gist=https://mermaid.ink/img/pako:eNp1VE2PmzAQ_SsjTq1EpATyUXFrl-72EqlqDqtKucziCbEKNjVDV9Vq_3vHmJCQpL6A7PfejN_M-C0qrKIoi0o0zHsDslhzRbD7a9ghPPl9eDiiG04VMj1aVyMD5Plsu539lBXOftDvTjuqyXALJfKRHKkMal1Ry9ZQDPUihsVqNk9nyTxJ4qTWJlBzanVp4KANVrq9ZiUxpPM7rC-dKomn2DREWN5G-EOVbXxy_wuzjCGRMOtr6ndHrdCQtTVTxkoYn-4wWio8eOJIONkRdw2cV4ZTSyBVATgVCv6EvWdRPDisaZQQGh6YHPRiyaCwtVa9WHRqQA0IgAtMjowv2BK07LqCO0f3cac8guOX7rM25ZBHMtbIc5O1ur7DWIFw8OAIe7qzHVMbQ4Ol_xS2bsRf30VBOJ0Kn5IKXj6KHf0VPmDHx1iK63x9nNTHf0Ty442M2LwcRJ7IkMPqJihk883YRueY3wQmkvCq-eiHAaFrKotqCl-uBvhnSUk0dTE0j7do1JyrCx8IHBW6obZ3IYOFIFcDcnGSy4lRVyNi2P2qNEur9ewQYiSeIM9Ev5oKjdw162fpRnp3tE3jiyGDISO1SMe2ho266sbLgRhGxL6Sa6yW4Tr3wnos2WbS1KcVxVFN8pRoJS_Qmz_bR2JXTfsok19FB-wq3kd78y7QrvFvj7-rdVF2wKqlOJKSW3mqiiiT_qUTKNdYyoAMqPd_QC9wuQ)%5D(https://mermaid.live/edit#pako:eNp1VE1v2zAM_SuETxvgAImdj8G3rV67S4BhORQDcmEtxhFmS55MrxiK_vdRluPESaaLE-m9R-qR1FtUWEVRFpVomPcGZLHmimD317BDePL78HBEN5wqZHq0rkYGyPPZdjv7KSuc_aDfnXZUk-EWSuQjOVIZ1Lqilq2hGOpFDIvVbJ7OknmSxEmtTaDm1OrSwEEbrHR7zUpiSOd3WF86VRJPsWmIsLyN8Icq2_jk_hdmGUMiYdbX1O-OWqEha2umjJUwPt1htFR48MSRcLIj7ho4rwynlkCqAnAqFPwJe8-ieHBY0yghNDwwOejFkkFha616sejUgBoQABeYHBlfsCVo2XUFd47u4055BMcv3WdtyiGPZKyR5yZrdX2HsQLh4MER9nRnO6Y2hgZL_yls3Yi_vouCcDoVPiUVvHwUO_orfMCOj7EU1_n6OKmP_4jkxxsZsXk5iDyRIYfVTVDI5puxjc4xvwlMJOFV89EPA0LXVBbVFL5cDfDPkpJo6mJoHm_RqDlXFz4QOCp0Q23vQgYLQa4G5OIklxOjrkbEsPtVaZZW69khxEg8QZ6JfjUVGrlr1s_SjfTuaJvGF0MGQ0ZqkY5tDRt11Y2XAzGMiH0l11gtw3XuhfVYss2kqU8riqOa5CnRSl6gN3-2j8SumvZRJj8VHbCreB_tzbtAu8a_Pf6u1kWZtCvFkVTcyktVnP4HTK6xlPkIm-__AGLGcCM'
						rel='noopener noreferrer'
					>
						mermaid live editor - Gantt Chart
					</a>
					<div className={styles.imageContainer}>
						<Image
							src='/images/mermaid-diagram.jpg'
							alt='Database recepten app'
							width={900}
							height={400}
						/>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src='/images/Budget.jpg'
							alt='Database recepten app'
							width={900}
							height={800}
						/>{' '}
					</div>
					<br></br>
					<table>
						<tbody>
							<tr>
								<th className={styles.table__title}>Onderdeel</th>
								<th className={styles.table__title}>Geschatte tijd</th>
								<th className={styles.table__title}>Gebruikte tijd</th>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Design layout, wireframes en moodboard
								</td>
								<td className={styles.table__cellSmall}>5 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>5 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Setup Next.js + Github + deploymanet Vercel
								</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Creëren van routes, pagina en componenten{' '}
								</td>
								<td className={styles.table__cellSmall}>4 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Setup Firebase: firestore + testing
								</td>
								<td className={styles.table__cellSmall}>2 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 15 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Setup Firebase: authentication + testing
								</td>
								<td className={styles.table__cellSmall}>2 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>2 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Setup Firebase: storage + testing
								</td>
								<td className={styles.table__cellSmall}>2 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 45 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Data model</td>
								<td className={styles.table__cellSmall}>2 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>4 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Algemene componenten functioneel</td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>5 uur 15 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Home pagina + 404
								</td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>10 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Authenticatie + CRUD</td>
								<td className={styles.table__cellSmall}>12 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>15 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Creëren van recepten (form + opslag)</td>
								<td className={styles.table__cellSmall}>16 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>24 uur 45 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Detail pagina met comments/likes
								</td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>6 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Updaten van recepten</td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>8 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Weekplanner
								</td>
								<td className={styles.table__cellSmall}>10 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>14 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Boodschappenlijst </td>
								<td className={styles.table__cellSmall}>8 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>0 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Recepten & content </td>
								<td className={styles.table__cellSmall}>4 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>5 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Styling </td>
								<td className={styles.table__cellSmall}>10 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>8 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> SEO </td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Testen & troubleshooting </td>
								<td className={styles.table__cellSmall}>8 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>14 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Eindpresentatie </td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
							</tr>
							<tr className={styles.table__total}>
								<td className={styles.table__cell}>
									<b>TOTAAL</b>
								</td>
								<td className={styles.table__cellSmall}>
									<b>114 uur 00 minuten</b>
								</td>
								<td className={styles.table__cellSmall}>
									<b>135 uur 00 minuten</b>
								</td>
							</tr>
						</tbody>
					</table>
					<h2>7. Traject</h2>
					<p>De applicatie is verre van af en kan op tal van punten nog verbeterd worden om te dienen voor de eindgebruiker. Het project werd opgevat als een oefening in het op elkaar afstemmen van verschillende functionaliteiten. Bepaalde functionaliteiten zouden verder moeten uitgebreid en herhaald worden op verschillende pagina's om tot een optimale <i>user experience</i> te komen. Zo is de filter-functie op de weekplanner zeer rudimentair qua keuzemogelijkheden en zou deze ook op de home pagina kunnen gebruikt worden. 
					</p>
					<p>
					Wat het project vooral heeft opgeleverd, is een hogere zelfzekerheid om op één 'grotere' app te werken en componeten af te stemmen op elkaar als er fouten optreden. Waar oorspronkelijk - in het begin van de lessen - vijf lijntjes code geschreven werden, die werkten, was er bijna een reflex om niet meer aan de code te komen en bij manier van spreken witte fluwelen handschoetjes aan te trekken om nog een letter op het klavier in te drukken. Er was steeds die angst dat iets niet meer zou werken na verdere manipulatie. Die angst is overwonnen. Zowat 95% vand bugs zijn oplosbaar en voor de 5% bijzonder hardnekkige problemen is er steeds een wegomlegging. 
					</p>
					<p><i>Bugs</i> waren er van allerlei aard, vanaf prille begin en in zowat iedere component die gemaakt werd. Dit ging van Next.js dat niet naar wens functioneerde, heel specifiek op een M1 van Mac, over het vergeten van de server her op te starten na bepaalde wijzigingen tot het oneigenlijk gebruik van hooks, wat dan wel functioneerde in de development-mode, maar niet in build-mode. Omdat er min of meer geweten was wat er zou komen aan hoeveelheid foutmeldingen werd gekozen om al voor de eerste lijn code te deployen en alle <i>bugs</i> er stapsgewijze uit te halen tijdens de ontwikkeling van de website.</p>
					<p>Aan bepaalde - achteraf gezien simpele oplossingen - werd soms enorm veel tijd verloren. Hoewel helemaal niet zo complex, werd bijvoorbeeld heel veel tijd geïnvesteerd in het via <i>serverside rendering</i> van Next.js de data van Firebase binnen te halen. De <i>lesson learned</i> hier is dat er vanaf een bepaald niveau van moeilijkheidsgraad vooral het redeneren en de documentatie van belang zijn. Hoe groot de community ook is, sommige problemen zitten zo in een niche of zijn zo precies dat <i>Youtube</i> en <i>stackoverflow</i> geen soelaas bieden. Verder blijven heel wat tutorials bij de essentie en bereiken ze net niet wat je nodig hebt. Ook dit is een mailpaal in de ontwikkeling. Waar het aanvankelijk bijzonder moeilijk was om het bos door de bomen te zien door de hoeveelheid informatie over bepaalde problemen, zit de uitdaging nu vooral in het vinden van het specifieke detail, om die ene zeldzame paddestoel ergens verscholen achter een boom te vinden. </p>
					<p>Andere <i>lessons learned</i> of toch iets om mee te nemen naar de toekomst is het consequent afwerken van componenten en functionaliteiten tot ze volledig op punt staan. Vaak werd die afwerking uitgesteld uit schrik dat er zich nadien - in interactie met andere elementen - een probleem zou voordoen en dat er dan nog allerlei wijzigingen zouden moeten doorgevoerd worden, wat zonde zou zijn van het oorsrponkelijke werk. De ervaring leert dat losse eindjes afwerken achteraf, vaak meer tijd in beslag nemen dan het van de eerste keer goed te doen. Immers, achteraf is de app complexer en moet er veel gezocht worden in verschillende componenten of functionaliteit dan wanneer men het in de opbouw doet. Hoewel het belangrijk is om altijd een helicopterview te bewaren en te kunnen anticiperen binnen het geheel, is serieel denken in het opbouwproces van een website zeker geen slechte zaak. Zo is het ook veel makkelijker om een fout in de fundamenten van een huis te herstellen als de eerste baksteen nog moet gelegd worden dan wanneer het dak net geînstalleerd.</p>
					<p>Er is ook geleerd om meer structuur in de code te krijgen. Best wel, maar het blijft toch nog steeds zoeken naar een evenwicht tussen wat doorlopend kan gecodeerd worden en wat in een afzonderlijke componenten gestoken worden. Te veel componenten hebben de allure van een boek lezen, waar je op iedere pagina meerdere voetnoten moet lezen om nog mee te zijn in het verhaal. Idem voor wat leesbaarheid van de code betreft. Mooie code kan in één lijn duizend lijnen vertellen, maar naar leesbaarheid achteraf is het toch vaak aangenaam om Jip-en-Janneke-code te lezen.</p>

					<h2>8. Dank </h2>
					<p>
						Veel dank - echt wel heel veel dank! - aan allen die mij geholpen
						hebben in dit traject. Van het downloaden van <i>Node.js</i> in de
						eerste les, waarvan we toen allemaal geen flauw benul hadden voor
						wat het zou kunnen dienen, tot deze <i>app</i>, was echt wel een
						traject! Ik ga er niet ver naast zitten als we honderdduizend lijnen
						code hebben geschreven om er amper tienduizend werkzame regels van
						over te houden. Uren en uren heeft het gekost. Spreekwoordelijk
						spreekt men van bloed, zweet en tranen, maar laat het ons gewoon
						houden op meerdere deodoranten. Het heeft me de hemel gekost aan
						vloeken. Het heeft me slapeloze nachten bezorgd als ik uit een
						Javascript-nachtmerrie wakker schoot, zo dicht bij de oplossing en
						dan toch weer niet dicht genoeg om een array te lezen zonder
						<i> JSON.parse</i>. Net daarom is zoveel dank verschuldigd aan
						iedereen die heeft bijgedragen tot dit moment, aan iedereen die wees
						op het detail als ik enkel met het groter geheel bezig was, en
						iedereen die me wees op het groter geheel toen ik verdronk in de
						details.
					</p>
					<p>
						Programeren, coderen, <i>whatever</i>, ... is in essentie problemen
						opdelen, zoals je maaltijden opdeelt in ingrediënten en die
						verschillende elementen op een zodanige wijze samenbrengt dat het
						smaakt, dat het goed is, dat het werkt. Voorbij die essentie ligt de
						<i> community</i>, de groep die je mee helpt zoeken en die mee
						toekijkt van <i>boilerplate syntax</i> tot werkelijke <i>app</i>.
					</p>
					<p>
						Bij deze, mijn bijzondere dank aan de volgende personen in die{' '}
						<i>community</i>:
					</p>
					<p>
						- <b>Brecht</b>: voor het geduld, het steeds weer open minded zoeken
						- bij ieder klein of groot probleem - en het geven van de oplossing.
						Uiteraard ook grote dank voor het hele traject van zero tot semi
						hero. Hij heeft het allemaal gedragen! En, hij heeft ons de
						fundamenten van het zoeken geleerd, zodat we nog veel verder kunnen
						komen dan wat we tot nu toe gevonden hebben.
					</p>
					<p>
						- <b>Rune</b>: voor de rigoureuze en gestructureerde introductie in
						styling, mooie slides, kordate regels, waarin iedere pixel telt. Een
						beter fundament hadden we niet kunnen krijgen.
					</p>
					<p>
						- <b>Simon</b>: voor het enthousiasme van de vereenvoudiging,
						waarmee hij de moed kan geven om de Mont Blanc beklimmen als was het
						ordinair de volgende verdieping in een huis. Hij is er alvast in
						geslaagd complexe zaken simpel te maken, ons dingen te laten doen
						die we niet voor mogelijk hadden geacht, wat een ongelooflijk talent
						is. Quote:
						<i>
							'Programmeren is in se nog altijd zoals honderd jaar geleden. Er
							is nog niets veranderd in de oorspronkelijke functies.'
						</i>
					</p>
					<p>
						<i>
							Kan er mij dan iemand de code van 1922 geven voor een recipe-app?
							Dat is vijf jaar voor de eerste uitgave van het kookboek van de
							Boerinnenbond!
						</i>
					</p>
					<p>
						- <b>Kim</b>: voor de pertinente vragen, het samen zoeken op de code
						en het delen van leuke visies op het leven, over kinderen, konijnen,
						Cobol in sociale secretariaten en het niet nodig hebben van
						boekhouders.
					</p>
					<p>
						- <b>Mo</b>: wie ik enorm bewonder om een moeilijk materie als deze
						in het Nederlands te volgen en te blijven volhouden, waar velen
						reeds afvielen. <i>Under or above the hood of React</i>, hoed af!
					</p>
					<p>
						- <b>Jonas</b>: de kanarie in de koolmijn, die de vragen stelde
						waarop iedereen nog aan het zoeken was. De klokkenluider als het
						beter kon, de carnavalist (<i>voil janet</i>) die de porno in de
						API's vond. Hoe dan ook, een buddy in alles, om code te delen,
						problemen te bespreken, eigenlijk zowat de ombudsprogrammeur van de
						groep.
					</p>
					<p>
						- <b>Steven</b>: mute en altijd op de achtergrond, degene die met
						een beknopte tekst in Teams een goeie maatstaf was voor de
						vooruitgang in de ontwikkeling en op die manier voor mij ook
						richting gaf aan enkele belangrijke to do's.{' '}
					</p>
					<p>
						- <b>Nils</b>: de man die 'bokes' uit een Lego-blok eet en me met
						zijn vragen altijd dichter brengt bij de essentie van het
						programmeren, ... door op te splitsen en op te bouwen in blokken.{' '}
					</p>
					<p>
						- <b>Jesse</b>: altijd chill, met zijn styling waarin eenvoud siert
						op het hoogste niveau en degene die ik onverwachts betrapte in mijn
						tuin met mijn vriendin (voor het kopen van een tuintafel). Creatief
						inspirator! Ik hou van dat <i>haute couture</i> design in een
						minimalisme van lijnen!
					</p>
					<p>
						- <b>Hans</b>: die altijd die voorsprong had op de rest en een
						wizard in het stylen. Degene die volgens mij vrouwen kan
						programmeren. Als hij zichtzelf bier toekent als beloning voor het
						oplossen van een code probleem, is het zijn vrouw die dit brengt.
						Tussen die 'useState' <i>(setCodeProblem(false))</i> en 'Edith
						returnt bier' moet er toch nog ergens een 'useEffect' zitten, niet?
						Of, Edith is gewoon een heel straffe madam, nog straffer dan Hans.
						Dat kan natuurlijk ook. Heeft hij ze dan zo geprogrammeerd?
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default making;

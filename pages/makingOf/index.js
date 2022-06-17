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
							<tr>
								<td className={styles.table__cell}>
									Maak searching en filtering
								</td>
								<td className={styles.table__cell}>nog niet gebruikt</td>
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
							<tr>
								<td className={styles.table__cell}>
									Maak een (week)planning voor verschillende recepten
								</td>
								<td className={styles.table__cell}>nog niet gebruikt</td>
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
						/>{' '}
					</div>

					<h2>6. Planning, budget en tijdsbesteding</h2>
					<div className={styles.imageContainer}>
						<Image
							src='/images/mermaid-diagram.jpg'
							alt='Database recepten app'
							width={900}
							height={400}
						/>
					</div>
					<a
						target='_blank'
						href='https://twitter.com/'
						rel='noopener noreferrer'
					>
						twitter
					</a>
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
									Voorbereiding: wireframe + moodboard
								</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>5 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Setup Next.js + Github + Vercel
								</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Setup Firestore</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Setup Firebase authentication
								</td>
								<td className={styles.table__cellSmall}>1 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 15 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Setup Firebase storage</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>2 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Creëren paginastructuur</td>
								<td className={styles.table__cellSmall}>0 uur 45 minuten</td>
								<td className={styles.table__cellSmall}>0 uur 45 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Home Page</td>
								<td className={styles.table__cellSmall}>0 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>0 uur 45 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Home Page</td>
								<td className={styles.table__cellSmall}>0 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>0 uur 45 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Navigatie component met routing
								</td>
								<td className={styles.table__cellSmall}>1 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 15 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Modal component</td>
								<td className={styles.table__cellSmall}>2 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>2 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Banner component</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>0 uur 45 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Footer component met routing
								</td>
								<td className={styles.table__cellSmall}>1 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>1 uur 15 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Signup pagina</td>
								<td className={styles.table__cellSmall}>1 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>0 uur 35 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Login pagina</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Profiel pagina met foto upload
								</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>9 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Creëer Recept pagina </td>
								<td className={styles.table__cellSmall}>1 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Form </td>
								<td className={styles.table__cellSmall}>4 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>9 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Recept detailpagina </td>
								<td className={styles.table__cellSmall}>6 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>6 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Recept commentaar </td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>5 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Filter - Search </td>
								<td className={styles.table__cellSmall}>9 uur 00 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Recept update & delete </td>
								<td className={styles.table__cellSmall}>9 uur 30 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Weekplanner (drag & drop)
								</td>
								<td className={styles.table__cellSmall}>9 uur 30 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									{' '}
									Shopping list met QR-code{' '}
								</td>
								<td className={styles.table__cellSmall}>9 uur 30 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Form </td>
								<td className={styles.table__cellSmall}>4 uur 30 minuten</td>
								<td className={styles.table__cellSmall}>9 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Next.js SSR </td>
								<td className={styles.table__cellSmall}>4 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>8 uur 30 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Next.js dynamic paths </td>
								<td className={styles.table__cellSmall}>4 uur 30 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}>Restyling </td>
								<td className={styles.table__cellSmall}>9 uur 00 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Content website + database
								</td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Datamodel </td>
								<td className={styles.table__cellSmall}>4 uur 00 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}> SEO </td>
								<td className={styles.table__cellSmall}>3 uur 00 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr className={styles.table__total}>
								<td className={styles.table__cell}>
									<b>TOTAAL</b>
								</td>
								<td className={styles.table__cellSmall}>
									<b>115 uur 15 minuten</b>
								</td>
								<td className={styles.table__cellSmall}>
									<b></b>
								</td>
							</tr>
						</tbody>
					</table>
					<h2>7. Hindernissen & bug fixing</h2>
					<p>bla bla bla</p>
					<h2>8. Keuzes, ervaringen en mogelijk uitbreidingen</h2>
					<p>bla bla bla</p>
					<h2>9. Dank </h2>
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
						inspirator! Ik hou van dat <i>haute couture</i> design in die
						sierlijke eenvoud!
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

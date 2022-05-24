import Head from 'next/head';
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
				<h1>
					Syntra eindproef: &nbsp;
					<i>
						<b>'Recepten website'</b>
					</i>
				</h1>
				<h2>
					1. Maak een dynamische receptenapplicatie met React.js als framework
				</h2>
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
							<tr>
								<td className={styles.table__cell}>
									Gebruik localStorage om data te bewaren
								</td>
								<td className={styles.table__cell}>niet gebruikt</td>
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
							<tr>
								<td className={styles.table__cell}>
									Laat rating of commentaren toe op recepten
								</td>
								<td className={styles.table__cell}>nog niet gebruikt</td>
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
							<tr>
								<td className={styles.table__cell}>
									Maak een detailpagina voor het recept
								</td>
								<td className={styles.table__cell}>
									gebruikt - in ontwikkeling
								</td>
							</tr>
							<tr className={styles.table__used}>
								<td className={styles.table__cell}>
									Deploy de app voor publicatie
								</td>
								<td className={styles.table__cell}>gebruikt met Vercel</td>
							</tr>
							<tr>
								<td className={styles.table__cell}>
									Maak het mogelijk om recepten te creëren, up te daten en te
									deleten
								</td>
								<td className={styles.table__cell}>
									creëren gebruikt, de rest in ontwikkeling
								</td>
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
						De app werd ontwikkeld in
						<span className={styles.table__used}> Next.js</span>, een framework
						op het framework van React. De voordelen van next.js zijn dat het
						prerendering (serverside) toelaat, zodat een pagina veel sneller in
						de browser komt. Dit laat bovendien toe de pagina's als html op te
						laden met de mogelijkheid om gericht SEO door te voeren en aldus
						gemakkelijker vindbaar te zijn voor search engines zoals Google.
					</p>
					<h2>4. Het concept</h2>
					<p>
						De website dient enerzijds te inspireren om een antwoord te geven op
						de vraag: 'Wat eten we vandaag?'. Anderzijds dient de website
						functioneel te zijn om vlug terug te vinden wat men zoekt. De meeste
						websites binnen sociale media (Facebook, Instagram, LinkedIn, ...)
						zijn opgebouwd volgens een verticale lijn waarbij het eerdere
						bericht niet noodzakelijk iets te maken heeft met het volgende
						bericht. Het nodigt uit om verder te scrollen. Hier wordt de
						verticale lijn benut om structuur aan te brengen, zoals dit gebruikt
						wordt door websites als <span className={styles.table__used}>Netflix</span>. De horizontale lijn is erop gericht
						te scollen en zich te laten inspireren door recepten binnen dezelfde
						categorie.
					</p>
					<p>
						Een tweede concept is gebaseerd op het principe van <span className={styles.table__used}>Youtube</span>. Iedere
						bezoeker van de website ziet alle content en kan er gebruik van
						maken. Wie een account aanmaakt en zich aanmeldt, kan ook eigen
						recepten uploaden, wijzigen of verwijderen, en een score geven op
						recepten van anderen.
					</p>
					<h2>5. De databasestructuur</h2>
					<p>Image</p>
					<h2>6. Planning en tijdsbesteding</h2>
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
								<td className={styles.table__cellSmall}>4 uur 30 minuten</td>
								<td className={styles.table__cellSmall}></td>
							</tr>
							<tr>
								<td className={styles.table__cell}> Rating recept </td>
								<td className={styles.table__cellSmall}>6 uur 00 minuten</td>
								<td className={styles.table__cellSmall}></td>
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
									<b>113 uur 15 minuten</b>
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
					<p>bla bla bla</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default making;

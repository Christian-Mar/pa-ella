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
				<h2>1. Maak een dynamische receptenapplicatie met React.</h2>
				<h2>2. Naar keuze te verwerken </h2>
				<div>
					<table>
						<tbody>
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
									serversiderendering (SSR) via next.js
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
						<span className={styles.table__used}> next.js</span>, een framework
						op het framework van React. De voordelen van next.js zijn dat het
						prerendering (serverside) toelaat, zodat een pagina veel sneller in
						de browser komt. Dit laat bovendien toe de pagina's als html op te
						laden met de mogelijkheid om gericht SEO door te voeren en aldus
						gemakkelijker vindbaar te zijn voor search engines zoals Google.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default making;

import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import styles from '../../styles/About.module.css';

const About = () => {
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
				<h1>Over pa'el-la</h1>
				<p>
					<b>Pa'el-la</b> is het antwoord op: "Wat eten we vandaag?".
				</p>
				<p>
					Waarom de naam <b>pa'el-la</b>? Wie de oorsprong van dit Spaanse
					gerecht probeert te behappen, verdwaalt in tal van verhalen en
					legenden. Taalkundigen houden het op de pan die voor de paella
					gebruikt wordt en in het Latijn 'patella' genoemd wordt. Anderen
					verwijzen naar het Arabische 'baquiyah', naar de origine van de rijst
					die uit Noord-Afrika zou komen.
				</p>
				<p>
					Een heroïsch verhaal over het ontstaan van de beroemde paella vertelt
					dat tijdens de Spaanse Onafhankelijkheidsoorlog een Franse generaal
					zeer onder de indruk was van de bereiding van paella door een vrouw,
					zodat hij met haar een deal sloot: voor elk nieuw bord rijst zou hij
					een Spaanse gevangene bevrijden. Met dit voor ogen liet de vrouw haar
					fantasie de vrije loop en met een groot improvisatievermogen maakte
					zij elke dag een andere paella, waardoor zij 176 gevangenen vrij
					kreeg.
				</p>

				<p>
					Wij houden het op de volgende - wellicht meest romantische - legende.
					Zo zou een vrouw, die haar zieke moeder ging bezoeken, een dag van
					huis geweest zijn. Tegen de vele Spaanse tradities van die tijd in,
					besloot haar man voor haar thuiskomst een gerecht in elkaar te
					knutselen met de restjes van de dagen ervoor. Het was een heerlijk
					gerecht! Al vlug deed het de ronde in het dorp dat hij voor haar -{' '}
					<i>para ella</i> - had gekookt. In het lokale dialect klonk dit als{' '}
					<i>pa'ella</i>. Niet meteen het gerecht zelf gingen over de tongen,
					dan wel het feit dat hij het voor haar had gedaan. Tot op de dag van
					vandaag worden de meeste paella's nog steeds door mannen gemaakt.
				</p>
				<p>
					Even verder in de tijd, maken we er hier <b>pa'el-la</b> van, voor hem
					- <i>pa'el</i> -, voor haar - <i>pa'ella</i> - en het streepje voor
					iedereen die zich tussen die twee voelt. Voor iedereen, dus. Recepten
					zijn zoveel meer dan de chemie van wat ingrediënten, omdat je altijd
					voor iemand kookt, ook al is die speciale iemand je eigenste zelf.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;

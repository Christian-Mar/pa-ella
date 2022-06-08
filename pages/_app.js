import '../styles/globals.css';
import { AuthContextProvider } from '../context/AuthContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<DndProvider backend={HTML5Backend}>
				<Component {...pageProps} />
			</DndProvider>
		</AuthContextProvider>
	);
}

export default MyApp;

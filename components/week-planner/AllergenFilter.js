import {useState} from 'react';

const AllergenFilter = ({gluten, setGluten}) => {

  //const [gluten, setGluten] = useState(false)

  //

  return (
		<div>
			<input
				type='checkbox'
				value='gluten'
				name='allergen'
				checked={gluten}
				onChange={() => setGluten(!gluten)}
				id='gluten'
			/>
			<label htmlFor='gluten'>gluten</label>
		</div>
	);
}

export default AllergenFilter

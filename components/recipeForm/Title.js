const Title = ({title, updateForm}) => {

    return (
		<div>
			<h3 >Title: </h3>
			<input
				type='text'
				name='title'
				onChange={updateForm}
				value={title}
				placeholder='new recipe'
			
			/>
		</div>
	);
}

export default Title

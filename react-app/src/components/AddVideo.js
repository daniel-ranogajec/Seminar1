import { useState } from "react"

export const AddVideo = ({ onAdd }) => {
	const [Title, setTitle] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		
		if(Title) {
			onAdd({ Title })
		}
	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Search Video:</label>
				<input type='text' placeholder='Search' value={Title} onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<input type='submit' className='btn btn-block' value='Add video' />
		</form>
	)
}

export default AddVideo
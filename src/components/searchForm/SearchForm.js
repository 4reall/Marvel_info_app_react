import {
	Formik,
	Field,
	Form,
	ErrorMessage as FormikErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import './searchForm.scss';
import { useMarvelServices } from '../../services/marvelServices';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import paths from '../../pages/pathes';

const SearchForm = () => {
	const [char, setChar] = useState(null);
	const { error, getCharacterByName, loading, clearError } =
		useMarvelServices();
	const updateChar = (name) => {
		clearError();

		getCharacterByName(name).then((res) => setChar(res));
	};

	const errorMessage = error ? (
		<div className="char__search-critical-error">
			<ErrorMessage />
		</div>
	) : null;
	const results = !char ? null : char.length > 0 ? (
		<div className={'char__search-wrapper'}>
			<div className="char__search-succeed">
				There is! {char[0].name} has been found
			</div>
			<Link
				to={`${paths.characterPage}${char[0].id}`}
				className={'button  button__main'}
			>
				<div className="inner">TO PAGE</div>
			</Link>
		</div>
	) : (
		<div className="char__search-error">
			The character was not found. Check the name and try again
		</div>
	);
	return (
		<div className="char__search-form">
			<Formik
				initialValues={{ charName: '' }}
				validationSchema={Yup.object({
					charName: Yup.string().required('This is required field'),
				})}
				onSubmit={(values) => {
					updateChar(values.charName);
				}}
			>
				<Form>
					<label className="char__search-label" htmlFor={'charName'}>
						Or find a character by name:
					</label>
					<div className="char__search-wrapper">
						<Field
							id="charName"
							name="charName"
							type="text"
							placeholder="Enter name"
							className="char__search-input"
						/>

						<button
							type="submit"
							className="modal__btn button button__main"
							disabled={loading}
						>
							<div className="inner">FIND</div>
						</button>
					</div>
					<FormikErrorMessage
						className={'char__search-error'}
						component={'div'}
						name="charName"
					/>
				</Form>
			</Formik>
			{results}
			{errorMessage}
		</div>
	);
};
export default SearchForm;

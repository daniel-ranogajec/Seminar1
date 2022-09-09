import PropTypes from 'prop-types'

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'React App',
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header

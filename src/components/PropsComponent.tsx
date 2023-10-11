// import PropTypes from 'prop-types'

interface Props {
    title: string,
    subtitle: string,
    number: number,
}

export default function PropsComponent({ title, subtitle, number}: Props) {
    console.log('title: ', title, 'subtitle: ', subtitle)
  return (
    <>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <h2>{ number + 1 }</h2>
    </>
  )
}

// PropsComponent.PropTypes = { 
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
// }

PropsComponent.defaultProps = {
    title: 'Title default',
    subtitle: 'default subtitle',
    number: 6,
}
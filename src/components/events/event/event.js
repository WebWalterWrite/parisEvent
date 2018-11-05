import React from "react";
import PropTypes  from 'prop-types';
import { Section, Content, Infos, Description, Img} from "./event.styled";

const Event = props => {
	// if(props.location.state)
	// return alert('nada')
	// console.log(props)
	const { data } = props.location.state;
	const { title, html, leadText } = data;
	const { url, alt, credit } = data.image;
    const { name, address, city, zipCode, metro, rer, bus } = data.place;
    const { realDateStart, realDateEnd} = data.evenements;

    const createMarkup = (data) => {
        return {__html: data};
	  }

	return (
		<Section>
			<h1>{title}</h1>
            <h3>{leadText}</h3>
			<Content>
				{/* content image */}
				<Img>
					<img
						src={url}
						alt={alt}
						credit={credit}
					/>
				</Img>
                </Content>
                <Description 
                    dangerouslySetInnerHTML={createMarkup(html)}>
                </Description>
                <Infos>
                    <p>Date :<span>du {realDateStart} au {realDateEnd}</span></p>
					<p>Lieu :<span>{name}</span></p>
                    <p>Addresse :<span>{address} {zipCode} {city}</span></p>
					<p>Accès Bus: <span>{ bus === null ? "non disponible" : bus}</span></p>
                    <p>Accès Métro: <span>{ metro === null ? "non disponible" : metro}</span></p>
					<p>Accès RER: <span>{ rer === null ? "N/A" : rer}</span></p>

				</Infos>
		</Section>
	);
};




Event.propTypes = {
location: PropTypes.shape({
	state: PropTypes.shape({
		data : PropTypes.shape({
			title: PropTypes.string.isRequired,
			leadText: PropTypes.string,
			image: PropTypes.object.isRequired,
			evenements: PropTypes.shape({
				realDateStart: PropTypes.string,
				realDateEnd: PropTypes.string,
			}),
			place: PropTypes.shape({
				address: PropTypes.string.isRequired,
				bus: PropTypes.string,
				city: PropTypes.string.isRequired,
				metro: PropTypes.string,
				name: PropTypes.string.isRequired,
				rer: PropTypes.string,
				zipCode: PropTypes.number.isRequired,
			})
		})
	})

  }).isRequired,

}



export default Event;

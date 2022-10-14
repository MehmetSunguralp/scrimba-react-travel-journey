import LocationIcon from '../images/location-ico.svg';

export default function Card(props) {
	console.log(props);
	return (
		<div className="card-container">
			<img src={props.item.imageUrl} className="card-img" />
			<div className="information-container">
				<img src={LocationIcon} className="location-icon" />
				<span className="location">{props.item.location}</span>
				<a
					href={props.item.googleMapsUrl}
					target="_blank"
					className="google-maps"
				>
					View on Google Maps
				</a>
				<h2 className="location-title">{props.item.title}</h2>
				<span className="date">
					{props.item.startDate} - {props.item.endDate}
				</span>
				<p className="description">{props.item.description}</p>
			</div>
            <div className='divider'></div>
		</div>
	);
}

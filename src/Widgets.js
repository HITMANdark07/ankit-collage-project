import React from 'react';

function Widgets() {
	return (
		<div className="widgets">
			<iframe
				src="https://open.spotify.com/embed/playlist/1EtpOzSuCXq0m15xZfWAie"
				width="310"
				height="1500"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
				style={{ border: ' none ', overflow: 'hidden', height:'100%' }}
			/>
		</div>
	);
}

export default Widgets;

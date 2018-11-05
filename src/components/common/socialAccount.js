import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

export const Facebook = () => (
	<div>
		<a href="/">
			<FontAwesomeIcon icon={faFacebook} size="2x" /> Facebook
		</a>
	</div>
);

export const Instagram = () => (
	<div>
		<a href="/">
			<FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
		</a>
	</div>
);

export const Twitter = () => (
	<div>
		<a href="/">
			<FontAwesomeIcon icon={faTwitter} size="2x" /> Twitter
		</a>
	</div>
);

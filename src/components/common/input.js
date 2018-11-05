import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

export const Email = ({value, change}) => (
	<Fragment>
		<FontAwesomeIcon icon={faEnvelope} size="2x" />
		<input
			type="text"
			name="email"
			value={value}
			onChange={change}
			placeholder="Email"
		/>
	</Fragment>
);

export const Password = ({value, change}) => (
    <Fragment>
        <FontAwesomeIcon icon={faLock} size="2x" />
		<input
			type="password"
			name="password"
			value={value}
			onChange={change}
			placeholder="Mot de passe"
		/>
    </Fragment>
);
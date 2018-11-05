import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

// import boutons communs
import { Email, Password } from "../common/input";
import Modal from "../common/modal";
// import liens vers compte social
import { Facebook, Instagram, Twitter } from "../common/socialAccount";
import {
	ContainInput,
	Hr,
	SocialContain,
	Sucribe
} from "./logaccount.styled";

const LogAccount = ({change, state, modal}) => {

		const {name, email, password} = state;
		return (
			<Modal>
			
					<h2>M'inscrire</h2>
					<p>
						En vous inscrivant, vous pourrais ajouter vos sorties préférées dans
						vos favoris, être averti des nouveaux events selon vos choix.
					</p>

					{/* Champs de connexion */}

					<ContainInput>
						<Sucribe>
							<h3>créer un compte</h3>
							<form>
								<div>
									<FontAwesomeIcon icon={faUser} size="2x" />
									<input
										type="text"
										name="name"
										value={name}
										onChange={change}
										placeholder="Prénom"
									/>
								</div>

								<div>
									<Email change={change} value={email} />
								</div>

								<div>
									<Password
										change={change}
										value={password}
									/>
								</div>

								<button type="submit">M'inscrire</button>
							</form>
						</Sucribe>
						<Hr>
							<span>ou</span>
						</Hr>

						{/* Connexion avec compte social */}
						<div>
							<h3>connectez-vous avec</h3>

							{/* Connexion avec un compte social */}
							<SocialContain>
								<Facebook />
								<Instagram />
								<Twitter />
							</SocialContain>
						</div>
					</ContainInput>
					<span onClick={modal}>close</span>
			
			</Modal>
		);
	}

export default LogAccount;

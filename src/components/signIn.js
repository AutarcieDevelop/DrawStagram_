import React from 'react'
import '../App.css';
import {Form,Button} from 'react-bootstrap';
import DrawFactoryLogo from '../Pics/Logo DrawFactory.png'
import LoadingImage from './LoadingImage'

const signIn = () => 
{
    return (
        <div style={{textAlign:"center"}}>
            <div id="signIn">
                <LoadingImage/>
                <img src={DrawFactoryLogo} width="100" alt="Draw-factory logo" className="signLogo"/>
                <h2 id="signInTitle">Connexion</h2>

                <div className="signBox">
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Nom d'utilisateur</Form.Label>
                            {/* <Form.Control type="username" placeholder="Nom d'utilisateur" /> */}<br/>
                            <input type="text" className="formControl" placeholder="Nom d'utilisateur"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            {/* <Form.Control type="password" placeholder="Mot de passe" /> */}<br/>
                            <input type="password" className="formControl" placeholder="Mot de passe"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Rester connecté" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Valider</Button>
                    </Form>
                </div>
            </div>
            <bold className="or">ou</bold>
            <div className="googleAPI">
                <div className="g-signin2" data-width="265px" data-onsuccess="onSignIn" data-theme="dark">google</div>
            </div>
            <p>Vous n’avez pas de compte ? <a href="/signUp">Inscrivez-vous</a></p>
        </div>
    )
}

export default signIn;

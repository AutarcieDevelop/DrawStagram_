import React from 'react'
import '../App.css';
import {Form,Button} from 'react-bootstrap';
import DrawFactoryLogo from '../Pics/Logo DrawFactory.png'
import LoadingImage from './LoadingImage'

const signUp = () => 
{
    return (
        <div style={{textAlign:"center"}}>
            <div id="signUp">
                <LoadingImage/>
                <img src={DrawFactoryLogo} width="100" alt="Draw-factory logo" className="signLogo"/>
                <h2 id="signUpTitle">Inscrivez-vous sur Draw-Factory</h2>

                <div className="signBox">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse e-mail</Form.Label><br/>
                            <input type="email" className="formControl" placeholder="exemple@outlook.com"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Nom d'utilisateur</Form.Label><br/>
                            <input type="text" className="formControl" placeholder="Nom d'utilisateur"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label><br/>
                            <input type="password" className="formControl" placeholder="Mot de passe"/>
                            <Form.Text className="text-muted">Minimum 8 caractères</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label><br/>
                            <input type="password" className="formControl" placeholder="Retapez votre mot de passe"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="J'accepte les Conditions générales" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Valider</Button>
                    </Form>
                </div>
            </div>
            <bold className="or">ou</bold>
            <div className="googleAPI">
                <div className="g-signin2" data-width="265px" data-onsuccess="onSignIn" data-theme="dark">google</div>
            </div>
            <p>Vous avez un compte ? <a href="/signIn">Connectez-vous</a></p>
        </div>
    )
}

export default signUp;

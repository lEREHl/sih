import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister= (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />                        
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY={false}>
                
                <IonCard>
                    <IonCardContent>
                    
                        <form onSubmit={doRegister}>
                            <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='abc123@gmail.com'></IonInput>
                            <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label="Password" type='password' ></IonInput>
                            <IonButton className="ion-margin-top" type='submit' expand="block" >
                                Create my Account
                                <IonIcon icon={checkmarkDoneOutline} slot="end" />
                                </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                bye
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Register;
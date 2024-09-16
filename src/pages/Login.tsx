import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { fish, logInOutline, person, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import FCC from '../assets/fcc.svg';




const Login: React.FC = () => {
    // const router = useIonRouter();
    const dologin= (event: any) => {
        
        event.preventDefault();
        console.log('dologin');
        // router.push('/home', 'root');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'Primary'}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY={false}>
                <div className='ion-text-center ion-padding'>
                    <img src={ FCC } alt='FCC Logo' width={'20%'}/>
                </div>
                
                <IonCard>
                    <IonCardContent>
                    
                        <form onSubmit={dologin}>
                            <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='abc123@gmail.com'></IonInput>
                            <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label="Password" type='password' ></IonInput>
                            <IonButton routerLink='/blank' className="ion-margin-top" type='submit' expand="block" >
                                Login 
                                <IonIcon icon={logInOutline} slot="end" />
                                </IonButton>
                            <IonButton routerLink='/register' className="ion-margin-top" color={'secondary'} type='button' expand="block" >
                            Create account
                            <IonIcon icon={personCircleOutline} slot="end" />

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

export default Login;

function useIonRouter() {
    throw new Error('Function not implemented.');
}

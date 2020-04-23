
import React, {useState} from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { IonContent, IonHeader, IonPage, IonThumbnail ,IonTitle, IonToolbar, IonCard, IonList, IonCardHeader, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonFabList, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonButton } from '@ionic/react';
import { add, arrowDownCircle, wine, warning, walk, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter, camera, trash, close } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { Plugins, CameraResultType } from '@capacitor/core';
import Burger from '../assets/photos/photo-1508736793122-f516e3ba5569.jpg';


// type Item = {
//   src: string;
//   text: string;
// };
// const items: Item[] = [{ src: 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80', 
//                         text: 'a picture of a cat'
//                         // width: 50%
//                       }];


const Home: React.FC<RouteComponentProps> = (props) => {
  const {Camera} = Plugins;
  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // setPhoto(image.webPath);
  };

  const { Geolocation } = Plugins;

  class GeolocationExample {
    async getCurrentPosition (){
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current', coordinates);
    }
    watchPosition() {
      const wait = Geolocation.watchPosition({}, (position, err) => {

      })
    }
  }

  return (
    <IonPage>
      
      <IonContent color="danger">
       <IonGrid  >
          <IonRow >
            <IonCol size="3"></IonCol>
            <IonCol className="ion-text-center">
              <h3 >Redeem Now...</h3>
            </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="3"></IonCol>
            <IonCol>
              <IonButton expand="full"  color="light" >RewardZing</IonButton>
            </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>

          <div className="ion-text-center"><IonIcon icon={arrowDownCircle} ></IonIcon></div>
          <div className="ion-text-center"><IonIcon icon={arrowDownCircle} ></IonIcon></div>
          <div className="ion-text-center"><IonIcon icon={arrowDownCircle} ></IonIcon></div>
                    
          <IonRow className="ion-text-center ">
            <IonCol size="3"></IonCol>
              <IonCol >
                <img src={Burger} />
                  {/* <IonList  >
                    
                   {items.map((image, i) => (
                        <IonItem key={i} >
                          <IonImg className="imgDisplay" src={image.src} />
                        </IonItem>
                     ))}
                     
                  </IonList> */}
                                 
                </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>
          
          <IonRow >
            <IonCol size="3"></IonCol>
            <IonCol>
              <IonButton expand="full"  color="light" >Cafe MontCarlo</IonButton>
            </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>
          <div className="ion-text-center"><IonIcon icon={arrowDownCircle} ></IonIcon></div>
          <div className="ion-text-center"><IonIcon icon={arrowDownCircle} ></IonIcon></div>
          <div className="ion-text-center"><IonIcon icon={arrowDownCircle} ></IonIcon></div>

          <IonRow className="ion-text-center ">
            <IonCol size="3"></IonCol>
            <IonCol>
              <h4>+get 10 rewards points</h4>
              <h2>10% off</h2>
              <div className="txtDisplay"><p>terms and conditions apply</p></div>
              
            </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>


        </IonGrid>
        
        

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')} >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton onClick={() => takePhoto()} >
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;

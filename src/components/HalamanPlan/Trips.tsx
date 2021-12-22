import React from 'react';
import { IonButton, IonIcon, IonItem, IonLabel, IonPage, IonSearchbar } from "@ionic/react";
import { heart, locationOutline, documentText, personAdd } from "ionicons/icons";
import '../plan.css'

const Trips: React.FC = () => {
    return(
        <div>
            <IonItem lines="none" className="itemLabelTop">
                <IonIcon slot="start" icon={heart} className="planTabIcon"></IonIcon>
                <IonLabel className="itemLabel">Save place you'd like to visit</IonLabel>
            </IonItem>
            <IonItem lines="none" className="itemLabel">
                <IonIcon slot="start" icon={locationOutline} className="planTabIcon"></IonIcon>
                <IonLabel className="itemLabel">See your saves on a map</IonLabel>
            </IonItem>
            <IonItem lines="none" className="itemLabel">
                <IonIcon slot="start" icon={documentText} className="planTabIcon"></IonIcon>
                <IonLabel className="itemLabel">Keep track of notes, links, and more</IonLabel>
            </IonItem>
            <IonItem lines="none" className="itemLabel">
                <IonIcon slot="start" icon={personAdd} className="planTabIcon"></IonIcon>
                <IonLabel className="itemLabel">Share and collaborate on your plans</IonLabel>
            </IonItem>
                    
            <h1>Trip name</h1>
            <IonSearchbar className="tripSearch" placeholder="Ex:Weekend in NYC"></IonSearchbar>
            <div className="tripButton">
                <IonButton disabled size="large" color="dark" expand="block">Create a Trip</IonButton>
            </div>
        </div>
    );
}
export default Trips;
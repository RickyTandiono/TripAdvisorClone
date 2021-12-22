import React from 'react';
import { IonPage, IonContent, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { useState } from "react";
import '../components/plan.css';
import Trips from '../components/HalamanPlan/Trips';
import Saves from '../components/HalamanPlan/Saves';
import Booking from '../components/HalamanPlan/Booking';

const Plan: React.FC = () => {
    const [value, setValue] = useState('trips');

    const handleSegmentChange = (e: any) => {
        setValue(e.detail.value);
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h2 className="planTitle">Plan</h2>
                <IonSegment onIonChange={(e) => handleSegmentChange(e)} color="dark" scrollable>
                    <IonSegmentButton value="trips">
                        <IonLabel className="segmentLabel">Trips</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="saves">
                        <IonLabel className="segmentLabel">Saves</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="bookings">
                        <IonLabel className="segmentLabel">Bookings</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                {value == "trips" &&
                <Trips></Trips>}
                {value == "saves" &&
                <Saves></Saves>}
                {value == "bookings" &&
                <Booking></Booking>}
            </IonContent>
        </IonPage>
    );
};
export default Plan;
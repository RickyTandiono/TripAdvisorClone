import React from 'react';
import { IonPage, IonContent, IonCard, IonButton } from "@ionic/react";
import '../components/review.css';

const Review: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h2>Review</h2>
                <IonCard className="review">
                    <div className="reviewCard">
                        <IonButton color="black" size="large" className="reviewButton">
                            Write a review
                        </IonButton>
                    </div>
                </IonCard>
                <IonCard className="upload">
                    <div className="reviewCard">
                        <IonButton color="black" size="large" className="reviewButton">
                            Upload a photo
                        </IonButton>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};
export default Review;
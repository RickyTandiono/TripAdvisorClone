import React from 'react';
import { IonPage, IonContent, IonSearchbar, IonTitle, IonHeader, IonCardContent, IonCard, IonCardTitle, IonButton, IonCol, IonGrid, IonRow, IonToolbar } from "@ionic/react";
import '../components/search.css';

const Search: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h2>Search</h2>
                <IonSearchbar placeholder="Where to?" className="searchBarPage"></IonSearchbar>
                <IonCard>
                    <div className="div1">
                        <IonTitle>
                            <h2>See what's good</h2>
                            <h2 className="h2Bottom">nearby.</h2>
                        </IonTitle>
                        <IonButton size="large" fill="clear" className="buttonLocation">Turn on location settings</IonButton>
                    </div>
                </IonCard>
                <div className="picture">
                    <h3>Destinations travelers love</h3>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonCard className="city1">
                                <h1 className="cardPictureTop">New York City</h1>
                                </IonCard>
                            </IonCol>
                            <IonCol>
                                <IonCard className="city2">
                                <h1 className="cardPictureTop">Singapore</h1>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonCard className="city3">
                                <h1 className="cardPictureTop">Rome</h1>
                                </IonCard>
                            </IonCol>
                            <IonCol>
                                <IonCard className="city4">
                                <h1 className="cardPictureTop">Paris</h1>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};
export default Search;
import React from 'react';
import { IonPage, IonToolbar, IonContent, IonAvatar, IonButton, IonItem, IonIcon, IonCol, IonGrid, IonRow, IonCard } from "@ionic/react";
import { bedOutline, chatboxOutline, restaurantOutline, ticketOutline } from "ionicons/icons";
import '../components/explorer.css';

const Explore: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonContent className="contentExplorerTop">
                    <IonToolbar color="black" className="toolbar">
                        <h2 className="ion-padding">Explore</h2>
                        <IonAvatar className="avatar" slot="end">
                            <img src="https://en.gravatar.com/userimage/211851410/5afdf32bb275aedcdb57b0030a957275.jpg" />
                        </IonAvatar>
                    </IonToolbar>
                    <IonGrid className="scrollable">
                        <IonRow className="ion-nowrap">
                            <IonCol>
                                <IonButton size="large" color="white" className="exploreButton">
                                    <IonIcon slot="start" icon={bedOutline}/>
                                    Hotels
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton size="large" color="white" className="exploreButton">
                                    <IonIcon slot="start" icon={ticketOutline}/>
                                    Things to do
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton size="large" color="white" className="exploreButton">
                                    <IonIcon slot="start" icon={restaurantOutline}/>
                                    Restaurants
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton size="large" color="white" className="exploreButton">
                                    <IonIcon slot="start" icon={chatboxOutline}/>
                                    Forums
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonItem text-wrap color="white">
                </IonItem>

                <IonContent className="content1 ion-padding lower-content">
                    <div className="div1">
                        <h2 className="top1">Goodbye to</h2>
                        <h2>cruishing heat</h2>
                        <h2>and crushing</h2>
                        <h2>crowds</h2>
                        <h3>Why fall is the best time to visit our
                            national parks</h3>
                        <IonButton size="large" color="light">Get the intel</IonButton>
                    </div>
                </IonContent>

                <IonContent className="content2 ion-padding lower-content">
                    <div className="div2">
                        <h1>Small batch stays</h1>
                        <h4>Cool cities, cooler boutique hotels</h4>
                        <IonGrid className="scrollable">
                            <IonRow className="ion-nowrap">
                                <IonCol className="cardPicture">
                                    <IonCard className="villas1">
                                        <h2>Austin</h2>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="cardPicture">
                                    <IonCard className="villas2">
                                        <h2>Nashville</h2>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="cardPicture">
                                    <IonCard className="villas3">
                                        <h2>New York City</h2>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="cardPicture">
                                    <IonCard className="villas4">
                                        <h2>Washington DC</h2>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                    <div className="div2">
                        <h1>Plan your next escape</h1>
                        <h4>Family-friendly spots to explore</h4>
                        <IonGrid className="scrollable">
                            <IonRow className="ion-nowrap">
                                <IonCol className="cardPicture">
                                    <IonCard className="building1">
                                        <h2>Charleston</h2>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="cardPicture">
                                    <IonCard className="building2">
                                        <h2>Gatlinburg</h2>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="cardPicture">
                                    <IonCard className="building3">
                                        <h2>Park City</h2>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="cardPicture">
                                    <IonCard className="building4">
                                        <h2>Sedona</h2>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonContent>

                <IonContent className="content3 ion-padding lower-content">
                    <div className="div3">
                        <h2 className="top2">Explore Las</h2>
                        <h2>Vegas, fork first</h2>
                        <h3>Our guide to the top celevrity chef
                            restaurants in Vegas</h3>
                        <IonButton size="large" color="light">Check them out</IonButton>
                    </div>
                </IonContent>

                <IonItem text-wrap color="white">
                </IonItem>

                <IonContent className="content4 ion-padding lower-content">
                    <div className="div3">
                        <h2 className="top2">Pack that</h2>
                        <h2>weekender bag</h2>
                        <h3>Our guide to last-minute road trips
                            you can do right now</h3>
                        <IonButton size="large" color="light">Read the guide</IonButton>
                    </div>
                </IonContent>

                <IonItem text-wrap color="white">
                </IonItem>

                <IonContent className="content5 ion-padding lower-content">
                    <div className="div3">
                        <h2 className="top2">From dream trips</h2>
                        <h2>to Michelin meals</h2>
                        <h3>All the ways we're celebraing
                            Hispanic Heritage Month</h3>
                        <IonButton size="large" color="light">Read the guide</IonButton>
                    </div>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};
export default Explore;
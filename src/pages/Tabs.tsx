import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { compassOutline, heartOutline, homeOutline, pencilOutline, searchOutline, videocamOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Explore from "./Explore";
import Plan from "./Plan";
import Review from "./Review";
import Search from "./Search";

const MailTabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/explore" />
                <Route exact path="/tabs/explore" component={Explore} />
                <Route exact path="/tabs/search" component={Search} />
                <Route exact path="/tabs/plan" component={Plan} />
                <Route exact path="/tabs/review" component={Review} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="explore" href="/tabs/explore">
                    <IonIcon icon={compassOutline} />
                    <IonLabel>Explore</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/tabs/search">
                    <IonIcon icon={searchOutline} />
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
                <IonTabButton tab="plan" href="/tabs/plan">
                    <IonIcon icon={heartOutline} />
                    <IonLabel>Plan</IonLabel>
                </IonTabButton>
                <IonTabButton tab="review" href="/tabs/review">
                    <IonIcon icon={pencilOutline} />
                    <IonLabel>Review</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};
export default MailTabs;
import { IonButton } from '@ionic/react';
import React from 'react';
import '../plan.css'

const Booking: React.FC = () => {
    return(
        <div className="bookDiv">
            <IonButton size="large" color="dark">
                View my bookings
            </IonButton>
        </div>
    );
}
export default Booking;
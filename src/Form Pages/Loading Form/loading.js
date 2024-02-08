
import React from "react";
import { JellyTriangle } from '@uiball/loaders'

function ScreenLoading() {
    return (
        <div style={styles.container}>
            <JellyTriangle
                size={40}
                lineWeight={5}
                speed={2}
                color="#0056b3"
            />
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
};

export default ScreenLoading;


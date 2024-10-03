import "./../styles.css"
import "./../fontello/css/lkt-documentation-card.css"

import {App, Plugin} from "vue";
import {default as documentationCard} from "./lib-components/LktDocumentationCard.vue";
import LktAnchor from "lkt-anchor";

const LktDocumentationCard: Plugin = {
    install: (app: App|any, options: any) => {
        // Register plugin components
        if (app.component('lkt-documentation-card') === undefined) app.component('lkt-documentation-card', documentationCard);

        // Register additional components
        if (app.component('lkt-anchor') === undefined) {
            console.log('ahhhh');
            app.use(LktAnchor);
        }
    },
};

export default LktDocumentationCard;
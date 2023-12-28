import { Language } from '@/enums/Language';
import { useLanguageStore } from '@/stores/language';
import { jsPDF } from 'jspdf';

export function getReady() {

    // initialize document
    const getReadyDoc = new jsPDF();

    // add fonts
    getReadyDoc.addFont("@/assets/fonts/Lato-Regular.ttf", 'Lato', 'Lato');
    getReadyDoc.addFont("@/assets/fonts/Raleway-Medium.ttf", 'Raleway', 'Raleway');

    // write and save document
    const writeGetReady = (): void => {

        switch (useLanguageStore().language) {
            case Language.EN:
                writeEnglishDoc();
                getReadyDoc.save("Get-Ready.pdf");
                break;
            case Language.FR:
                writeFrenchDoc();
                getReadyDoc.save("Preparation.pdf");
                break;
            default:
                writeFrenchDoc();
                getReadyDoc.save("Preparation.pdf");
                break;
        }
    }

    // write in french
    const writeFrenchDoc = (): void => {
        getReadyDoc.text("Prêt...", 10, 10);
        getReadyDoc.setFont('Lato');
        getReadyDoc.text("Prêt...", 20, 20);
        getReadyDoc.setFont('Raleway');
        getReadyDoc.text("Prêt...", 30, 10);
    }

    // write in english
    const writeEnglishDoc = (): void => {
        getReadyDoc.text("Ready...", 10, 10)
        getReadyDoc.setFont('Lato');
        getReadyDoc.text("Ready...", 20, 20);
        getReadyDoc.setFont('Raleway');
        getReadyDoc.text("Ready...", 30, 10);
    }

    // exports
    return {
        writeGetReady
    }
}
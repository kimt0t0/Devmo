import { Language } from '@/enums/Language';
import { useLanguageStore } from '@/stores/language';
import { useGetReadyStore } from '@/stores/getready';
import { jsPDF } from 'jspdf';


export function getReady() {

    // initialize document
    const getReadyDoc = new jsPDF();

    // generate formatted creation date
    const getFormatedDate = (): string => {
        getReadyDoc.setCreationDate(new Date());
        let date: string = getReadyDoc.getCreationDate('now').toString();
        let formattedDate: string = date.slice(8, 10) + '/' + date.slice(6, 8) + '/' + date.slice(2, 6);
        return formattedDate;
    }

    // get data
    const getReadySummaryData = useGetReadyStore().getReadySummary;

    // add fonts
    getReadyDoc.addFont("/assets/fonts/Lato-Regular.ttf", 'Lato', 'Lato');
    getReadyDoc.addFont("/assets/fonts/Raleway-Medium.ttf", 'Raleway', 'Raleway');

    // text styling methods
    const setTextColor = (color: 'dark' | 'neutral' | 'lighterNeutral'): void => {
        switch (color) {
            case 'lighterNeutral':
                getReadyDoc.setTextColor(172, 196, 171);
                break;
            case 'neutral':
                getReadyDoc.setTextColor(76, 108, 75);
                break;
            default:
                getReadyDoc.setTextColor(104, 93, 80);
                break;
        }
    };

    const setTextSize = (size: 'smaller' | 'small' | 'medium' | 'large' | 'larger'): void => {
        switch (size) {
            case 'smaller':
                getReadyDoc.setFontSize(10);
                break;
            case 'small':
                getReadyDoc.setFontSize(12);
                break;
            case 'large':
                getReadyDoc.setFontSize(24);
                break;
            case 'larger':
                getReadyDoc.setFontSize(36);
                break;
            default:
                getReadyDoc.setFontSize(16);
                break;
        }
    }

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
    };

    // write in french
    const writeFrenchDoc = (): void => {

        // Main Title
        setTextColor("lighterNeutral");
        setTextSize("larger");
        getReadyDoc.text("Présentation de mon projet web", 15, 30);

        // General
        // title
        setTextColor("dark");
        setTextSize("large");
        getReadyDoc.text("Aspects généraux", 25, 60);
        // contents

        // Structure
        // title
        setTextColor("dark");
        setTextSize("large");
        getReadyDoc.text("La structure", 25, 160);
        // contents

        // Details
        getReadyDoc.addPage();
        // title
        setTextColor("dark");
        setTextSize("large");
        getReadyDoc.text("Les détails", 25, 30);
        // contents

        // Conclusion (use a setter)
        getReadyDoc.addPage();
        // title
        setTextColor("dark");
        setTextSize("large");
        getReadyDoc.text("En conclusion", 25, 30);
        // contents

        // Footer
        setTextColor("neutral");
        setTextSize("smaller");
        getReadyDoc.text('Créé sur le site KimDev le ' + getFormatedDate(), 130, 280);
    };

    // write in english
    const writeEnglishDoc = (): void => {
        getReadyDoc.text("Ready...", 10, 10);
    };

    // exports
    return {
        writeGetReady
    };
}
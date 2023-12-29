import { ref } from 'vue';
import { Language } from '@/enums/Language';
import { useLanguageStore } from '@/stores/language';
import { useGetReadyStore } from '@/stores/getready';
import { jsPDF } from 'jspdf';


export function getReady() {

    // initialize document
    const getReadyDoc = new jsPDF();
    const currentHeight = ref<number>(30);

    // generate formatted text elements
    // (date)
    const getFormatedDate = (): string => {
        getReadyDoc.setCreationDate(new Date());
        let date: string = getReadyDoc.getCreationDate('now').toString();
        let formattedDate: string = date.slice(8, 10) + '/' + date.slice(6, 8) + '/' + date.slice(2, 6);
        return formattedDate;
    };
    // (shapes)
    const getShapeTextFr = (): string => {
        switch (useGetReadyStore().getReadySummary.general.shapes) {
            case 'round':
                return 'arrondies'
            case 'angular':
                return 'angulaires'
            default:
                return 'variées ou autres'
        }
    };
    const getShapeTextEn = (): string => {
        switch (useGetReadyStore().getReadySummary.general.shapes) {
            case 'round':
                return 'rounded'
            case 'angular':
                return 'angular'
            default:
                return 'various or other types of'
        }
    };
    // (user accounts)
    const getUserAccountsTextFr = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.userAccounts) {
            case true:
                return 'oui';
            case false:
                return 'non';
            default:
                return 'indéterminé';
        }
    };
    const getUserAccountsTextEn = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.userAccounts) {
            case true:
                return 'yes';
            case false:
                return 'no';
            default:
                return 'undecided';
        }
    };
    // (online sells)
    const getOnlineSellsTextFr = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.onlineSells) {
            case true:
                return 'oui';
            case false:
                return 'non';
            default:
                return 'indéterminé';
        }
    };
    const getOnlineSellsTextEn = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.onlineSells) {
            case true:
                return 'yes';
            case false:
                return 'no';
            default:
                return 'undecided';
        }
    };
    // (admin pannel)
    const getAdminPannelTextFr = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.adminPannel) {
            case true:
                return 'oui';
            case false:
                return 'non';
            default:
                return 'indéterminé';
        }
    };
    const getAdminPannelTextEn = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.adminPannel) {
            case true:
                return 'yes';
            case false:
                return 'no';
            default:
                return 'undecided';
        }
    };
    // (advanced functions)
    const getAdvancedTextFr = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.advanced) {
            case true:
                return 'oui';
            case false:
                return 'non';
            default:
                return 'indéterminé';
        }
    };
    const getAdvancedTextEn = (): string => {
        switch (useGetReadyStore().getReadySummary.structure.advanced) {
            case true:
                return 'yes';
            case false:
                return 'no';
            default:
                return 'undecided';
        }
    };

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

    // write text bloc
    const writeTextBloc = (title: string, text: string, height: number): void => {
        getReadyDoc.text(title.toUpperCase() + ' :', 20, currentHeight.value);
        currentHeight.value += 7;
        getReadyDoc.text(text, 20, currentHeight.value, { maxWidth: 180 });
        currentHeight.value += height;
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
        currentHeight.value += 30;
        setTextColor("lighterNeutral");
        setTextSize("large");
        getReadyDoc.text("Aspects généraux", 20, currentHeight.value);
        currentHeight.value += 15;
        setTextColor("dark");
        setTextSize("small");
        // summary
        writeTextBloc(
            'Résumé',
            useGetReadyStore().getReadySummary.general.summary,
            25
        );
        // visitors
        writeTextBloc(
            'Description des visiteur.euse.s potentiel.le.s',
            useGetReadyStore().getReadySummary.general.visitors,
            30
        );
        // key information
        writeTextBloc(
            'Les informations clés du site',
            useGetReadyStore().getReadySummary.general.keyInformation,
            42
        );
        // atmosphere
        writeTextBloc(
            'Atmosphère recherchée',
            useGetReadyStore().getReadySummary.general.atmosphere,
            10
        );
        // shapes and colors
        writeTextBloc(
            'Style',
            'Vous souhaitez des formes plutôt ' + getShapeTextFr() + ' et les couleurs suivantes: ' + useGetReadyStore().getReadySummary.general.colors,
            10
        );
        // inspirations
        writeTextBloc(
            'Inspirations',
            'Vous souhaitez vous inspirer des sites suivants: ' + useGetReadyStore().getReadySummary.general.inspirations + '.\n\nVos raisons sont les suivantes:' + useGetReadyStore().getReadySummary.general.inspirationsDetails,
            40
        );

        // Structure
        // title
        getReadyDoc.addPage();
        currentHeight.value = 30;
        setTextColor("neutral");
        setTextSize("large");
        getReadyDoc.text("La structure", 25, currentHeight.value);
        currentHeight.value += 15;
        setTextColor("dark");
        setTextSize("small");
        // users paths
        writeTextBloc(
            'Le(s) parcours utilisateur.ice prévu(s)',
            useGetReadyStore().getReadySummary.structure.usersPaths,
            35
        );
        // functionalities
        writeTextBloc(
            'Fonctionnalités spécifiques',
            'Comptes utilisateur.ice.s: ' + getUserAccountsTextFr() + '.'
            + '\nVentes en ligne: ' + getOnlineSellsTextFr() + '.'
            + '\nPanneau d\'administration: ' + getAdminPannelTextFr() + '.'
            + '\nVos types de contenus: ' + useGetReadyStore().getReadySummary.structure.contents
            + '\nFonctionnalités avancées: ' + getAdvancedTextFr() + '.',
            35
        );
        // advanced - details
        if (useGetReadyStore().getReadySummary.structure.advancedDetails.length > 3) {
            writeTextBloc(
                'Détail des fonctionnalités avancées',
                useGetReadyStore().getReadySummary.structure.advancedDetails,
                35
            );
        }

        // Details
        getReadyDoc.addPage();
        // title
        setTextColor("dark");
        setTextSize("large");
        getReadyDoc.text("Les détails", 25, 30);
        currentHeight.value = 30;
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
<script lang="ts" setup>
import { useLegalsStore } from '@/stores/legals';
import { XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <aside class="legals-modale">
        <div class="legals-card">
            <!-- header -->
            <div class="legals-header">
                <button class="close-button" type="button" @click="useLegalsStore().toggleLegals">
                    <XMarkIcon class="close-icon" />
                </button>
            </div>
            <!-- contents -->
            <div class="legals-contents">
                <h2 class="legal-main-title">Mentions légales</h2>

                <h3 class="legal-title">1. Présentation du site.</h3>
                <p class="legal-text">En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                    l'économie numérique, il est précisé aux utilisateurs du site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink> l'identité des différents intervenants dans le cadre de sa
                    réalisation et de son suivi : </p>
                <p class="legal-text">Propriétaire : Kim ROBERT – Place Rosa Parks, 44 000 Nantes</p>
                <p class="legal-text">Créateur·e : Kim ROBERT</p>
                <p class="legal-text">Responsable publication : Kim ROBERT</p>
                <p class="legal-text">Webmaster·e : Kim ROBERT</p>
                <p class="legal-text">Hébergeur : Netlify - San Francisco</p>

                <h3 class="legal-title">2. Conditions générales d'utilisation du site et des services proposés.</h3>
                <p class="legal-text">L'utilisation du site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink> implique l'acceptation pleine et entière des conditions générales
                    d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou
                    complétées à tout moment, les utilisateurices du site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink> sont donc invité·e·s à les consulter de manière régulière.</p>
                <p class="legal-text">Ce site est normalement accessible à tout moment aux utilisateurices. Une interruption
                    pour raison de maintenance technique peut être toutefois décidée par l'hébergeur ou par <RouterLink
                        to="/" class="legal-link">
                        www.kim-robert.com</RouterLink>, qui s'efforcera alors de communiquer préalablement aux utilisateurs
                    les dates et heures de l'intervention.</p>
                <p class="legal-text">Le site <RouterLink to="/" class="legal-link">www.kim-robert.com</RouterLink> est mis
                    à jour régulièrement par Kim ROBERT. De la même façon, les mentions légales peuvent être modifiées à
                    tout moment : elles s'imposent néanmoins à l'utilisateurice qui est invité·e à s'y référer le plus
                    souvent possible afin d'en prendre connaissance.</p>

                <h3 class="legal-title">3. Description des services fournis.</h3>
                <p class="legal-text">Le site <RouterLink to="/" class="legal-link">www.kim-robert.com</RouterLink> a pour
                    objet de fournir une information concernant l'ensemble des activités de l'auto-entreprise.</p>
                <p class="legal-text">Kim ROBERT s'efforce de fournir sur le site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink> des informations aussi précises que possible. Toutefois, iel ne
                    pourra être tenu·e responsable des omissions, des inexactitudes et des carences dans la mise à jour,
                    qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                <p class="legal-text">Tous les informations indiquées sur le site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink> sont données à titre indicatif et sont susceptibles d'évoluer. Par
                    ailleurs, les renseignements figurant sur le site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink> ne sont pas exhaustifs. Ils sont donnés sous réserve de
                    modifications ayant été apportées depuis leur mise en ligne.</p>

                <h3 class="legal-title">4. Limitations contractuelles sur les données techniques.</h3>
                <p class="legal-text">Le site utilise les technologies JavaScript et TypeScript.</p>
                <p class="legal-text">Le site Internet ne pourra être tenu responsable de dommages matériels liés à
                    l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un
                    matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour. </p>

                <h3 class="legal-title">5. Propriété intellectuelle et contrefaçons.</h3>
                <p class="legal-text">Kim ROBERT est propriétaire des droits de propriété intellectuelle ou détient les
                    droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes,
                    logo, icônes, sons, logiciels. Lorsque ce n'est pas le cas il s'agit d'éléments obtenus dans des banques
                    de contenus libres de droits.</p>
                <p class="legal-text">Toute reproduction, représentation, modification, publication, adaptation de tout ou
                    partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
                    autorisation écrite préalable de : Kim ROBERT.</p>
                <p class="legal-text">Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il
                    contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
                    dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

                <h3 class="legal-title">6. Limitations de responsabilité.</h3>
                <p class="legal-text">Kim ROBERT ne pourra être tenu responsable des dommages directs et indirects causés au
                    matériel de l'utilisateur, lors de l'accès au site <RouterLink to="/" class="legal-link">
                        www.kim-robert.com</RouterLink>, et résultant soit de l'utilisation d'un matériel ne répondant pas
                    aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité </p>
                <p class="legal-text">Kim ROBERT ne pourra également être tenu responsable des dommages indirects (tels par
                    exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site <RouterLink
                        to="/" class="legal-link">www.kim-robert.com</RouterLink>. </p>
                <p class="legal-text">Des espaces interactifs (possibilité de poser des questions dans l'espace contact)
                    sont à la disposition des utilisateurs. Kim ROBERT se réserve le droit de supprimer, sans mise en
                    demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable
                    en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Kim
                    ROBERT se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de
                    l'utilisateurice, notamment en cas de message à caractère raciste, sexiste, discriminant, injurieux,
                    diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie, vidéo…).</p>

                <h3 class="legal-title">7. Gestion des données personnelles.</h3>
                <p class="legal-text">En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6
                    janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive
                    Européenne du 24 octobre 1995. </p>
                <p class="legal-text">Kim ROBERT ne collecte des informations personnelles relatives à l'utilisateurice que
                    pour le besoin de certains services proposés par l'auto-entreprise. L'utilisateurice fournit ces
                    informations en toute connaissance de cause, et procède par iel-même à leur saisie. Il est alors précisé
                    à l'utilisateurice du site l'obligation ou non de fournir ces informations.</p>
                <p class="legal-text">Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier
                    1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateurice dispose d'un droit
                    d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa
                    demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du / de la
                    titulaire de la pièce, en précisant l'adresse (mail ou physique) à laquelle la réponse doit être
                    envoyée.</p>
                <p class="legal-text">Aucune information personnelle de l'utilisateurice du site n'est publiée à son insu,
                    échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.</p>
                <p class="legal-text">Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations
                    personnelles.</p>

                <h3 class="legal-title">8. Liens hypertextes et cookies.</h3>
                <p class="legal-text">Le site <RouterLink to="/" class="legal-link">www.kim-robert.com</RouterLink> contient
                    un certain nombre de liens hypertextes vers d'autres sites, mis en place par Kim ROBERT. Cependant, Kim
                    ROBERT n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en
                    conséquence aucune responsabilité de ce fait.</p>
                <p class="legal-text">En cas de signalement d'un problème sur l'un de ces autres sites, Kim ROBERT s'engage
                    à effectuer les vérifications nécessaires et, en cas avéré de contenus problématiques (disciminations,
                    propos racistes, etc), à retirer les liens hypertextes vers le site concerné.</p>
                <p class="legal-text">La navigation sur le site <RouterLink to="/" class="legal-link">www.kim-robert.com
                    </RouterLink> est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de
                    l'utilisateurice. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de
                    l'utilisateurice mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un
                    site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont
                    également vocation à permettre diverses mesures de fréquentation.</p>
                <p class="legal-text">Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à
                    certains services. L'utilisateurice peut toutefois configurer son ordinateur pour refuser l'installation
                    des cookies.</p>

                <h3 class="legal-title">9. Droit applicable et attribution de juridiction.</h3>
                <p class="legal-text">Tout litige en relation avec l'utilisation du site <RouterLink to="/"
                        class="legal-link">www.kim-robert.com</RouterLink> est soumis aux tribunaux francais compétents
                    statuant selon le droit français. </p>

                <h3 class="legal-title">10. Les principales lois concernées.</h3>
                <p class="legal-text">Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août
                    2004 relative à l'informatique, aux fichiers et aux libertés.</p>
                <p class="legal-text">Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>

                <h3 class="legal-title">11. Lexique.</h3>
                <p class="legal-text">Utilisateurice : Internaute se connectant, utilisant le site susnommé.</p>
                <p class="legal-text">Informations personnelles : « les informations qui permettent, sous quelque forme que
                    ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent »
                    (article 4 de la loi n° 78-17 du 6 janvier 1978). </p>

            </div>
        </div>
    </aside>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.legals-modale {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: color($light, 50);
}

.legals-card {
    box-sizing: border-box;
    background-color: color($secondary, 55);
    border-radius: $radius-m;
    width: 860px;
    height: 80%;
    padding: $space-m $space-l;
}

.legals-header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 0 $space-l;
}

.legals-contents {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    scrollbar-width: thin;
    color: color($secondary, 10);
}

.legal-main-title {
    font-size: $txt-m;
    font-weight: 500;
    padding: 0 $space-l $space-s 0;
    margin-bottom: $space-xxl;
    width: fit-content;
    border-bottom: 2px solid color($secondary, 10);
}

.legal-title {
    font-size: $txt-s;
    font-weight: 500;
}

.legal-text {
    font-size: $txt-xs;
    font-weight: 400;
}

.legal-link {
    color: color($danger, 50);
    font-weight: 500;
}
</style>
import { BrowserRouter as Router, Link } from "react-router-dom";


function Home() {
    return(
    
    <div class="content">
    <header>
        <h1>VoteChain<br /></h1>
        <p>Le site de vote du futur</p>
    </header>
    <p> 1. Proposer un service web<br />
        2. Service décentralisé sur la blockchain (ethereum, actif programmable)<br />
        3. Un protocole pour représenter et faire vivre le vote<br />
        4. Une clé cryptographique (carte électorale digitale)<br />
        5. Gestion des wallet <br />
        6. Paiement en ethereum</p>


        <div id='presentation' class="h-hide">

            <p>Ce projet est une application permettant de proposer un vote en ligne a une grande partie de la population en se basant sur le rincipe de la blockchain
                pour rendre les votes consultables et vérifiables par la majorité.<br />
                <br />
            L'utilisation de cette application nécessite plusieurs paramètres listés ci-dessous :<br />
                  --  Connexion a Metamask.<br />
                  --  Un wallet approvisionné en ETH.<br />
                  --  Un navigateur Internet à jour.<br />
            <br />	
                Le principe de cette application est finalement de proposer un nouveau système plus enclin à la transparence que les systèmes génériques actuels.
            </p>
          </div>
        </div>
    )
}

export default Home;
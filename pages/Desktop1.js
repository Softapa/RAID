// components/Desktop1.js
import React from "react";
import styles from "./Desktop1/Desktop1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 8px;
`;

export const Imagees = styled.img`
  max-width: 100%;
  height: auto;
`;

import {
  faDollarSign,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Images } from "../public/constants";

const Desktop1 = () => {
  const data = [
    {
      id: 1,
      description: "Investissement",
      amount: 100,
      type: "in",
      imageUrl: Images.receipt,
    },
    {
      id: 2,
      description: "Investissement",
      amount: 50,
      type: "out",
      imageUrl: Images.receipt,
    },
    {
      id: 3,
      description: "Investissement",
      amount: 75,
      type: "in",
      imageUrl: Images.receipt,
    },
  ];

  return (
    <>
      <div className={styles.paymentflowcontainer}>
        {/*========*/}
        <div className={styles.remainingfunds}>
          <div className={styles.Disponiblescontain}>
            <div className={styles.Disponibles}>Mes Fonds Disponibles</div>
            <div className={styles.amount}>50,00€</div>
          </div>

          <div className={styles.Disponiblesbtncontain}>
            <div className={styles.depositfunds}>
              <div className={styles.import}>
                <Image src={Images.import} fill />
              </div>
              <div className={styles.Déposer}>Déposer des fonds</div>
            </div>
            <div className={styles.depositfundsexport}>
              <div className={styles.import}>
                <Image src={Images.export} fill />
              </div>
              <div className={styles.Retirer}>Retirer des fonds</div>
            </div>
          </div>
        </div>

        {/*========*/}
        <div className={styles.totalinvestmentcontain}>
          <div className={styles.Investissement}>Investissement Total</div>
          <div className={styles.amount}>100,00€</div>
          <div className={styles.Tinvestbtn}>
            <div>7.4% ce mois-ci</div>
          </div>
        </div>
        {/*========*/}
        <div className={styles.totalinvestmentcontain}>
          <div className={styles.Investissement}>Revenus totals</div>
          <div className={styles.amount}>50,00€</div>
          <div className={styles.Tinvestbtn}>
            <div>7.4% ce mois-ci</div>
          </div>
        </div>
        {/*========*/}
      </div>
      <div className={styles.tablecontain}>
        <div className={styles.tableheading}>Dernieres Transactions</div>
        <div className={styles.FiltreContain}>
          <div className={styles.Filtre}>Filtrer par:</div>

          <div className={styles.FiltreContent}>Operation</div>
          <div className={styles.FiltreContent}>Date</div>
          <div className={styles.FiltreContent}>Montant</div>
        </div>

        {/*========*/}
        <div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              padding: "0px 10px",
              border: "1px groove #ebebeb",
              marginTop: "1vw",
            }}
          >
            <div className={styles.operationheading}>
              <div className={styles.receipt}>
                <Image src={Images.receipt} fill />
              </div>
              <div className={styles.Operation}>Operation</div>
            </div>
            {/*========*/}
            <div className={styles.operationdate}>
              <div className={styles.receipt}>
                <Image src={Images.receipt} fill />
              </div>
              <div className={styles.Operation}>Date</div>
            </div>
            <div className={styles.operationdate}>
              <div className={styles.receipt}>
                <Image src={Images.receipt} fill />
              </div>
              <div className={styles.Operation}>Montant</div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              padding: "0px 10px",
              border: "1px groove #ebebeb",
              marginTop: "1vw",
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div>qwertyuiop</div>
            ))}
          </div>
          {/*========*/}
        </div>
      </div>
    </>
  );
};

export default Desktop1;
